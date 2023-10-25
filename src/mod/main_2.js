import { initCaptchaV3 } from "./captcha.js";
import { addClass, body, clearChildren, debug, doc, getAttribute, getInnerHtml, getInnerText, getListUrl, getOuterHtml, testFix } from "./common.js";
import { appName, bMobileDevice, host, innerText } from "./constant.js";
import { getAsText } from "./fetch.js";
import { initGall } from "./gall.js";
import { initOptions } from "./option.js";
import { str_dclivechat, str_noGalleryUrl, str_noSupportMobile } from "./strings.js";
import { initUI } from "./ui.js";
import { initUser } from "./user.js";
import { initVideo } from "./video.js";

//#region 

if (DEBUG) debug('initializing');

let validateLocation = (url) => {
    let match = url.match(/^https?:\/\/(gall|m|www).dcinside.com([^\n]+)$/);
    if (!match) {
        alert(str_noGalleryUrl);
        return false;
    }
    let idMatch = null;
    if (match[1] === 'www') {
        alert(str_noGalleryUrl);
        location.href = host;
        return false;
    }
    if (match[1] === 'm') {
        alert(str_noSupportMobile);
        // 모바일 페이지에서 PC 페이지로 넘어가도록 쿠키 변경
        doc.cookie = 'm_dcinside_web=done; path=/; domain=.dcinside.com';
        idMatch = match[2].match(/(board|mini)\/([A-Za-z0-9_]+)($|\?|\/|#)/);
        let reloadUrl = host;
        let gallId = '';
        if (idMatch) gallId = idMatch[2];
        if (gallId) reloadUrl = getListUrl('G', gallId);
        location.href = reloadUrl
        return false;
    }
    return true;
}
if (!validateLocation(location.href)) return;

// DC 라이브챗이 이미 실행중인지 확인
if (doc[appName]) return doc[appName]();
doc[appName] = () => openAlert(str_runningAlready);

doc.title = str_dclivechat + ' :: ' + doc.title;

//OPTIONS
// 로드는 초기화 마지막 순서로
let options = initOptions(appName);
//BLOCKS
//LOGIN
let user = initUser();

// 기존 타이머 제거
for (var i = 1; i < 99999; i++) window.clearInterval(i);
for (var i = 1; i < 99999; i++) window.clearTimeout(i);

// favicon
/*
let setFaviconColor = (() => {
    let favicon = createElement('link', head, {
        rel: 'icon',
        href: ''
    });
    let size = 128;
    let canvas = createElement('canvas', null, { width: size, height: size });
    let ctx = canvas.getContext('2d', { alpha: true });
    let icon = createElement('img', null);

    ctx.fill(new Path2D('M19.5.9c-7 1.8-13.4 7-17.1 14.1C.6 18.3.5 21.5.5 64c0 43 .1 45.7 1.9 49.4 2.5 5 7.2 9.7 12.2 12.2 3.7 1.8 6.4 1.9 49.4 1.9s45.7-.1 49.4-1.9c5-2.5 9.7-7.2 12.2-12.2 1.8-3.7 1.9-6.4 1.9-49.4 0-42.5-.1-45.7-1.9-49-2.6-4.9-7.4-9.8-12.1-12.3C109.6.5 108.5.5 66 .3 42.1.2 21.2.5 19.5.9zm44.6 32.2L68 35v18.1l4.6-3.3C80 44.5 84.2 45 102 53.4c8 3.7 14.8 7.1 15.2 7.5.6.5-10.3 10.1-11.5 10.1-.3 0-.7-.9-1-1.9-.5-2.2-13.4-9.1-16.9-9.1-2.5 0-4.6 1.2-13.7 8l-6 4.5-.1 7.1c0 7.1 0 7.2 3.2 8.5 1.7.7 4.7 1.3 6.5 1.3 1.8 0 3.3.1 3.3.2 0 .2-2.7 2.4-6.1 5l-6.1 4.6-8.5-3.7c-6.2-2.8-8.7-4.5-9.4-6.3-.8-2-1.2-2.2-2.4-1.2-1.1.9-3.4.2-11.2-3.5-11.3-5.3-12.9-6.6-15.4-12-1.5-3.3-1.9-6.6-1.9-18.1 0-12.8.2-14.4 2.1-16.8 1.1-1.4 3-2.6 4.2-2.6 3.5 0 19 7.7 21.6 10.7l2.4 2.7-.5-11-.4-11.1 5.4 2.4c3 1.3 7.2 3.3 9.3 4.4z'));
    ctx.fill(new Path2D('M38.6 49.7c-.3.3-.6 6.2-.6 12.9 0 12.2 0 12.4 2.6 14 2.2 1.5 2.7 1.5 3.5.3.5-.8.9-1.9.9-2.4 0-.6 1.1-2.7 2.5-4.8 2.2-3.1 2.5-4.7 2.3-9.5l-.3-5.7-5.1-2.7c-2.8-1.5-5.4-2.5-5.8-2.1z'));
    icon.src = canvas.toDataURL();

    return (hex) => {
        ctx[globalCompositeOperation] = 'copy';
        ctx.fillStyle = hex;
        ctx.fillRect(0, 0, size, size);
        ctx[globalCompositeOperation] = 'destination-in';
        ctx.drawImage(icon, 0, 0);
        ctx[globalCompositeOperation] = 'destination-over';
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(12, 12, size - 24, size - 24);
        favicon.href = canvas.toDataURL();
    };
})();
*/

if (bMobileDevice) initCaptchaV3();

//#endregion

let ui = initUI();
initVideo(ui, options, {
    'clear options': () => options.clearSaveData(),
});

(async() => {
    let gall = await initGall('20thdenki', 5000);
    gall.onpostdata = debug;
})();
