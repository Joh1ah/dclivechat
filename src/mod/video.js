import { disabled, hidden, innerText, onclick, placeholder } from "./constant.js";
import { str_addVideo, str_closeAll, str_confirm, str_noValidUrl, str_openInNew, str_openUrlTitle, str_placeholderVideo, str_relocate, str_relocateDone, str_tooltip_close } from "./strings.js";
import { addClass, createElement, createIcon, enterAsClick, removeClass } from "./ui.js";

export let initVideo = ({ main, openModal, openAlert }, { applyOption, onApplyFunc, saveOptions }, commands) => {
    let videoContainer = createElement('div', main, 'video');

    // 마도 지원 - 20230119
    let menu = createElement('div', videoContainer, 'menu');
    let videoMain = createElement('div', videoContainer, 'main');

    let menuExpanded = true;
    let menuExpandButton;
    let toggleMenu = (bool) => {
        if (typeof bool === 'boolean') menuExpanded = bool;
        else menuExpanded = !menuExpanded;
        if (menuExpanded) {
            removeClass(menu, 'e');
            menuExpandButton[innerText] = 'expand_less';
        } else {
            if (relocating) relocateVideoButton.click();
            addClass(menu, 'e');
            menuExpandButton[innerText] = 'expand_more';
        }
    };

    createElement('div', menu, { [onclick]: toggleMenu }, 'stretch');

    let addVideoButton = createElement('a', menu, { [onclick]: () => {
        addClass(videoMain, 'go');
        removeClass(videoInputContainer, hidden);
    } }, 'b');
    createIcon(addVideoButton, 'add');
    createElement('span', addVideoButton, { [innerText]: str_addVideo });

    let relocating = false;
    let relocateVideoButton = createElement('a', menu, 'b', disabled);
    let relocateVideoButtonIcon = createIcon(relocateVideoButton, 'pan_tool');
    let relocateVideoButtonSpan = createElement('span', relocateVideoButton, { [innerText]: str_relocate });
    relocateVideoButton.onclick = () => {
        relocating = !relocating;
        if (relocating) {
            addClass(relocateVideoButton, '.t');
            relocateVideoButtonIcon[innerText] = 'check';
            relocateVideoButtonSpan[innerText] = str_relocateDone;
            addClass(videoMain, 'rlc');
        } else {
            removeClass(relocateVideoButton, '.t');
            relocateVideoButtonIcon[innerText] = 'pan_tool';
            relocateVideoButtonSpan[innerText] = str_relocate;
            removeClass(videoMain, 'rlc');
        }
    };

    let closeAllVideosButton = createElement('a', menu, 'b', disabled);
    createIcon(closeAllVideosButton, 'close');
    createElement('span', closeAllVideosButton, { [innerText]: str_closeAll });

    menuExpandButton = createIcon(createElement('a', menu, { [onclick]: toggleMenu }, 'b.fix-tl'), 'expand_less');

    let videoInputContainer = createElement('div', videoMain, 'p.fr.blank');
    let videoInputCloseButton = createElement('a', videoInputContainer, {
        [onclick]: () => {
            removeClass(videoMain, 'go');
            addClass(videoInputContainer, hidden);
        } }, 'b.abs-tr', hidden);
    createIcon(videoInputCloseButton, 'close');
    createIcon(videoInputContainer, 'link', 'ph').onclick = () => videoInput.focus();
    let onVideoInput = () => {
        if (videoInput.value !== '') removeClass(videoInputContainer, 'blank');
        else addClass(videoInputContainer, 'blank');
    };
    let videoInput = createElement('textarea', videoInputContainer, {
        [placeholder]: str_placeholderVideo,
        oninput: onVideoInput,
        onchange: onVideoInput
    }, 'src');
    let videoSubmit = createElement('a', videoInputContainer, {
        [onclick]: () => addVideo(videoInput.value)
    }, 'sb');
    createElement('span', videoSubmit, {
        [innerText]: str_confirm,
    });
    enterAsClick(videoInput, videoSubmit);

    let loadedVideoUrls = [];
    let videoDivs = [];
    let renderRow = () => {
        if (!bMado) {
            let newLength = Math.min(videoDivs.length, 1);
            addClass(menu, hidden);
            loadedVideoUrls.length = newLength;
            for (let i = 1; i < videoDivs.length; i++) {
                videoDivs[i]?.remove();
            }
            videoDivs.length = newLength;
            if (relocating) relocateVideoButton.click();
        } else removeClass(menu, hidden); // setStyleVariable('--mh', '50px');
        addClass(relocateVideoButton, disabled);
        
        removeClass(relocateVideoButton, '.t');
        removeClass(videoMain, 'go');
        if (!videoDivs.length) {
            if (relocating) relocateVideoButton.click();
            addClass(closeAllVideosButton, disabled);
            addClass(videoInputCloseButton, hidden);
            removeClass(videoInputContainer, hidden);
            return;
        }
        removeClass(closeAllVideosButton, disabled);
        removeClass(relocateVideoButton, disabled);
        removeClass(videoInputCloseButton, hidden);
        addClass(videoInputContainer, hidden);
        if (videoDivs.length == 1) setDocStyleProp('--r2t', '0px');
        else setDocStyleProp('--r2t', '50%');
        let half = (videoDivs.length - 1) / 2;
        let r1cnt = 0;
        let r2cnt = 0;
        for (let i = 0; i < videoDivs.length; i++) {
            let videoDiv = videoDivs[i];
            removeClass(videoDiv, ...'r1.r2.c1.c2.c3.c4'.split('.'));
            if (i < half) {
                addClass(videoDiv, 'r1');
                r1cnt++;
                addClass(videoDiv, 'c' + r1cnt);
            } else {
                addClass(videoDiv, 'r2');
                r2cnt++;
                addClass(videoDiv, 'c' + r2cnt);
            }
        }
        setDocStyleProp('--rw1', r1cnt);
        setDocStyleProp('--rw2', r2cnt);
    };

    let _addVideo = (url) => {
        let twitchMatch = url.match(regexTwitch);
        if (twitchMatch) return addVideoTwitch(twitchMatch[2]);
        let youtubeMatch = url.match(regexYoutube);
        if (youtubeMatch) {
            let t = 0;
            let timeMatch = url.match(/t=([0-9]+)/);
            if (timeMatch) t = timeMatch[1];
            return addVideoYoutube(youtubeMatch[2], t);
        }
        addVideoIframe(url);
    }

    let addVideo = (url) => {
        if (DEBUG) debug('step 1', url);
        if (!url) return openAlert(str_noValidUrl);
        if (commands[url] !== undefined) return commands[url]();
        let before = loadedVideoUrls.length;
        if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url))
            return openAlert(str_noValidUrl);
        if (!/^[A-Za-z]+:\/\//.test(url)) url = 'https://' + url;
        if(DEBUG) debug('step 2', url);
        _addVideo(url);
        if (before === 0 && loadedVideoUrls.length === 1) toggleMenu(false);
        renderRow();
    }

    // 글 본문에 링크가 있다면
    // 영상 화면에 표시하는 전역 함수를 추가
    let openLink = (string) => {
        let decoded = decodeURIComponent(string).r(/&amp;/g, '&');
        openModal({
            title: str_openUrlTitle,
            desc: decoded,
            options: [{
                text: str_openInNew,
                icon: 'open_in_new',
                [onclick]: (close) => {
                    let temp = createElement('a', null, { href: decoded, target: '_blank' });
                    temp.click();
                    temp.remove();
                    close();
                }
            }, {
                text: str_confirm,
                [onclick]: (close) => {
                    addVideo(decoded);
                    close();
                },
                enter: true
            }],
            close: true,
        });
    };

    let onImageError = (videoId) => {
        let videoElement = doc[querySelector]('#' + videoId).parentNode;
        let bDccon = videoElement.classList.contains('d');
        let src = videoElement.getAttribute('data-src');
        let imageElement = createElement('img', null, { src: src, draggable: false }, bDccon ? 'd' : '_');
        if (!bDccon) imageElement[onclick] = () => onImageClick(src);
        videoElement.insertAdjacentElement('beforebegin', imageElement);
        addClass(videoElement, hidden);
    };

    onmessage = (ev) => {
        let json;
        if (typeof ev.data == 'object') json = ev.data;
        else json = JSON.parse(ev.data);
        if (json) {
            if (json.type == onImageErrorFuncName) onImageError(json.id);
            else if (json.type == openLinkFuncName) openLink(json.url);
            else if (json.type == onImageClickFuncName) openImage(json.src, json.id);
        }
    }

    let removeVideoPlayer = (url, videoDiv) => {
        splice(loadedVideoUrls, url);
        splice(videoDivs, videoDiv);
        saveOptions();
        videoDiv.remove();
        renderRow();
    }

    let clearVideoPlayers = () => {
        loadedVideoUrls.length = 0;
        for (let videoDiv of videoDivs) videoDiv.remove();
        videoDivs.length = 0;
        saveOptions();
        renderRow();
    }

    let addVideoTwitch = (id) => {
        let src = https + 'player.twitch.tv/?channel=' + id + '&parent=gall.dcinside.com';
        addVideoIframe(src);
    };
    let addVideoYoutube = (id, t = 0) => {
        let src = https + 'www.youtube.com/embed/' + id  + '?start=' + t;
        addVideoIframe(src, { allow: "autoplay; picture-in-picture" });
    }
    let draggingDiv = null;
    let draggingIndex = () => videoDivs.indexOf(draggingDiv);
    let draggingUrl = '';
    let moving = false;
    let offsetX = 0, offsetY = 0;
    let addVideoIframe = (url, options = {}) => {
        videoInput.value = '';
        if (loadedVideoUrls.includes(url)) {
            let div = videoDivs[loadedVideoUrls.indexOf(url)];
            addClass(div, 'hl-alt');
            timeout(() => removeClass(div, 'hl-alt'), highlightDuration);
            return;
        }
        if (!bMado) {
            loadedVideoUrls.length = 0;
            videoDivs[0]?.remove();
            videoDivs.length = 0;
        }
        loadedVideoUrls.push(url);
        applyOption('videos-' + gallId, loadedVideoUrls);
        let index;
        let videoDiv = createElement('div', videoMain);
        videoDivs.push(videoDiv);
        index = () => videoDivs.indexOf(videoDiv);
        let onDown = (x, y) => {
            if (draggingDiv) return;
            addClass(videoDiv, 'drg');
            offsetX = () => videoDiv.getClientRects()[0].width / 2;
            offsetY = () => (videoDiv.getClientRects()[0].height / 2) + 50;
            setDocStyleProp('--mx', (x - offsetX()) + 'px');
            setDocStyleProp('--my', (y - offsetY()) + 'px');
            draggingDiv = videoDiv;
            draggingUrl = url;
        };
        let onMove = (x, y) => {
            request(() => {
                setDocStyleProp('--mx', (x - offsetX()) + 'px');
                setDocStyleProp('--my', (y - offsetY()) + 'px');
            });
        };
        let onEnter = () => {
            if (!draggingDiv || moving) return;
            let temp = index(), temp2 = draggingIndex();
            if (temp == temp2) return;
            videoDivs.splice(temp2, 1);
            videoDivs.splice(temp, 0, draggingDiv);
            loadedVideoUrls.splice(temp2, 1);
            loadedVideoUrls.splice(temp, 0, draggingUrl);
            moving = true;
            saveOptions();
            timeout(() => moving = false, 200);
            renderRow();
        }
        let videoDrag = createElement('div', videoDiv, {
            onmousedown: (ev) => {
                onDown(ev.clientX, ev.clientY);
                onmouseup = () => {
                    removeClass(videoDiv, 'drg');
                    draggingDiv = null;
                    onmouseup = null;
                    onmousemove = null;
                }
                onmousemove = (ev) => onMove(ev.clientX, ev.clientY);
            },
            onmousemove: onEnter,
            ontouchstart: (ev) => {
                onDown(ev.touches[0].clientX, ev.touches[0].clientY);
                let onTouchEnd = () => {
                    removeClass(videoDiv, 'drg');
                    draggingDiv = null;
                    ontouchend = null;
                    ontouchcancel = null;
                    ontouchmove = null;
                }
                ontouchend = onTouchEnd;
                ontouchcancel = onTouchEnd;
                ontouchmove = (ev) => {
                    onMove(ev.touches[0].clientX, ev.touches[0].clientY);
                    // touchmove 이벤트를 mousemove 이벤트로 전달
                    let element = doc.elementFromPoint(ev.touches[0].pageX, ev.touches[0].pageY);
                    element?.onmousemove?.();
                };
            },
        }, 'grab.fr');
        createIcon(videoDrag, 'drag_indicator');
        options.sandbox = 'allow-same-origin allow-scripts'; // v2.1.0-20230202
        let video = createElement('iframe', videoDiv, options);
        renderRow();
        video.src = url;
        let videoClose = createElement('a', videoDiv, { [onclick]: () => removeVideoPlayer(url, videoDiv) }, 'close.b.abs-tr');
        createIcon(videoClose, 'close');
        addTooltip(videoClose, { text: str_tooltip_close });
    }

    // 마지막에 시청하던 링크를 갤러리별로 저장 및 로드
    onApplyFunc['videos-' + gallId] = (videos) => {
        for (let url of videos) if (!loadedVideoUrls.includes(url)) _addVideo(url);
    }

    closeAllVideosButton[onclick] = clearVideoPlayers;
}