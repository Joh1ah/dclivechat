import { debug, getAttribute, getInnerHtml, getInnerText, getOuterHtml, testFix } from "./common.js";
import { host } from "./constant.js";
import { getAsText } from "./fetch.js";

export let initUser = () => {
    let user = {
        name: '',
        id: '',
        img: '',
        fix: false,
        onlogin: null,
    };    

    user.update = async () => {
        let html = await getAsText(host).catch(debug);
        if (!html) return;
        let loginBox = getInnerHtml(html, 'div', 'login_box');
        if (loginBox) {
            let string = getInnerHtml(loginBox, 'button', 'btn_inout');
            if (string && string == str_logout) {
                let nickname = getInnerText(loginBox, 'strong', 'nickname');
                if (nickname) user.name = nickname;
                let nikcon = getOuterHtml(loginBox, 'strong', 'writer_nikcon');
                if (nikcon) {
                    let match = getAttribute(nikcon, 'onClick').match(/\/([a-zA-Z0-9_-]+)['"]/);
                    if (match) user.id = match[1];
                    match = nikcon.match(/src=["']([^"']+)["']/);
                    if (match) {
                        user.img = match[1];
                        user.fix = testFix(match[1]);
                    }
                    
                }
            }
        }
        if (DEBUG) debug('login', user.id && true);
        user.onlogin?.();
    };

    return user;
};