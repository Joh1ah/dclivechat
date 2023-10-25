import { body, debug, doc, head } from "./common.js";
import { bMobileDevice, bMobileSafari, hidden, innerText, onclick, querySelector } from "./constant.js";
import { str_dragAndDrop } from "./strings.js";

export let createElement = (tagName, parent, attr, ...classes) => {
    let element = doc.createElement(tagName);
    if (attr) {
        if (typeof attr == 'object') for (let key in attr) element[key] = attr[key];
        else if (typeof attr == 'string') classes.push(attr);
    }
    for (let className of classes) {
        element.classList.add(...className.split('.'));
    }
    if (parent && parent.appendChild) parent.appendChild(element);
    return element;
};
export let createIcon = (parent, name, ...classes) => {
    return createElement('span', parent, { [innerText]: name }, 'material-symbols-outlined.icon', ...classes);
};
export let clearChildren = (element) => {
    while(element.lastChild) element.removeChild(element.lastChild);
};
export let detach = (element) => {
    element.parentNode.removeChild(element);
    return element;
};
export let addClass = (element, ...className) => {
    element.classList.add(...className);
    return element;
};
export let removeClass = (element, ...className) => {
    element.classList.remove(...className);
    return element;
};
export let scrollToTop = () => scrollTo(0, 0);
export let enterAsClick = (input, submit, bShift = false, bForce = false) => {
    input.onkeypress = (ev) => {
        if (!bForce && preventEnter) return;
        if (ev.key != 'Enter') return;
        if (DEBUG) debug(ev);
        if (bMobileDevice && bShift) return;
        if (!bMobileDevice && bShift && ev.shiftKey) return;
        ev.preventDefault();
        submit.click();
        input.oninput?.();
    };
};

export let initUI = () => {
    if (DEBUG) debug('ui');

    // 기존 화면 제거
    clearChildren(body);

    // 스타일 적용
    let stylesheet = STYLESHEET // defined when building
        .replace(/_w/g, 'width')
        .replace(/_h/g, 'height')
        .replace(/_b/g, 'background')
        .replace(/_m/g, 'margin')
        .replace(/_p/g, 'padding')
        .replace(/_d/g, 'display')
        .replace(/_i/g, '!important')
        .replace(/_P/g, 'position')
        .replace(/_T/g, 'top')
        .replace(/_B/g, 'bottom')
        .replace(/_L/g, 'left')
        .replace(/_R/g, 'right')
        .replace(/_r/g, 'relative')
        .replace(/_a/g, 'absolute')
        .replace(/_o/g, 'overflow')
        .replace(/_f/g, 'flex')
        .replace(/_F/g, 'font')
        .replace(/_j/g, 'justify-content')
        .replace(/_g/g, 'grid-')
        .replace(/_c/g, 'calc')
        .replace(/_x/g, '100%');
    if (bMobileSafari) {
        stylesheet = stylesheet.replace(/_s/g, '');
    } else {
        stylesheet = stylesheet.replace(/_s/g, ' or (max-width:700px)');
    }
    createElement('style', head, { [innerText]: stylesheet });
    createElement('link', head, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
    });
    // 모바일 뷰포트 변경
    createElement('meta', head, { name:'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0' });

    scrollToTop();

    let dropArea = createElement('div', body, 'o');
    createElement('div', dropArea, { [innerText]: str_dragAndDrop } , 'drop');

    let overlay = createElement('div', body, 'o');
    let preventEnter = false;
    let enterUp = true;
    let renderOverlay = (bForce = false) => {
        if (DEBUG) debug('render overlay', (bForce && overlay.childNodes.length == 1), overlay.childNodes.length);
        if ((bForce && overlay.childNodes.length == 1) || !overlay.lastChild) removeClass(overlay, 'wait');
        else addClass(overlay, 'wait');
        if (overlay.childNodes.length === 0) preventEnter = false;
        else preventEnter = true;
    }
    
    doc.addEventListener('keyup', (ev) => {
        if (ev.key != 'Enter') return;
        enterUp = true;
    });
    doc.addEventListener('keypress', (ev) => {
        if (!enterUp) return;
        if (ev.key !== 'Enter') return;
        if (!preventEnter) return;
        if (overlay.lastChild) overlay.lastChild.enter?.();
        enterUp = false;
    });

    let openModal = ({title, desc, options, close, html, input, nowrap}) => {
        if (!options) options = [{ text: str_confirm, [onclick]: (close) => close() }];
        let modal = createElement('div', overlay, 'modal');
        if (title) createElement('div', modal, { [innerText]: title }, 'tt');
        let content = createElement('div', modal, 'desc');
        modal.content = content;
        if (desc) {
            if (html) content.innerHTML = desc;
            else content[innerText] = desc;
        }
        let closeModal = () => {
            addClass(modal, hidden);
            modal.remove();
            renderOverlay();
        }
        if (close) createIcon(createElement('a', modal, { [onclick]: closeModal }, 'b.close.abs-tr'), 'close');
        if (input !== undefined) {
            if (nowrap) modal.input = createElement('input', modal, { type:'password', value: input }, 'nowrap');
            else modal.input = createElement('textarea', modal, { value: input });
        }
        let optionContainer = createElement('div', modal, 'opts.fr');
        if (options.length === 1) options[0].enter = true;
        for (let option of options) {
            let wait = () => {
                button[innerText] = '';
                createIcon(button, 'progress_activity', 'progress');
            };
            let bIcon = (option.icon != undefined);
            let button = createElement('a', optionContainer, {
                [innerText]: bIcon ? '' : (option.text ?? option),
                [onclick]: option.onclick ? () => option.onclick(closeModal, wait) : closeModal,
            }, 'sb.r');
            if (bIcon) {
                createIcon(button, option.icon);
                createElement('span', button, { [innerText]: option.text });
            }
            if (option.enter) timeout(() => {
                modal.enter = () => button.click();
                if (nowrap) enterAsClick(modal.input, button, false, true);
            }, 100);
        }
        renderOverlay();
        return modal;
    }
    let openAlert = (desc) => openModal({ desc: desc });

    let openImage = (targetSrc, id) => {
        let postContent = doc[querySelector]('#' + id);
        if (!postContent) return;
        let imgs = postContent[getElementsByClassName]('img');
        let list = [];
        let index = 0;
        for (let i = 0; i < imgs.length; i++) {
            let img = imgs[i];
            if (img.classList.contains(hidden)) continue;
            if (img.classList.contains('d')) continue;
            let originalSrc = img.getAttribute('data-osrc');
            if (originalSrc == targetSrc) index = i;
            list.push(originalSrc);
        }
        if (DEBUG) debug(list, targetSrc, index);
        let curImg;
        let clicked = false;
        let container = createElement('div', overlay, { [onclick]: () => {
            if (clicked) return;
            addClass(curImg, 'fo');
            timeout(() => {
                container.remove();
            }, 200);
            renderOverlay(true);
        }}, 'ipvs');
        let src = () => list[index];
        curImg = createElement('img', container, { src: src(), draggable: false, [onclick]: () => {
            clicked = true;
            request(() => clicked = false);
        }}, 'ipv');

        let controls = createElement('div', container, 'fr');
        let download = createElement('a', controls, { [onclick]: () => {
            clicked = true;
            let temp = createElement('a', null, { href: curImg.src, download: '' });
            temp.click();
            temp.remove();
            request(() => clicked = false);
        }}, 'b');
        createIcon(download, 'download');
        createElement('span', download, { innerText: str_download });

        renderOverlay();
    };

    let addTooltip = (element, { text, top = false }, ...classes) => {
        addClass(element, 'has-tooltip');
        let tooltip = createElement('div', element, 'tooltip', top ? 'tp' : 'bt',  ...classes);
        createElement('span', tooltip, { innerText: text });
        return tooltip;
    };

    let contextmenu;
    let addContextMenu = (element, options = []) => {
        element.oncontextmenu = (ev) => {
            ev.preventDefault();
            let x = ev.clientX;
            let y = ev.clientY;
            if (contextmenu) contextmenu.remove();
            contextmenu = createElement('div', body, 'p.ctx');
            contextmenu.style.left = x + 'px';
            contextmenu.style.top = y + 'px';
        
            for (option of options) {
                if (option.hr) {
                    createElement('hr', contextmenu);
                    continue;
                }
                let entry = createElement('a', contextmenu, 'fr.b');
                if (option.icon) createIcon(entry, option.icon);
                if (option.text) createElement('span', entry, { [innerText]: option.text });
                if (option[onclick]) entry[onclick] = option[onclick];
            }
            return contextmenu;
        }
    };
    doc.addEventListener('click', () => {
        if (contextmenu) contextmenu.remove();
        contextmenu = null;
    });

    let main = createElement('main', body);

    return {
        main,
        dropArea,
        openModal,
        openAlert,
        enterAsClick,
        openImage,
        addTooltip,
        addContextMenu
    }
};