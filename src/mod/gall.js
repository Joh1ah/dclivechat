import { str_survey, str_notice } from './strings.js';
import { getAsText } from "./fetch.js";
import { debug, getValueById, genUtil, getListUrl } from "./common.js";

export let initGall = async (gallId, interval) => {
    let gall = {
        id: gallId,
        type: '',
        reset: null,
        set: null,
        onpostdata: null,
        oncomment: null,
        last: 0,
    };

    let listUrl = getListUrl('G', gallId);
    let html = await getAsText(listUrl);
    if (!html) return null;
    let redirect = html.match(/^<script type="text\/javascript">location.replace\(["']([^"']+)["']\);<\/script>/);
    if (redirect) {
        listUrl = redirect[1];
        html = await getAsText(listUrl);
        if (!html) return null;
    }

    // get gall type
    let gallType = 'G';
    let bMinor = /\/mgallery\//.test(listUrl);
    let bMini = /\/mini\//.test(listUrl);
    if (bMinor) gallType = 'M';
    if (bMini) gallType = 'm';
    gall.type = gallType;

    // get gall name
    let gallName = getValueById(html, 'gallery_name');

    // start update cycle
    let bFirstUpdate = true;
    let lastNum = 0;
    let worker = null, loop = null;
    let genParams = (genUtil, debug, getAsText, listUrl, commentCount, str_survey, str_notice) => {
        let o = genUtil();
        o._D = debug;
        o._T = getAsText;
        o._U = listUrl;
        o._CC = commentCount;
        o._SS = str_survey;
        o._SN = str_notice;
        return o;
    }
    let updateList = async ({
        _D: debug,
        _T: getAsText,
        _U: listUrl,
        _CC: commentCount,
        _IH: getInnerHtml,
        _OH: getOuterHtml,
        _IT: getInnerText,
        _AT: getAttributeTo,
        _A: getAttribute,
        _TF: testFix,
        _SS: str_survey,
        _SN: str_notice
    }) => {
        let unescape = (safe) => {
            return safe
                .replace(/&amp;/g, '&')
                .replace(/&nbsp;/g, ' ')
                .replace(/&#035;/g, '#')
                .replace(/&#039;/g, `'`)
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"');
        };
        let text = await getAsText(listUrl);
        if (!text) return;
        try {
            let _lastNum; 
            try {
                _lastNum = _LN;
            } catch {
                _lastNum = gall.last;
            }
            let _curNum = _lastNum;
            let postDataArray = [];
            for (let match of text.matchAll(/<tr[^>]*class="[^"]*us-post[^"]*"[^>]*data-no="([^"]*)".+?<\/tr>/g)) {
                let post = match[0];
                let postData = {
                    num: 0,
                    subject: '',
                    title: '',
                    nickname: '',
                    id: '',
                    ip: '',
                    date: 0,
                    img: '',
                    fix: false,
                    count: 0,
                };
                let num = Number.parseInt(match[1]);
                postData.num = num;
                let reply = post.match(/<span[^>]*class="[^"]*reply_num[^>]*"[^>]*>\[([0-9]+)\]<\/span>/);
                let lastCount = commentCount[num] ?? 0; // worker support
                let count = 0;
                if (reply) {
                    count = Number.parseInt(reply[1]);
                    if (count) postData.count = count;
                }
                // skip when the post is older than last post
                if (num <= _lastNum) {
                    if (count != lastCount) {
                        commentCount[num] = count;
                        self.postMessage({ type:'cc', num, count });
                    }
                    continue;
                }
                _curNum = Math.max(_curNum, num);
                let title = getInnerText(post, 'td', 'gall_tit');
                if (reply) title = title.slice(0, title.length - reply[1].length - 2);
                postData.title = unescape(title);
                let numString = getInnerHtml(post, 'td', 'gall_num');
                if (numString == str_survey || numString == str_notice || numString == 'AD') continue; // 말머리 없음
                let subject = getInnerText(post, 'td', 'gall_subject');
                postData.subject = unescape(subject);
                if (subject == str_survey || subject == str_notice || subject == 'AD') continue; // 말머리 있음
                let writer = getOuterHtml(post, 'td', 'gall_writer');
                if (writer) {
                    getAttributeTo(writer, 'data-nick', postData, 'nickname');
                    getAttributeTo(writer, 'data-uid', postData, 'id');
                    getAttributeTo(writer, 'data-ip', postData, 'ip');
                    let nikcon = writer.match(/<img[^>]*src=["']([^"']+)["']/);
                    if (nikcon) {
                        let img = nikcon[1];
                        postData.img = img;
                        postData.fix = testFix(img);
                    }
                }
                let dates = getOuterHtml(post, 'td', 'gall_date');
                let date = getAttribute(dates, 'title');
                if (date !== null) postData.date = Date.parse(date);
                postDataArray.push(postData);
            }
            self.postMessage({type:'pd', d: postDataArray, n: _curNum});
        } catch (e) {
            debug(e);
        }
    };
    let updateCycle = async (cycle, update, params) => {
        await update(params);
        let _iv;
        try {
            _iv = _IV;
        } catch {
            _iv = interval;
        }
        let _loop = setTimeout(() => cycle(cycle, update, params), _iv);
        try {
            loop = _loop;
        } catch { }
    };
    let handler = async (e) => {
        let data = e.data;
        if (data && data.type) {
            if (data.type == 'pd') {
                lastNum = data.n;
                gall.last = lastNum;
                gall.onpostdata?.(data.d);
                if (worker) worker.postMessage({ type: 'ln', ['ln']: lastNum });
                return;
            }
            if (data.type == 'cc') return gall.oncomment?.(data.n, data.c, bFirstUpdate);
            if (data.type == 'err') return initUpdate('worker err');
        }
    };
    let initUpdate = (...reason) => {
        debug('init update', ...reason);
        bFirstUpdate = true;
        if (window.Worker) {
            if (worker) worker.terminate();
            let blob = new Blob([
                `let _IV=${ interval };`,
                `let _LN=${ lastNum };`,
                `let _UC=${ updateCycle.toString() };`,
                `let _GP=${ genParams.toString() };`,
                `let loop=null;`,
                `self.onmessage=async(e)=>{switch(e.data.type){case'iv':_IV=e.data.iv;break;case'ln':_LN=e.data.ln;break;}};`,
                `_UC(_UC,${updateList.toString()},_GP(${genUtil.toString()},console.error,${getAsText.toString()},'${listUrl}',{},'${str_survey}','${str_notice}'));`
            ], { type: 'text/javascript' });
            let url = URL.createObjectURL(blob);
            worker = new Worker(url);
            worker.onerror = (...any) => {
                debug(...any);
                initUpdate('error', ...any);
            };
            worker.onmessage = handler;
        } else {
            if (loop) clearTimeout(loop);
            updateCycle(updateCycle, updateList, genParams(genUtil, debug, getAsText, listUrl, {}, str_survey, str_notice));
            onmessage = handler;
        }
    };
    gall.reset = initUpdate;
    initUpdate();

    gall.set = (_interval) => {
        interval = _interval;
        if (worker) worker.postMessage({ type: 'iv', iv: _interval });
    };
    return gall;
};