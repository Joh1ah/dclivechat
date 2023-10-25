import { blanks } from "./strings.js";
import { host } from "./constant.js";

export let doc = document;
export let body = doc.body;
export let head = doc.head;

export let storage = localStorage ?? null;
export let bWorkerAvailable = window.Worker && true;
export let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
export let parse = Number.parseInt;
export let request = requestAnimationFrame;
export let timeout = setTimeout;
export let encode = encodeURIComponent;
export let toChar = String.fromCharCode;
export let getNow = Date.now;

// 로깅용
let initTime = getNow();

export let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
}
export let initPromise = () => {
    let r, p = new Promise(resolve => r = resolve);
    return {r, p};
};
export let sleep = (ms) => {
    let { r, p } = initPromise();
    timeout(r, ms);
    return p;
}
export let randomInt = (start, end) => {
    let range = end - start + 1;
    let num = Math.random() * range;
    return Math.min(start + Math.floor(num), end);
};
export let unescapeEmoji = (string) => {
    // emoji support
    let matches = string.matchAll(/&#x([0-9a-fA-F]+);/g);
    for (let match of matches) {
        let emoji = String.fromCodePoint('0x' + match[1]);
        string = string.replace(match[0], emoji);
    }
    return string;
}

export let trimHtml = (string) => {
    return string
        .r(/(\r|\t)/g, '')
        .r(/[ ]{2,}/g, ' ');
};
export let buf2hex = (buffer) => {
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
};
export let splice = (list, item) => {
    let index = list.indexOf(item);
    if (index != -1) list.splice(index, 1);
}

let encoder = new TextEncoder();
export let computeHashAsColor = async (string) => {
    let buffer = encoder.encode(string);
    let hash = await crypto.subtle.digest('SHA-256', buffer).catch(debug);
    let hex = buf2hex(hash);
    let color = '#' + hex.slice(0, 6);
    return color;
};
function toBrightColor(hex) {
    let num = parse(hex.substring(1, 7), 16);
    let scaled = Math.floor(num * 360 / 16777215);
    return 'hsl(' + scaled + ',80%,60%)';
};

export let randomBlanks = (count) => {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += blanks[randomInt(0, blanks.length - 1)];
    }
    return output;
};

export let split = (string) => string.split('||');

// Document
export let getCookie = (cookieName) => {
    let x, y;
    let val = doc.cookie.split(';');
    for (let i = 0; i < val.length; i++) {
        x = val[i].substring(0, val[i].indexOf('='));
        y = val[i].substring(val[i].indexOf('=') + 1);
        x = x.r(/^\s+|\s+$/g, '');
        if (x == cookieName) return y;
    }
    return 'undefined';
};
export let cutIpAddress = (address) => {
    let array = address.split('.');
    return array[0] + '.' + array[1];
};
export let setStyleProp = (element, propertyName, value) => element.style.setProperty(propertyName, value);
export let setDocStyleProp = (propertyName, value) => setStyleProp(doc.documentElement, propertyName, value);

export let bytesKb = 1024;
export let bytesUnits = 'B.KB.MB.GB.TB.PB'.split('.');
export let bytes = (size) => {
    let unitIndex = 0;
    let unitDevide = 1;
    let unitBytes = bytesKb;
    while (unitIndex < bytesUnits.length) {
        if (size < unitBytes) {
            let devided = size / unitDevide;
            let thres = 10;
            let fixed = 2;
            while (true) {
                if (devided < thres) return devided.toFixed(fixed) + bytesUnits[unitIndex];
                thres *= 10;
            }
        }
        unitDevide *= bytesKb;
        unitBytes *= bytesKb;
        unitIndex++;
    }
};

// URL 매크로
export let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
export let getBoardUrlPlain = () => host + 'board/';
export let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
export let getWriteUrl = () => getBoardUrl() + 'write/?id=' + gallId;
export let getPostUrl = (num) => getBoardUrl() + 'view/?id=' + gallId + '&no=' + num;
export let getDeleteUrl = (num) => getBoardUrl() + 'delete/?id=' + gallId + '&no=' + num;

// Fetch
export let serializeForm = (...datas) => {
    let body = '';
    for (let data of datas) {
        for (let key in data) {
            let value = data[key];
            if (value == undefined) value = 'undefined';
            body += '&' + key + '=' + value;
        }
    }
    return body.substring(1);
}
export let serializeMultipart = (data, file) => {
    let form = createElement('form', null, { entype: "multipart/formdata" });
    let multipart = new FormData(form);
    for (let key in data) { multipart.append(key, data[key]); }
    if (file && file.name) multipart.append('files[]', file, file.name);
    return multipart;
};

// secret
export let _secret;
// from common.js?v=220811 line 841
export let _d = (r) => {
    let a, e, n, t, f, d, h,
    i = 'yL/M=zNa0bcPQdReSfTgUhViWjXkYIZmnpo+qArOBslCt2D3uE4Fv5G6wH178xJ9K',
    o = '', c = 0;
    for (r = r.r(/[^A-Za-z0-9+/=]/g, ''); c < r.length; ) t = i.indexOf(r.charAt(c++)),
    f = i.indexOf(r.charAt(c++)),
    d = i.indexOf(r.charAt(c++)),
    h = i.indexOf(r.charAt(c++)),
    a = t << 2 | f >> 4,
    e = (15 & f) << 4 | d >> 2,
    n = (3 & d) << 6 | h,
    o += toChar(a),
    64 != d && (o += toChar(e)),
    64 != h && (o += toChar(n));
    // if (typeof _f != undefinedToString) _f(o);
    return o;
}
// from common.js?v=220811 line 845
export let rc1 = (s) => {
    let fi = parse(s.substring(0, 1));
    fi = fi > 5 ? fi - 5 : fi + 4;
    return s.r(/^./, fi);
}
export let getSecretString = (html) => {
    let r = html.match(/var _r = _d\('([A-Za-z0-9+=\/]+)'\)/);
    if (!r) return '';
    return _d(r[1]);
}
export let getSecondServiceCode = (code, secret) => {
    secret = rc1(secret ?? _secret);
    let _rs = secret.split(',');
    let c = '';
    for (n = 0; n < _rs.length; n++)
    c += toChar(2 * (_rs[n] - n - 1) / (13 - n - 1));
    return code.r(/(.{10})$/, c);
}

// worker support
export let genUtil = () => {
    let savedRegexHtml = {};
    let getHtml = (text, tagName, className) => {
        let matches = getHtmlAll(text, tagName, className);
        if (!matches) return '';
        return matches[0];
    }
    let getHtmlAll = (text, tagName, className) => {
        let regex;
        let key = tagName + className;
        if (savedRegexHtml[key] !== undefined) regex = savedRegexHtml[key];
        else {
            let regexString = `<${tagName}[^>]*class=["'][^"]*${className}[^"]*["'][^>]*(\/?)>`;
            regex = new RegExp(regexString, 'g');
            savedRegexHtml[key] = regex;
        }
        let matches = text.matchAll(regex);
        if (!matches) return null;
        let result = [];
        for (match of matches) {
            if (match[1]) {
                result.push([match[0], '']);
                continue;
            }
            let index = match.index;
            let size = 0;
            let sub = text.substring(index);
            let level = 0;
            let ends = sub.matchAll(new RegExp(`<(\/?)${tagName}[^>]*(\/?)>`, 'g'));
            for (let end of ends) {
                if (end[1]) { // close
                    level -= 1;
                    if (level == 0) {
                        index = end.index;
                        size = end[0].length;
                        break;
                    }
                } else {
                    if (!end[2]) level += 1;
                }
            }
            result.push([sub.substring(0, index + size), sub.substring(match[0].length, index)]);
        }
        return result;
    };
    let getInnerHtml = (text, tagName, className) => {
        let match = getHtml(text, tagName, className);
        if (!match) return '';
        else return match[1];
    };
    let getOuterHtml = (text, tagName, className) => {
        let match = getHtml(text, tagName, className);
        if (!match) return '';
        else return match[0];
    };
    let getOuterHtmlAll = (text, tagName, className) => {
        let outers = [];
        let matches = getHtmlAll(text, tagName, className);
        if (!matches) return '';
        for (let match of matches) {
            outers.push(match[0]);
        }
        return outers;
    };
    let getInnerText = (text, tagName, className) => {
        let innerHtml = getInnerHtml(text, tagName, className);
        if (!innerHtml) return '';
        return innerTextOf(innerHtml);
    };
    let innerTextOf = (text) => {
        let result = '';
        for (let match of text.matchAll(/(>|$)(.*?)(<|^)/g)) {
            result += match[2].trim();
        }
        return result;
    };
    let savedRegexAttr = {};
    let getAttributeTo = (text, attrName, output, propName) => {
        let attr = getAttribute(text, attrName);
        if (attr == null) return;
        output[propName] = attr;
    }
    let getAttribute = (text, attrName) => {
        let regex;
        if (savedRegexAttr[attrName] !== undefined) regex = savedRegexAttr[attrName];
        else {
            regex = new RegExp(`${attrName}="([^"]+)"`);
            savedRegexAttr[attrName] = regex;
        }
        let match = text.match(regex);
        if (!match) return null;
        return match[1];
    }

    // 기타 매크로
    let testFix = (string) => /fix/.test(string);

    return {
        _IH: getInnerHtml,
        _OH: getOuterHtml,
        _OHA: getOuterHtmlAll,
        _IT: getInnerText,
        _AT: getAttributeTo,
        _A: getAttribute,
        _TF: testFix,
        _IO: innerTextOf,
    };
};
export let {
    _IH: getInnerHtml,
    _OH: getOuterHtml,
    _OHA: getOuterHtmlAll,
    _IT: getInnerText,
    _AT: getAttributeTo,
    _A: getAttribute,
    _TF: testFix,
    _IO: innerTextOf,
} = genUtil(debug);

let savedRegexId = {};
export let getValueById = (text, id) => {
    let regex;
    if (savedRegexId[id]) regex = savedRegexId[id];
    else {
        regex = new RegExp(`<[^>]+(id|name)=["']${id}["'][^>]+value=["']([^"']+)["']`);
        savedRegexId[id] = regex;
    }
    let match = text.match(regex);
    if (!match) return '';
    return match[2];
};

export let getFormData = (text, id, data) => {
    let regex = new RegExp(`<form[^>]+id=["']${id}["'][^>]*>.*?<\/form>`);
    let match = text.match(regex);
    if (!match) return false;
    updateFormDataV3(match[0], data);
    return true;
};

export let getVarName = (obj) => {
    return Object.keys(obj)[0];
};

export let falseString = (s) => 'false||' + s;