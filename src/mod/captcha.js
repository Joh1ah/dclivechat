import { body, createElement, debug, falseString, initPromise, split } from "./common.js";
import { str_error_badRequest } from "./strings.js";

let grecaptchaToken = 'g-recaptcha-token';
let grecaptchaResponse = 'g-recaptcha-response';
let grecaptchaBlock = '6Lc-Fr0UAAAAAOdqLYqPy53MxlRMIXpNXFvBliwI';

export let initCaptchaV3 = async () => {
    let { r, p } = initPromise();
    createElement('script', body, {
        onload: () => {
            if (typeof grecaptcha == 'undefined') return debug('recaptcha is undefined');
            else debug('recaptcha v3 loaded');
            r();
        },
        type: 'text/javascript',
        src: 'https://www.google.com/recaptcha/api.js?render=' + grecaptchaBlock,
    });
    return await p;
}
let executeCaptchaV3 = async (action) => {
    if (typeof grecaptcha == 'undefined') await initCaptchaV3();
    let { r, p } = initPromise();
    grecaptcha.ready(() => grecaptcha.execute(grecaptchaBlock, {action: action}).then(r).catch(e => {debug(e); r('');}));
    return await p;
};

let executeCaptcha = async (version, data, action) => {
    if (version == 'v3') return data[grecaptchaToken] = await executeCaptchaV3(action);
    debug('recaptcha', version, 'is not supported');
};

export let useCaptcha = async (func, params, data, action) => {
    let tryMax = 1;
    let tryNum = 0;
    let res;
    let tryPost = async () => {
        if (tryNum > tryMax) return res;
        tryNum += 1;
        res = await func(...params, data);
        if (!res) return falseString(str_error_badRequest);
        let splits = split(res);
        if (splits[0] == 'false') {
            if (splits.length == 1) return falseString(res);
            if (splits[1] == 'captcha') {
                await executeCaptcha(splits[2], data, action);
                return await tryPost();
            }
        }
        return res;
    };
    return await tryPost();
};