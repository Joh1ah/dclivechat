(()=>{const MOD={
_11:()=>{const decoder = new TextDecoder();
let decode = (encoded) => {
    const binary = atob(encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\./g, '='));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) { bytes[i] = binary.charCodeAt(i); }
    return decoder.decode(bytes);
};

/** "DC 라이브챗" */
let str_dclivechat = decode('REMg65287J2067iM7LGX');
/** "최근 사용" */ 
let str_recently = decode('7LWc6re8IOyCrOyaqQ..');
/** "<p><br></p>" */
let str_lineBreak = decode('PHA-PGJyPjwvcD4.')
/** "닉네임을 입력하세요." */
let str_nullNickname = decode('64uJ64Sk7J6E7J2EIOyeheugpe2VmOyEuOyalC4.');
/** "비밀번호를 2자리 이상 입력하세요." */
let str_shortPassword = decode('67mE67CA67KI7Zi466W8IDLsnpDrpqwg7J207IOBIOyeheugpe2VmOyEuOyalC4.');
/** "도배 방지 코드를 입력하세요." */
let str_nullCode = decode('64-E67CwIOuwqeyngCDsvZTrk5zrpbwg7J6F66Cl7ZWY7IS47JqULg..');
/** "이 기능은 DC인사이드 갤러리에서만 사용할 수 있습니다." */
let str_noGalleryUrl = decode('7J20IOq4sOuKpeydgCBEQ-yduOyCrOydtOuTnCDqsKTrn6zrpqzsl5DshJzrp4wg7IKs7Jqp7ZWgIOyImCDsnojsirXri4jri6Qu');
/** "이 기능은 글 목록 페이지에서만 사용할 수 있습니다." */
let str_noGalleryPageUrl = decode('7J20IOq4sOuKpeydgCDquIAg66qp66GdIO2OmOydtOyngOyXkOyEnOunjCDsgqzsmqntlaAg7IiYIOyeiOyKteuLiOuLpC4.');
/** "PC버전 페이지에서 다시 시도해주세요." */
let str_noSupportMobile = decode('UEPrsoTsoIQg7Y6Y7J207KeA7JeQ7IScIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQu');
/** "로그아웃" */
let str_logout = decode('66Gc6re47JWE7JuD');
/** "확인" */
let str_confirm = decode('7ZmV7J24');
/** "취소" */
let str_cancel = decode('7Leo7IaM');
/** "네" */
let str_yes = decode('64Sk');
/** "아니오" */
// export let str_no = decodeString('7JWE64uI7Jik');
/** "주소가 올바르지 않습니다." */
let str_noValidUrl = decode('7KO87IaM6rCAIOyYrOuwlOultOyngCDslYrsirXri4jri6Qu');
/** "이 방송을 시청하시겠습니까?" */
let str_openUrlTitle = decode('7J20IOuwqeyGoeydhCDsi5zssq3tlZjsi5zqsqDsirXri4jquYw_');
/** "새 창에서 열기" */
let str_openInNew = decode('7IOIIOywveyXkOyEnCDsl7TquLA.');
/** "생방송 주소" */
let str_placeholderVideo = decode('7IOd67Cp7IahIOyjvOyGjA..');
/** "메시지 보내기" */
let str_placeholderMessage = decode('66mU7Iuc7KeAIOuztOuCtOq4sA..');
/** "답글 입력" */
let str_placeholderReply = decode('64u16riAIOyeheugpQ..');
/** "댓글 입력" */
let str_placeholderComment = decode('64yT6riAIOyeheugpQ..');
/** "생방송 채팅" */
let str_chatHeader = decode('7IOd67Cp7IahIOyxhO2MhQ..');
/** "스크롤해서 채팅이 멈췄습니다" */
let str_pullDown = decode('7Iqk7YGs66Gk7ZW07IScIOyxhO2MheydtCDrqYjst4TsirXri4jri6Q.');
/** "새 메시지 보기" */
let str_pullDownHover = decode('7IOIIOuplOyLnOyngCDrs7TquLA.');
/** "보기" */
let str_pullDownHover_zero = decode('67O06riw');
/** "20개 이상" */
let str_pullDownHover_over = decode('MjDqsJwg7J207IOB');
/** "개" */
let str_pullDownHover_count = decode('6rCc');
/** "새 메시지 " */
let str_pullDownHover_common = decode('7IOIIOuplOyLnOyngCA.');
/** "닉네임" */
let str_nickname = decode('64uJ64Sk7J6E');
/** "비밀번호" */
let str_password = decode('67mE67CA67KI7Zi4');
/** "코드 입력" */
let str_code = decode('7L2U65OcIOyeheugpQ..');
/** "에게 답글" */
let str_replyTo = decode('7JeQ6rKMIOuLteq4gA..');
/** "에게 댓글" */
let str_commentTo = decode('7JeQ6rKMIOuMk-q4gA..');
/** "댓글 쓰기" */
let str_writeComment = decode('64yT6riAIOyTsOq4sA..');
/** "새 댓글 쓰는 중" */
let str_writeNewComment = decode('7IOIIOuMk-q4gCDsk7DripQg7KSR');
/** "로딩중입니다." */
let str_loading = decode('66Gc65Sp7KSR7J6F64uI64ukLg..');
/** "채팅 설정" */
let str_settings = decode('7LGE7YyFIOyEpOyglQ..');
/** "다중 화면 사용 (마도)" */
let str_settings_mado = decode('64uk7KSRIO2ZlOuptCDsgqzsmqkgKOuniOuPhCk.');
/** "부드러운 스크롤 애니메이션" */
let str_settings_smoothScroll = decode('67aA65Oc65-s7Jq0IOyKpO2BrOuhpCDslaDri4jrqZTsnbTshZg.');
/** "폰트 크기 확대" */
let str_settings_bigFont = decode('7Y-w7Yq4IO2BrOq4sCDtmZXrjIA.');
/** "반고닉 아이디 표시" */
let str_settings_showUnfixId = decode('67CY6rOg64uJIOyVhOydtOuUlCDtkZzsi5w.');
/** "디시콘 크기 줄이기" */
let str_settings_smallDccon = decode('65SU7Iuc7L2YIO2BrOq4sCDspITsnbTquLA.');
/** "글 내용에 링크 추가" */
let str_settings_appendLink = decode('6riAIOuCtOyaqeyXkCDrp4Htgawg7LaU6rCA');
/** "짧은 채팅 지연시간" */
let str_settings_lowLatency = decode('7Ken7J2AIOyxhO2MhSDsp4Dsl7Dsi5zqsIQ.');
/** "방송 없이 채팅창만 사용" */
let str_settings_chatOnly = decode('67Cp7IahIOyXhuydtCDssYTtjIXssL3rp4wg7IKs7Jqp');
/** "유동 로그인 숨기기" */
let str_settings_hideLogin = decode('7Jyg64-ZIOuhnOq3uOyduCDsiKjquLDquLA.');
/** "다크 모드" */
let str_settings_darkMode = decode('64uk7YGsIOuqqOuTnA..');
/** "채팅 표시 방법" */
let str_settings_chat = decode('7LGE7YyFIO2RnOyLnCDrsKnrspU.');
/** "자동짤방 및 꼬리말" */
let str_settings_write = decode('7J6Q64-Z7Kek67CpIOuwjyDqvKzrpqzrp5A.');
/** "자동짤방 사용" */
let str_settings_useZzal = decode('7J6Q64-Z7Kek67CpIOyCrOyaqQ..');
/** "꼬리말 수정" */
let str_settings_footer = decode('6rys66as66eQIOyImOyglQ..');
/** "닉네임 아이콘 표시" */
let str_settings_nikcon = decode('64uJ64Sk7J6EIOyVhOydtOy9mCDtkZzsi5w.');
/** "채팅" */
let str_chat = decode('7LGE7YyF');
/** "삭제되었거나 존재하지 않는 게시물입니다." */
let str_nullContent = decode('7IKt7KCc65CY7JeI6rGw64KYIOyhtOyerO2VmOyngCDslYrripQg6rKM7Iuc66y87J6F64uI64ukLg..');
/** "공지" */
let str_notice = decode('6rO17KeA');
/** "설문" */
let str_survey = decode('7ISk66y4');
/** "채팅방에 오신 것을 환영합니다!" */
let str_greeting = decode('7LGE7YyF67Cp7JeQIOyYpOyLoCDqsoPsnYQg7ZmY7JiB7ZWp64uI64ukIQ..');
/** "채팅창에 다시 연결했습니다." */
let str_reconnected = decode('7LGE7YyF7LC97JeQIOuLpOyLnCDsl7DqsrDtlojsirXri4jri6Qu');
/** "알 수 없는 오류" */
let str_error_generic = decode('7JWMIOyImCDsl4bripQg7Jik66WY');
/** "알 수 없는 오류 (block_key)" */
let str_error_blockKey = decode('7JWMIOyImCDsl4bripQg7Jik66WYIChibG9ja19rZXkp');
/** "잘못된 요청입니다." */
let str_error_badRequest = decode('7J6Y66q765CcIOyalOyyreyeheuLiOuLpC4.');
/** "이미지가 너무 큽니다." */
let str_imageTooBig = decode('7J2066-47KeA6rCAIOuEiOustCDtgb3ri4jri6Qu');
/** "이미지를 바꾸시겠습니까?" */
// export let str_replaceImage = decode('7J2066-47KeA66W8IOuwlOq-uOyLnOqyoOyKteuLiOq5jD8.');
/** "이미지는 한 번에 하나씩 올릴 수 있습니다." */
// export let str_imageOver = decode('7J2066-47KeA64qUIO2VnCDrsojsl5Ag7ZWY64KY7JSpIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "바꾸기" */
// export let str_replace = decode('67CU6r646riw');
/** "이미지 업로드에 실패했습니다." */
let str_uploadFail = decode('7J2066-47KeAIOyXheuhnOuTnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
/** "이미지 삭제에 실패했습니다." */
let str_deleteFail = decode('7J2066-47KeAIOyCreygnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
/** "아직 업로드 중인 이미지가 있습니다." */
let str_pendingUpload = decode('7JWE7KeBIOyXheuhnOuTnCDspJHsnbgg7J2066-47KeA6rCAIOyeiOyKteuLiOuLpC4.');
/** "이미지 없이 올리시겠습니까?" */
let str_postErrorImageTitle = decode('7J2066-47KeAIOyXhuydtCDsmKzrpqzsi5zqsqDsirXri4jquYw_');
/** "업로드에 실패한 이미지가 있습니다." */
let str_postErrorImageDesc = decode('7JeF66Gc65Oc7JeQIOyLpO2MqO2VnCDsnbTrr7jsp4DqsIAg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화되었습니다." */
let str_notifyChatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQmOyXiOyKteuLiOuLpC4.');
/** "이미 실행중입니다." */
let str_runningAlready = decode('7J2066-4IOyLpO2WieykkeyeheuLiOuLpC4.');
/** "이미지 첨부" */
let str_tooltip_upload = decode('7J2066-47KeAIOyyqOu2gA..');
/** "드래그 앤 드롭으로 이미지 올리기" */
let str_dragAndDrop = decode('65Oc656Y6re4IOyVpCDrk5zroa3snLzroZwg7J2066-47KeAIOyYrOumrOq4sA..');
/** "새로운 이미지로 변경" */
// export let str_reloadCaptcha = decode('7IOI66Gc7Jq0IOydtOuvuOyngOuhnCDrs4Dqsr0.');
/** "이미지만 올릴 수 있습니다." */
let str_notImage = decode('7J2066-47KeA66eMIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화된 갤러리입니다." */
let str_chatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQnCDqsKTrn6zrpqzsnoXri4jri6Qu');
/** "댓글수 하이라이트" */
let str_settings_commentHighlight = decode('64yT6riA7IiYIO2VmOydtOudvOydtO2KuA..');
/** "영상 추가" */
let str_addVideo = decode('7JiB7IOBIOy2lOqwgA..');
/** "배치 바꾸기" */
let str_relocate = decode('67Cw7LmYIOuwlOq-uOq4sA..');
/** "배치 완료!" */
let str_relocateDone = decode('67Cw7LmYIOyZhOujjCE.');
/** "드래그" */
// export let str_drag = decode('65Oc656Y6re4');
/** "모바일 환경에서는 권장하지 않습니다.\n그래도 사용하시겠습니까?" */
let str_askMado = decode('66qo67CU7J28IO2ZmOqyveyXkOyEnOuKlCDqtozsnqXtlZjsp4Ag7JWK7Iq164uI64ukLgrqt7jrnpjrj4Qg7IKs7Jqp7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
/** "전체 닫기" */
let str_closeAll = decode('7KCE7LK0IOuLq-q4sA..');
/** "다운로드" */
let str_download = decode('64uk7Jq066Gc65Oc');
/** "닫기" */
let str_tooltip_close = decode('64ur6riw');
/** "자동짤방 이미지를 삭제하시겠습니까?" */
let str_askDeleteZzal = decode('7J6Q64-Z7Kek67CpIOydtOuvuOyngOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw_');
/** "이미지 업로드" */
let str_uploadImage = decode('7J2066-47KeAIOyXheuhnOuTnA..');
/** "자동짤방 업로드" */
let str_uploadZzal = decode('7J6Q64-Z7Kek67CpIOyXheuhnOuTnA..');
/** "버전 업데이트됨" */
let str_update = decode('67KE7KCEIOyXheuNsOydtO2KuOuQqA..');
/** "전체 변경사항 보기" */
let str_changelog = decode('7KCE7LK0IOuzgOqyveyCrO2VrSDrs7TquLA.');
/** "구매하지 않은 디시콘입니다." */
let str_notBought = decode('6rWs66ek7ZWY7KeAIOyViuydgCDrlJTsi5zsvZjsnoXri4jri6Qu');
/** "삭제" */
let str_delete = decode('7IKt7KCc');
/** "삭제하시겠습니까?" */
let str_deleteTitle = decode('7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
/** "삭제된 게시물은 복구할 수 없습니다." */
let str_deleteDesc = decode('7IKt7KCc65CcIOqyjOyLnOusvOydgCDrs7XqtaztlaAg7IiYIOyXhuyKteuLiOuLpC4.');
/** "URL 복사" */
let str_copyUrl = decode('VVJMIOuzteyCrA..');
/** "ID 차단" */
let str_block_id = decode('SUQg7LCo64uo');
/** "IP 차단" */
let str_block_ip = decode('SVAg7LCo64uo');
/** "닉네임 차단" */
let str_block_name = decode('64uJ64Sk7J6EIOywqOuLqA..');
/** "다음 이용자를 차단하시겠습니까?" */
let str_blockUserTitle = decode('64uk7J2MIOydtOyaqeyekOulvCDssKjri6jtlZjsi5zqsqDsirXri4jquYw_');
/** "키워드 차단" */
let str_block_word = decode('7YKk7JuM65OcIOywqOuLqA..');
/** "전체 차단" */
let str_blockAll = decode('7KCE7LK0IOywqOuLqA..');
/** "갤러리 차단" */
let str_blockGall = decode('6rCk65-s66asIOywqOuLqA..');
/** "추가" */
let str_add = decode('7LaU6rCA');
/** "차단 설정" */
let str_settings_block = decode('7LCo64uoIOyEpOyglQ..');
/** `         ` */
let blanks = decode('4oCA4oCB4oCE4oCF4oCG4oCH4oCI4oCJ4oCK').split('');
MOD['_11'] = () => {return {_d0:str_dclivechat,_71:str_recently,_f3:str_lineBreak,_4a:str_nullNickname,_d4:str_shortPassword,_41:str_nullCode,_cf:str_noGalleryUrl,_bb:str_noGalleryPageUrl,_b7:str_noSupportMobile,_4b:str_logout,_0b:str_confirm,_3e:str_cancel,_7f:str_yes,_81:str_noValidUrl,_d6:str_openUrlTitle,_0d:str_openInNew,_c9:str_placeholderVideo,_ba:str_placeholderMessage,_cb:str_placeholderReply,_4f:str_placeholderComment,_95:str_chatHeader,_5e:str_pullDown,_1b:str_pullDownHover,_8d:str_pullDownHover_zero,_e3:str_pullDownHover_over,_15:str_pullDownHover_count,_54:str_pullDownHover_common,_00:str_nickname,_9f:str_password,_68:str_code,_ee:str_replyTo,_23:str_commentTo,_6e:str_writeComment,_75:str_writeNewComment,_24:str_loading,_3d:str_settings,_6c:str_settings_mado,_b3:str_settings_smoothScroll,_64:str_settings_bigFont,_26:str_settings_showUnfixId,_3f:str_settings_smallDccon,_c5:str_settings_appendLink,_1a:str_settings_lowLatency,_c3:str_settings_chatOnly,_91:str_settings_hideLogin,_b4:str_settings_darkMode,_49:str_settings_chat,_96:str_settings_write,_b1:str_settings_useZzal,_98:str_settings_footer,_f0:str_settings_nikcon,_8e:str_chat,_e9:str_nullContent,_a8:str_notice,_18:str_survey,_85:str_greeting,_56:str_reconnected,_ef:str_error_generic,_0a:str_error_blockKey,_9e:str_error_badRequest,_22:str_imageTooBig,_a7:str_uploadFail,_fb:str_deleteFail,_bc:str_pendingUpload,_7a:str_postErrorImageTitle,_50:str_postErrorImageDesc,_92:str_notifyChatDisabled,_0f:str_runningAlready,_4e:str_tooltip_upload,_11:str_dragAndDrop,_62:str_notImage,_a3:str_chatDisabled,_02:str_settings_commentHighlight,_69:str_addVideo,_b8:str_relocate,_51:str_relocateDone,_ce:str_askMado,_1f:str_closeAll,_d7:str_download,_33:str_tooltip_close,_87:str_askDeleteZzal,_76:str_uploadImage,_e1:str_uploadZzal,_d1:str_update,_25:str_changelog,_8a:str_notBought,_2c:str_delete,_36:str_deleteTitle,_14:str_deleteDesc,_66:str_copyUrl,_db:str_block_id,_ff:str_block_ip,_2e:str_block_name,_c4:str_blockUserTitle,_3b:str_block_word,_f9:str_blockAll,_28:str_blockGall,_e7:str_add,_fc:str_settings_block,_b2:blanks};};
return MOD['_11']();},_94:()=>{// 자주 쓰이는 URL
let host = 'https://gall.dcinside.com/';

// 자주 쓰이는 함수 이름
// let getElementById = 'getElementById';
let getElementsByClassName = 'getElementsByClassName';
// let getElementsByName = 'getElementsByName';
// let getElementsByTagName = 'getElementsByTagName';
let querySelector = 'querySelector';
let innerText = 'innerText';
let placeholder = 'placeholder';
let onclick = 'onclick';
// let globalCompositeOperation = 'globalCompositeOperation';
MOD['_94'] = () => {return {_a0:host,_61:getElementsByClassName,_db:querySelector,_b3:innerText,_33:placeholder,_c7:onclick};};
return MOD['_94']();},_da:()=>{let { _b2:blanks } = MOD['_11']();
let { _b3:innerText } = MOD['_94']();

let doc = document;
let body = doc.body;
let head = doc.head;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let logDiv;

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
    if (DEBUG && logDiv) {
        for (let item of any) {
            if (typeof item == 'undefined') string += ' undefined';
            else string += ' ' + (item.toString?.() ?? '');
        }
        createElement('p', logDiv, { [innerText]: string });
    }
}
let initPromise = () => {
    let r, p = new Promise(resolve => r = resolve);
    return {r, p};
};
let sleep = (ms) => {
    let { r, p } = initPromise();
    timeout(r, ms);
    return p;
}
let randomInt = (start, end) => {
    let range = end - start + 1;
    let num = Math.random() * range;
    return Math.min(start + Math.floor(num), end);
};
let unescapeEmoji = (string) => {
    // emoji support
    let matches = string.matchAll(/&#x([0-9a-fA-F]+);/g);
    for (let match of matches) {
        let emoji = String.fromCodePoint('0x' + match[1]);
        string = string.replace(match[0], emoji);
    }
    return string;
}

let trimHtml = (string) => {
    return string
        .r(/(\r|\t)/g, '')
        .r(/[ ]{2,}/g, ' ');
};
function buf2hex(buffer) {
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
};
let splice = (list, item) => {
    let index = list.indexOf(item);
    if (index != -1) list.splice(index, 1);
}

let encoder = new TextEncoder();
let computeHashAsColor = async (string) => {
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

let randomBlanks = (count) => {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += blanks[randomInt(0, blanks.length - 1)];
    }
    return output;
};

let split = (string) => string.split('||');

// Document
let getCookie = (cookieName) => {
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
let cutIpAddress = (address) => {
    let array = address.split('.');
    return array[0] + '.' + array[1];
};
let setStyleProp = (element, propertyName, value) => element.style.setProperty(propertyName, value);
let setDocStyleProp = (propertyName, value) => setStyleProp(doc.documentElement, propertyName, value);

let createElement = (tagName, parent, attr, ...classes) => {
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
if (DEBUG) logDiv = createElement('div', body, 'log', 'hidden');

// grecaptcha v3
let initCaptchaV3 = async () => {
    let { r, p } = initPromise();
    createElement('script', body, {
        onload: () => {
            if (typeof grecaptcha == 'undefined') return debug('recaptcha is undefined');
            else debug('recaptcha v3 loaded');
            r();
        },
        type: 'text/javascript',
        src: https + 'www.google.com/recaptcha/api.js?render=' + grecaptchaBlock,
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

let useCaptcha = async (func, params, data, action) => {
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

let bytesKb = 1024;
let bytesUnits = 'B.KB.MB.GB.TB.PB'.split('.');
let bytes = (size) => {
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

// UI
let createIcon = (parent, name, ...classes) => {
    return createElement(spanString, parent, { [innerText]: name }, 'material-symbols-outlined.icon', ...classes);
};
let clearChildren = (element) => {
    while(element.lastChild) element.removeChild(element.lastChild);
};
let detach = (element) => {
    element.parentNode.removeChild(element);
    return element;
};
let addClass = (element, ...className) => {
    element.classList.add(...className);
    return element;
};
let removeClass = (element, ...className) => {
    element.classList.remove(...className);
    return element;
};
let scrollToTop = () => scrollTo(0, 0);
let preventEnter = false;
let enterAsClick = (input, submit, bShift = false, bForce = false) => {
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

// URL 매크로
let getBoardUrl = () => host + (bMinor ? 'mgallery/' : (bMini ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = () => getBoardUrl() + 'lists?id=' + gallId;
let getWriteUrl = () => getBoardUrl() + 'write/?id=' + gallId;
let getPostUrl = (num) => getBoardUrl() + 'view/?id=' + gallId + '&no=' + num;
let getDeleteUrl = (num) => getBoardUrl() + 'delete/?id=' + gallId + '&no=' + num;

// Fetch
let serializeForm = (...datas) => {
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
let serializeMultipart = (data, file) => {
    let form = createElement('form', null, { entype: "multipart/formdata" });
    let multipart = new FormData(form);
    for (let key in data) { multipart.append(key, data[key]); }
    if (file && file.name) multipart.append('files[]', file, file.name);
    return multipart;
};

// secret
let _secret;
// from common.js?v=220811 line 841
let _d = (r) => {
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
let rc1 = (s) => {
    let fi = parse(s.substring(0, 1));
    fi = fi > 5 ? fi - 5 : fi + 4;
    return s.r(/^./, fi);
}
let getSecretString = (html) => {
    let r = html.match(/var _r = _d\('([A-Za-z0-9+=\/]+)'\)/);
    if (!r) return '';
    return _d(r[1]);
}
let getSecondServiceCode = (code, secret) => {
    secret = rc1(secret ?? _secret);
    let _rs = secret.split(',');
    let c = '';
    for (n = 0; n < _rs.length; n++)
    c += toChar(2 * (_rs[n] - n - 1) / (13 - n - 1));
    return code.r(/(.{10})$/, c);
}

// worker support
let genUtil = () => {
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
let {
    _IH: getInnerHtml,
    _OH: getOuterHtml,
    _OHA: getOuterHtmlAll,
    _IT: getInnerText,
    _AT: getAttributeTo,
    _A: getAttribute,
    _TF: testFix,
    _IO: innerTextOf,
} = genUtil(debug);

// export let getHtml = (text, tagName, className) => {
//     let matches = getHtmlAll(text, tagName, className);
//     if (!matches) return '';
//     return matches[0];
// }
// export let getHtmlAll = (text, tagName, className) => {
//     let regex;
//     let key = tagName + className;
//     if (savedRegexHtml[key] !== undefined) regex = savedRegexHtml[key];
//     else {
//         let regexString = `<${tagName}[^>]*class=["'][^"]*${className}[^"]*["'][^>]*(\/?)>`;
//         regex = new RegExp(regexString, 'g');
//         savedRegexHtml[key] = regex;
//     }
//     let matches = text.matchAll(regex);
//     if (!matches) return null;
//     let result = [];
//     for (match of matches) {
//         if (match[1]) {
//             result.push([match[0], '']);
//             continue;
//         }
//         let index = match.index;
//         let size = 0;
//         let sub = text.substring(index);
//         let level = 0;
//         let ends = sub.matchAll(new RegExp(`<(\/?)${tagName}[^>]*(\/?)>`, 'g'));
//         for (let end of ends) {
//             if (end[1]) { // close
//                 level -= 1;
//                 if (level == 0) {
//                     index = end.index;
//                     size = end[0].length;
//                     break;
//                 }
//             } else {
//                 if (!end[2]) level += 1;
//             }
//         }
//         result.push([sub.substring(0, index + size), sub.substring(match[0].length, index)]);
//     }
//     return result;
// };
// export let getInnerHtml = (text, tagName, className) => {
//     let match = getHtml(text, tagName, className);
//     if (!match) return '';
//     else return match[1];
// };
// export let getOuterHtml = (text, tagName, className) => {
//     let match = getHtml(text, tagName, className);
//     if (!match) return '';
//     else return match[0];
// };
// export let getOuterHtmlAll = (text, tagName, className) => {
//     let outers = [];
//     let matches = getHtmlAll(text, tagName, className);
//     if (!matches) return '';
//     for (let match of matches) {
//         outers.push(match[0]);
//     }
//     return outers;
// };
// export let getInnerText = (text, tagName, className) => {
//     let innerHtml = getInnerHtml(text, tagName, className);
//     if (!innerHtml) return '';
//     return innerTextOf(innerHtml);
// };
// export let innerTextOf = (text) => {
//     let result = '';
//     for (let match of text.matchAll(/(>|$)(.*?)(<|^)/g)) {
//         result += match[2].trim();
//     }
//     return result;
// };
// export let savedRegexAttr = {};
// export let getAttributeTo = (text, attrName, output, propName) => {
//     let attr = getAttribute(text, attrName);
//     if (attr == null) return;
//     output[propName] = attr;
// }
// export let getAttribute = (text, attrName) => {
//     let regex;
//     if (savedRegexAttr[attrName] !== undefined) regex = savedRegexAttr[attrName];
//     else {
//         regex = new RegExp(`${attrName}="([^"]+)"`);
//         savedRegexAttr[attrName] = regex;
//     }
//     let match = text.match(regex);
//     if (!match) return null;
//     return match[1];
// }

// // 기타 매크로
// export let testFix = (string) => /fix/.test(string);

let savedRegexId = {};
let getValueById = (text, id) => {
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

let getFormData = (text, id, data) => {
    let regex = new RegExp(`<form[^>]+id=["']${id}["'][^>]*>.*?<\/form>`);
    let match = text.match(regex);
    if (!match) return false;
    updateFormDataV3(match[0], data);
    return true;
};

let getVarName = (obj) => {
    return Object.keys(obj)[0];
};
MOD['_da'] = () => {return {_65:doc,_cf:body,_3f:head,_d7:parse,_d5:request,_53:timeout,_95:encode,_07:toChar,_f7:getNow,_e5:initTime,_76:debug,_b8:initPromise,_81:sleep,_50:randomInt,_cd:unescapeEmoji,_9d:trimHtml,_b2:splice,_55:encoder,_9f:computeHashAsColor,_05:randomBlanks,_3a:split,_63:getCookie,_82:cutIpAddress,_52:setStyleProp,_ea:setDocStyleProp,_5f:createElement,_99:initCaptchaV3,_5e:executeCaptchaV3,_02:executeCaptcha,_18:useCaptcha,_34:bytesKb,_90:bytesUnits,_08:bytes,_d2:createIcon,_0d:clearChildren,_2f:detach,_cc:addClass,_f8:removeClass,_78:scrollToTop,_73:preventEnter,_71:enterAsClick,_bc:getBoardUrl,_c3:getBoardUrlPlain,_26:getListUrl,_b5:getWriteUrl,_4f:getPostUrl,_f0:getDeleteUrl,_1b:serializeForm,_30:serializeMultipart,_ae:_d,_d3:rc1,_56:getSecretString,_ed:getSecondServiceCode,_ca:genUtil,_f3:savedRegexId,_21:getValueById,_16:getFormData,_39:getVarName};};
return MOD['_da']();},_4f:()=>{const decoder = new TextDecoder();
let decode = (encoded) => {
    const binary = atob(encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\./g, '='));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) { bytes[i] = binary.charCodeAt(i); }
    return decoder.decode(bytes);
};

/** "DC 라이브챗" */
let str_dclivechat = decode('REMg65287J2067iM7LGX');
/** "최근 사용" */ 
let str_recently = decode('7LWc6re8IOyCrOyaqQ..');
/** "<p><br></p>" */
let str_lineBreak = decode('PHA-PGJyPjwvcD4.')
/** "닉네임을 입력하세요." */
let str_nullNickname = decode('64uJ64Sk7J6E7J2EIOyeheugpe2VmOyEuOyalC4.');
/** "비밀번호를 2자리 이상 입력하세요." */
let str_shortPassword = decode('67mE67CA67KI7Zi466W8IDLsnpDrpqwg7J207IOBIOyeheugpe2VmOyEuOyalC4.');
/** "도배 방지 코드를 입력하세요." */
let str_nullCode = decode('64-E67CwIOuwqeyngCDsvZTrk5zrpbwg7J6F66Cl7ZWY7IS47JqULg..');
/** "이 기능은 DC인사이드 갤러리에서만 사용할 수 있습니다." */
let str_noGalleryUrl = decode('7J20IOq4sOuKpeydgCBEQ-yduOyCrOydtOuTnCDqsKTrn6zrpqzsl5DshJzrp4wg7IKs7Jqp7ZWgIOyImCDsnojsirXri4jri6Qu');
/** "이 기능은 글 목록 페이지에서만 사용할 수 있습니다." */
let str_noGalleryPageUrl = decode('7J20IOq4sOuKpeydgCDquIAg66qp66GdIO2OmOydtOyngOyXkOyEnOunjCDsgqzsmqntlaAg7IiYIOyeiOyKteuLiOuLpC4.');
/** "PC버전 페이지에서 다시 시도해주세요." */
let str_noSupportMobile = decode('UEPrsoTsoIQg7Y6Y7J207KeA7JeQ7IScIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQu');
/** "로그아웃" */
let str_logout = decode('66Gc6re47JWE7JuD');
/** "확인" */
let str_confirm = decode('7ZmV7J24');
/** "취소" */
let str_cancel = decode('7Leo7IaM');
/** "네" */
let str_yes = decode('64Sk');
/** "아니오" */
// export let str_no = decodeString('7JWE64uI7Jik');
/** "주소가 올바르지 않습니다." */
let str_noValidUrl = decode('7KO87IaM6rCAIOyYrOuwlOultOyngCDslYrsirXri4jri6Qu');
/** "이 방송을 시청하시겠습니까?" */
let str_openUrlTitle = decode('7J20IOuwqeyGoeydhCDsi5zssq3tlZjsi5zqsqDsirXri4jquYw_');
/** "새 창에서 열기" */
let str_openInNew = decode('7IOIIOywveyXkOyEnCDsl7TquLA.');
/** "생방송 주소" */
let str_placeholderVideo = decode('7IOd67Cp7IahIOyjvOyGjA..');
/** "메시지 보내기" */
let str_placeholderMessage = decode('66mU7Iuc7KeAIOuztOuCtOq4sA..');
/** "답글 입력" */
let str_placeholderReply = decode('64u16riAIOyeheugpQ..');
/** "댓글 입력" */
let str_placeholderComment = decode('64yT6riAIOyeheugpQ..');
/** "생방송 채팅" */
let str_chatHeader = decode('7IOd67Cp7IahIOyxhO2MhQ..');
/** "스크롤해서 채팅이 멈췄습니다" */
let str_pullDown = decode('7Iqk7YGs66Gk7ZW07IScIOyxhO2MheydtCDrqYjst4TsirXri4jri6Q.');
/** "새 메시지 보기" */
let str_pullDownHover = decode('7IOIIOuplOyLnOyngCDrs7TquLA.');
/** "보기" */
let str_pullDownHover_zero = decode('67O06riw');
/** "20개 이상" */
let str_pullDownHover_over = decode('MjDqsJwg7J207IOB');
/** "개" */
let str_pullDownHover_count = decode('6rCc');
/** "새 메시지 " */
let str_pullDownHover_common = decode('7IOIIOuplOyLnOyngCA.');
/** "닉네임" */
let str_nickname = decode('64uJ64Sk7J6E');
/** "비밀번호" */
let str_password = decode('67mE67CA67KI7Zi4');
/** "코드 입력" */
let str_code = decode('7L2U65OcIOyeheugpQ..');
/** "에게 답글" */
let str_replyTo = decode('7JeQ6rKMIOuLteq4gA..');
/** "에게 댓글" */
let str_commentTo = decode('7JeQ6rKMIOuMk-q4gA..');
/** "댓글 쓰기" */
let str_writeComment = decode('64yT6riAIOyTsOq4sA..');
/** "새 댓글 쓰는 중" */
let str_writeNewComment = decode('7IOIIOuMk-q4gCDsk7DripQg7KSR');
/** "로딩중입니다." */
let str_loading = decode('66Gc65Sp7KSR7J6F64uI64ukLg..');
/** "채팅 설정" */
let str_settings = decode('7LGE7YyFIOyEpOyglQ..');
/** "다중 화면 사용 (마도)" */
let str_settings_mado = decode('64uk7KSRIO2ZlOuptCDsgqzsmqkgKOuniOuPhCk.');
/** "부드러운 스크롤 애니메이션" */
let str_settings_smoothScroll = decode('67aA65Oc65-s7Jq0IOyKpO2BrOuhpCDslaDri4jrqZTsnbTshZg.');
/** "폰트 크기 확대" */
let str_settings_bigFont = decode('7Y-w7Yq4IO2BrOq4sCDtmZXrjIA.');
/** "반고닉 아이디 표시" */
let str_settings_showUnfixId = decode('67CY6rOg64uJIOyVhOydtOuUlCDtkZzsi5w.');
/** "디시콘 크기 줄이기" */
let str_settings_smallDccon = decode('65SU7Iuc7L2YIO2BrOq4sCDspITsnbTquLA.');
/** "글 내용에 링크 추가" */
let str_settings_appendLink = decode('6riAIOuCtOyaqeyXkCDrp4Htgawg7LaU6rCA');
/** "짧은 채팅 지연시간" */
let str_settings_lowLatency = decode('7Ken7J2AIOyxhO2MhSDsp4Dsl7Dsi5zqsIQ.');
/** "방송 없이 채팅창만 사용" */
let str_settings_chatOnly = decode('67Cp7IahIOyXhuydtCDssYTtjIXssL3rp4wg7IKs7Jqp');
/** "유동 로그인 숨기기" */
let str_settings_hideLogin = decode('7Jyg64-ZIOuhnOq3uOyduCDsiKjquLDquLA.');
/** "다크 모드" */
let str_settings_darkMode = decode('64uk7YGsIOuqqOuTnA..');
/** "채팅 표시 방법" */
let str_settings_chat = decode('7LGE7YyFIO2RnOyLnCDrsKnrspU.');
/** "자동짤방 및 꼬리말" */
let str_settings_write = decode('7J6Q64-Z7Kek67CpIOuwjyDqvKzrpqzrp5A.');
/** "자동짤방 사용" */
let str_settings_useZzal = decode('7J6Q64-Z7Kek67CpIOyCrOyaqQ..');
/** "꼬리말 수정" */
let str_settings_footer = decode('6rys66as66eQIOyImOyglQ..');
/** "닉네임 아이콘 표시" */
let str_settings_nikcon = decode('64uJ64Sk7J6EIOyVhOydtOy9mCDtkZzsi5w.');
/** "채팅" */
let str_chat = decode('7LGE7YyF');
/** "삭제되었거나 존재하지 않는 게시물입니다." */
let str_nullContent = decode('7IKt7KCc65CY7JeI6rGw64KYIOyhtOyerO2VmOyngCDslYrripQg6rKM7Iuc66y87J6F64uI64ukLg..');
/** "공지" */
let str_notice = decode('6rO17KeA');
/** "설문" */
let str_survey = decode('7ISk66y4');
/** "채팅방에 오신 것을 환영합니다!" */
let str_greeting = decode('7LGE7YyF67Cp7JeQIOyYpOyLoCDqsoPsnYQg7ZmY7JiB7ZWp64uI64ukIQ..');
/** "채팅창에 다시 연결했습니다." */
let str_reconnected = decode('7LGE7YyF7LC97JeQIOuLpOyLnCDsl7DqsrDtlojsirXri4jri6Qu');
/** "알 수 없는 오류" */
let str_error_generic = decode('7JWMIOyImCDsl4bripQg7Jik66WY');
/** "알 수 없는 오류 (block_key)" */
let str_error_blockKey = decode('7JWMIOyImCDsl4bripQg7Jik66WYIChibG9ja19rZXkp');
/** "잘못된 요청입니다." */
let str_error_badRequest = decode('7J6Y66q765CcIOyalOyyreyeheuLiOuLpC4.');
/** "이미지가 너무 큽니다." */
let str_imageTooBig = decode('7J2066-47KeA6rCAIOuEiOustCDtgb3ri4jri6Qu');
/** "이미지를 바꾸시겠습니까?" */
// export let str_replaceImage = decode('7J2066-47KeA66W8IOuwlOq-uOyLnOqyoOyKteuLiOq5jD8.');
/** "이미지는 한 번에 하나씩 올릴 수 있습니다." */
// export let str_imageOver = decode('7J2066-47KeA64qUIO2VnCDrsojsl5Ag7ZWY64KY7JSpIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "바꾸기" */
// export let str_replace = decode('67CU6r646riw');
/** "이미지 업로드에 실패했습니다." */
let str_uploadFail = decode('7J2066-47KeAIOyXheuhnOuTnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
/** "이미지 삭제에 실패했습니다." */
let str_deleteFail = decode('7J2066-47KeAIOyCreygnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
/** "아직 업로드 중인 이미지가 있습니다." */
let str_pendingUpload = decode('7JWE7KeBIOyXheuhnOuTnCDspJHsnbgg7J2066-47KeA6rCAIOyeiOyKteuLiOuLpC4.');
/** "이미지 없이 올리시겠습니까?" */
let str_postErrorImageTitle = decode('7J2066-47KeAIOyXhuydtCDsmKzrpqzsi5zqsqDsirXri4jquYw_');
/** "업로드에 실패한 이미지가 있습니다." */
let str_postErrorImageDesc = decode('7JeF66Gc65Oc7JeQIOyLpO2MqO2VnCDsnbTrr7jsp4DqsIAg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화되었습니다." */
let str_notifyChatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQmOyXiOyKteuLiOuLpC4.');
/** "이미 실행중입니다." */
let str_runningAlready = decode('7J2066-4IOyLpO2WieykkeyeheuLiOuLpC4.');
/** "이미지 첨부" */
let str_tooltip_upload = decode('7J2066-47KeAIOyyqOu2gA..');
/** "드래그 앤 드롭으로 이미지 올리기" */
let str_dragAndDrop = decode('65Oc656Y6re4IOyVpCDrk5zroa3snLzroZwg7J2066-47KeAIOyYrOumrOq4sA..');
/** "새로운 이미지로 변경" */
// export let str_reloadCaptcha = decode('7IOI66Gc7Jq0IOydtOuvuOyngOuhnCDrs4Dqsr0.');
/** "이미지만 올릴 수 있습니다." */
let str_notImage = decode('7J2066-47KeA66eMIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화된 갤러리입니다." */
let str_chatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQnCDqsKTrn6zrpqzsnoXri4jri6Qu');
/** "댓글수 하이라이트" */
let str_settings_commentHighlight = decode('64yT6riA7IiYIO2VmOydtOudvOydtO2KuA..');
/** "영상 추가" */
let str_addVideo = decode('7JiB7IOBIOy2lOqwgA..');
/** "배치 바꾸기" */
let str_relocate = decode('67Cw7LmYIOuwlOq-uOq4sA..');
/** "배치 완료!" */
let str_relocateDone = decode('67Cw7LmYIOyZhOujjCE.');
/** "드래그" */
// export let str_drag = decode('65Oc656Y6re4');
/** "모바일 환경에서는 권장하지 않습니다.\n그래도 사용하시겠습니까?" */
let str_askMado = decode('66qo67CU7J28IO2ZmOqyveyXkOyEnOuKlCDqtozsnqXtlZjsp4Ag7JWK7Iq164uI64ukLgrqt7jrnpjrj4Qg7IKs7Jqp7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
/** "전체 닫기" */
let str_closeAll = decode('7KCE7LK0IOuLq-q4sA..');
/** "다운로드" */
let str_download = decode('64uk7Jq066Gc65Oc');
/** "닫기" */
let str_tooltip_close = decode('64ur6riw');
/** "자동짤방 이미지를 삭제하시겠습니까?" */
let str_askDeleteZzal = decode('7J6Q64-Z7Kek67CpIOydtOuvuOyngOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw_');
/** "이미지 업로드" */
let str_uploadImage = decode('7J2066-47KeAIOyXheuhnOuTnA..');
/** "자동짤방 업로드" */
let str_uploadZzal = decode('7J6Q64-Z7Kek67CpIOyXheuhnOuTnA..');
/** "버전 업데이트됨" */
let str_update = decode('67KE7KCEIOyXheuNsOydtO2KuOuQqA..');
/** "전체 변경사항 보기" */
let str_changelog = decode('7KCE7LK0IOuzgOqyveyCrO2VrSDrs7TquLA.');
/** "구매하지 않은 디시콘입니다." */
let str_notBought = decode('6rWs66ek7ZWY7KeAIOyViuydgCDrlJTsi5zsvZjsnoXri4jri6Qu');
/** "삭제" */
let str_delete = decode('7IKt7KCc');
/** "삭제하시겠습니까?" */
let str_deleteTitle = decode('7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
/** "삭제된 게시물은 복구할 수 없습니다." */
let str_deleteDesc = decode('7IKt7KCc65CcIOqyjOyLnOusvOydgCDrs7XqtaztlaAg7IiYIOyXhuyKteuLiOuLpC4.');
/** "URL 복사" */
let str_copyUrl = decode('VVJMIOuzteyCrA..');
/** "ID 차단" */
let str_block_id = decode('SUQg7LCo64uo');
/** "IP 차단" */
let str_block_ip = decode('SVAg7LCo64uo');
/** "닉네임 차단" */
let str_block_name = decode('64uJ64Sk7J6EIOywqOuLqA..');
/** "다음 이용자를 차단하시겠습니까?" */
let str_blockUserTitle = decode('64uk7J2MIOydtOyaqeyekOulvCDssKjri6jtlZjsi5zqsqDsirXri4jquYw_');
/** "키워드 차단" */
let str_block_word = decode('7YKk7JuM65OcIOywqOuLqA..');
/** "전체 차단" */
let str_blockAll = decode('7KCE7LK0IOywqOuLqA..');
/** "갤러리 차단" */
let str_blockGall = decode('6rCk65-s66asIOywqOuLqA..');
/** "추가" */
let str_add = decode('7LaU6rCA');
/** "차단 설정" */
let str_settings_block = decode('7LCo64uoIOyEpOyglQ..');
/** `         ` */
let blanks = decode('4oCA4oCB4oCE4oCF4oCG4oCH4oCI4oCJ4oCK').split('');
MOD['_4f'] = () => {return {_d0:str_dclivechat,_71:str_recently,_f3:str_lineBreak,_4a:str_nullNickname,_d4:str_shortPassword,_41:str_nullCode,_cf:str_noGalleryUrl,_bb:str_noGalleryPageUrl,_b7:str_noSupportMobile,_4b:str_logout,_0b:str_confirm,_3e:str_cancel,_7f:str_yes,_81:str_noValidUrl,_d6:str_openUrlTitle,_0d:str_openInNew,_c9:str_placeholderVideo,_ba:str_placeholderMessage,_cb:str_placeholderReply,_4f:str_placeholderComment,_95:str_chatHeader,_5e:str_pullDown,_1b:str_pullDownHover,_8d:str_pullDownHover_zero,_e3:str_pullDownHover_over,_15:str_pullDownHover_count,_54:str_pullDownHover_common,_00:str_nickname,_9f:str_password,_68:str_code,_ee:str_replyTo,_23:str_commentTo,_6e:str_writeComment,_75:str_writeNewComment,_24:str_loading,_3d:str_settings,_6c:str_settings_mado,_b3:str_settings_smoothScroll,_64:str_settings_bigFont,_26:str_settings_showUnfixId,_3f:str_settings_smallDccon,_c5:str_settings_appendLink,_1a:str_settings_lowLatency,_c3:str_settings_chatOnly,_91:str_settings_hideLogin,_b4:str_settings_darkMode,_49:str_settings_chat,_96:str_settings_write,_b1:str_settings_useZzal,_98:str_settings_footer,_f0:str_settings_nikcon,_8e:str_chat,_e9:str_nullContent,_a8:str_notice,_18:str_survey,_85:str_greeting,_56:str_reconnected,_ef:str_error_generic,_0a:str_error_blockKey,_9e:str_error_badRequest,_22:str_imageTooBig,_a7:str_uploadFail,_fb:str_deleteFail,_bc:str_pendingUpload,_7a:str_postErrorImageTitle,_50:str_postErrorImageDesc,_92:str_notifyChatDisabled,_0f:str_runningAlready,_4e:str_tooltip_upload,_11:str_dragAndDrop,_62:str_notImage,_a3:str_chatDisabled,_02:str_settings_commentHighlight,_69:str_addVideo,_b8:str_relocate,_51:str_relocateDone,_ce:str_askMado,_1f:str_closeAll,_d7:str_download,_33:str_tooltip_close,_87:str_askDeleteZzal,_76:str_uploadImage,_e1:str_uploadZzal,_d1:str_update,_25:str_changelog,_8a:str_notBought,_2c:str_delete,_36:str_deleteTitle,_14:str_deleteDesc,_66:str_copyUrl,_db:str_block_id,_ff:str_block_ip,_2e:str_block_name,_c4:str_blockUserTitle,_3b:str_block_word,_f9:str_blockAll,_28:str_blockGall,_e7:str_add,_fc:str_settings_block,_b2:blanks};};
return MOD['_4f']();},_6b:()=>{let getAsText = async (url, options = {}, onerror = console.error) => {
    if (!options.credentials) options.credentials = 'include';
    let res = await fetch(url, options).catch(onerror);
    if (!res || !res.ok) return '';
    return (await res.text().catch(onerror)).replace(/(\n|\r|\t)/g, '');
};
MOD['_6b'] = () => {return {_d5:getAsText};};
return MOD['_6b']();},_b8:()=>{const decoder = new TextDecoder();
let decode = (encoded) => {
    const binary = atob(encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\./g, '='));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) { bytes[i] = binary.charCodeAt(i); }
    return decoder.decode(bytes);
};

/** "DC 라이브챗" */
let str_dclivechat = decode('REMg65287J2067iM7LGX');
/** "최근 사용" */ 
let str_recently = decode('7LWc6re8IOyCrOyaqQ..');
/** "<p><br></p>" */
let str_lineBreak = decode('PHA-PGJyPjwvcD4.')
/** "닉네임을 입력하세요." */
let str_nullNickname = decode('64uJ64Sk7J6E7J2EIOyeheugpe2VmOyEuOyalC4.');
/** "비밀번호를 2자리 이상 입력하세요." */
let str_shortPassword = decode('67mE67CA67KI7Zi466W8IDLsnpDrpqwg7J207IOBIOyeheugpe2VmOyEuOyalC4.');
/** "도배 방지 코드를 입력하세요." */
let str_nullCode = decode('64-E67CwIOuwqeyngCDsvZTrk5zrpbwg7J6F66Cl7ZWY7IS47JqULg..');
/** "이 기능은 DC인사이드 갤러리에서만 사용할 수 있습니다." */
let str_noGalleryUrl = decode('7J20IOq4sOuKpeydgCBEQ-yduOyCrOydtOuTnCDqsKTrn6zrpqzsl5DshJzrp4wg7IKs7Jqp7ZWgIOyImCDsnojsirXri4jri6Qu');
/** "이 기능은 글 목록 페이지에서만 사용할 수 있습니다." */
let str_noGalleryPageUrl = decode('7J20IOq4sOuKpeydgCDquIAg66qp66GdIO2OmOydtOyngOyXkOyEnOunjCDsgqzsmqntlaAg7IiYIOyeiOyKteuLiOuLpC4.');
/** "PC버전 페이지에서 다시 시도해주세요." */
let str_noSupportMobile = decode('UEPrsoTsoIQg7Y6Y7J207KeA7JeQ7IScIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQu');
/** "로그아웃" */
let str_logout = decode('66Gc6re47JWE7JuD');
/** "확인" */
let str_confirm = decode('7ZmV7J24');
/** "취소" */
let str_cancel = decode('7Leo7IaM');
/** "네" */
let str_yes = decode('64Sk');
/** "아니오" */
// export let str_no = decodeString('7JWE64uI7Jik');
/** "주소가 올바르지 않습니다." */
let str_noValidUrl = decode('7KO87IaM6rCAIOyYrOuwlOultOyngCDslYrsirXri4jri6Qu');
/** "이 방송을 시청하시겠습니까?" */
let str_openUrlTitle = decode('7J20IOuwqeyGoeydhCDsi5zssq3tlZjsi5zqsqDsirXri4jquYw_');
/** "새 창에서 열기" */
let str_openInNew = decode('7IOIIOywveyXkOyEnCDsl7TquLA.');
/** "생방송 주소" */
let str_placeholderVideo = decode('7IOd67Cp7IahIOyjvOyGjA..');
/** "메시지 보내기" */
let str_placeholderMessage = decode('66mU7Iuc7KeAIOuztOuCtOq4sA..');
/** "답글 입력" */
let str_placeholderReply = decode('64u16riAIOyeheugpQ..');
/** "댓글 입력" */
let str_placeholderComment = decode('64yT6riAIOyeheugpQ..');
/** "생방송 채팅" */
let str_chatHeader = decode('7IOd67Cp7IahIOyxhO2MhQ..');
/** "스크롤해서 채팅이 멈췄습니다" */
let str_pullDown = decode('7Iqk7YGs66Gk7ZW07IScIOyxhO2MheydtCDrqYjst4TsirXri4jri6Q.');
/** "새 메시지 보기" */
let str_pullDownHover = decode('7IOIIOuplOyLnOyngCDrs7TquLA.');
/** "보기" */
let str_pullDownHover_zero = decode('67O06riw');
/** "20개 이상" */
let str_pullDownHover_over = decode('MjDqsJwg7J207IOB');
/** "개" */
let str_pullDownHover_count = decode('6rCc');
/** "새 메시지 " */
let str_pullDownHover_common = decode('7IOIIOuplOyLnOyngCA.');
/** "닉네임" */
let str_nickname = decode('64uJ64Sk7J6E');
/** "비밀번호" */
let str_password = decode('67mE67CA67KI7Zi4');
/** "코드 입력" */
let str_code = decode('7L2U65OcIOyeheugpQ..');
/** "에게 답글" */
let str_replyTo = decode('7JeQ6rKMIOuLteq4gA..');
/** "에게 댓글" */
let str_commentTo = decode('7JeQ6rKMIOuMk-q4gA..');
/** "댓글 쓰기" */
let str_writeComment = decode('64yT6riAIOyTsOq4sA..');
/** "새 댓글 쓰는 중" */
let str_writeNewComment = decode('7IOIIOuMk-q4gCDsk7DripQg7KSR');
/** "로딩중입니다." */
let str_loading = decode('66Gc65Sp7KSR7J6F64uI64ukLg..');
/** "채팅 설정" */
let str_settings = decode('7LGE7YyFIOyEpOyglQ..');
/** "다중 화면 사용 (마도)" */
let str_settings_mado = decode('64uk7KSRIO2ZlOuptCDsgqzsmqkgKOuniOuPhCk.');
/** "부드러운 스크롤 애니메이션" */
let str_settings_smoothScroll = decode('67aA65Oc65-s7Jq0IOyKpO2BrOuhpCDslaDri4jrqZTsnbTshZg.');
/** "폰트 크기 확대" */
let str_settings_bigFont = decode('7Y-w7Yq4IO2BrOq4sCDtmZXrjIA.');
/** "반고닉 아이디 표시" */
let str_settings_showUnfixId = decode('67CY6rOg64uJIOyVhOydtOuUlCDtkZzsi5w.');
/** "디시콘 크기 줄이기" */
let str_settings_smallDccon = decode('65SU7Iuc7L2YIO2BrOq4sCDspITsnbTquLA.');
/** "글 내용에 링크 추가" */
let str_settings_appendLink = decode('6riAIOuCtOyaqeyXkCDrp4Htgawg7LaU6rCA');
/** "짧은 채팅 지연시간" */
let str_settings_lowLatency = decode('7Ken7J2AIOyxhO2MhSDsp4Dsl7Dsi5zqsIQ.');
/** "방송 없이 채팅창만 사용" */
let str_settings_chatOnly = decode('67Cp7IahIOyXhuydtCDssYTtjIXssL3rp4wg7IKs7Jqp');
/** "유동 로그인 숨기기" */
let str_settings_hideLogin = decode('7Jyg64-ZIOuhnOq3uOyduCDsiKjquLDquLA.');
/** "다크 모드" */
let str_settings_darkMode = decode('64uk7YGsIOuqqOuTnA..');
/** "채팅 표시 방법" */
let str_settings_chat = decode('7LGE7YyFIO2RnOyLnCDrsKnrspU.');
/** "자동짤방 및 꼬리말" */
let str_settings_write = decode('7J6Q64-Z7Kek67CpIOuwjyDqvKzrpqzrp5A.');
/** "자동짤방 사용" */
let str_settings_useZzal = decode('7J6Q64-Z7Kek67CpIOyCrOyaqQ..');
/** "꼬리말 수정" */
let str_settings_footer = decode('6rys66as66eQIOyImOyglQ..');
/** "닉네임 아이콘 표시" */
let str_settings_nikcon = decode('64uJ64Sk7J6EIOyVhOydtOy9mCDtkZzsi5w.');
/** "채팅" */
let str_chat = decode('7LGE7YyF');
/** "삭제되었거나 존재하지 않는 게시물입니다." */
let str_nullContent = decode('7IKt7KCc65CY7JeI6rGw64KYIOyhtOyerO2VmOyngCDslYrripQg6rKM7Iuc66y87J6F64uI64ukLg..');
/** "공지" */
let str_notice = decode('6rO17KeA');
/** "설문" */
let str_survey = decode('7ISk66y4');
/** "채팅방에 오신 것을 환영합니다!" */
let str_greeting = decode('7LGE7YyF67Cp7JeQIOyYpOyLoCDqsoPsnYQg7ZmY7JiB7ZWp64uI64ukIQ..');
/** "채팅창에 다시 연결했습니다." */
let str_reconnected = decode('7LGE7YyF7LC97JeQIOuLpOyLnCDsl7DqsrDtlojsirXri4jri6Qu');
/** "알 수 없는 오류" */
let str_error_generic = decode('7JWMIOyImCDsl4bripQg7Jik66WY');
/** "알 수 없는 오류 (block_key)" */
let str_error_blockKey = decode('7JWMIOyImCDsl4bripQg7Jik66WYIChibG9ja19rZXkp');
/** "잘못된 요청입니다." */
let str_error_badRequest = decode('7J6Y66q765CcIOyalOyyreyeheuLiOuLpC4.');
/** "이미지가 너무 큽니다." */
let str_imageTooBig = decode('7J2066-47KeA6rCAIOuEiOustCDtgb3ri4jri6Qu');
/** "이미지를 바꾸시겠습니까?" */
// export let str_replaceImage = decode('7J2066-47KeA66W8IOuwlOq-uOyLnOqyoOyKteuLiOq5jD8.');
/** "이미지는 한 번에 하나씩 올릴 수 있습니다." */
// export let str_imageOver = decode('7J2066-47KeA64qUIO2VnCDrsojsl5Ag7ZWY64KY7JSpIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "바꾸기" */
// export let str_replace = decode('67CU6r646riw');
/** "이미지 업로드에 실패했습니다." */
let str_uploadFail = decode('7J2066-47KeAIOyXheuhnOuTnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
/** "이미지 삭제에 실패했습니다." */
let str_deleteFail = decode('7J2066-47KeAIOyCreygnOyXkCDsi6TtjKjtlojsirXri4jri6Qu');
/** "아직 업로드 중인 이미지가 있습니다." */
let str_pendingUpload = decode('7JWE7KeBIOyXheuhnOuTnCDspJHsnbgg7J2066-47KeA6rCAIOyeiOyKteuLiOuLpC4.');
/** "이미지 없이 올리시겠습니까?" */
let str_postErrorImageTitle = decode('7J2066-47KeAIOyXhuydtCDsmKzrpqzsi5zqsqDsirXri4jquYw_');
/** "업로드에 실패한 이미지가 있습니다." */
let str_postErrorImageDesc = decode('7JeF66Gc65Oc7JeQIOyLpO2MqO2VnCDsnbTrr7jsp4DqsIAg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화되었습니다." */
let str_notifyChatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQmOyXiOyKteuLiOuLpC4.');
/** "이미 실행중입니다." */
let str_runningAlready = decode('7J2066-4IOyLpO2WieykkeyeheuLiOuLpC4.');
/** "이미지 첨부" */
let str_tooltip_upload = decode('7J2066-47KeAIOyyqOu2gA..');
/** "드래그 앤 드롭으로 이미지 올리기" */
let str_dragAndDrop = decode('65Oc656Y6re4IOyVpCDrk5zroa3snLzroZwg7J2066-47KeAIOyYrOumrOq4sA..');
/** "새로운 이미지로 변경" */
// export let str_reloadCaptcha = decode('7IOI66Gc7Jq0IOydtOuvuOyngOuhnCDrs4Dqsr0.');
/** "이미지만 올릴 수 있습니다." */
let str_notImage = decode('7J2066-47KeA66eMIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화된 갤러리입니다." */
let str_chatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQnCDqsKTrn6zrpqzsnoXri4jri6Qu');
/** "댓글수 하이라이트" */
let str_settings_commentHighlight = decode('64yT6riA7IiYIO2VmOydtOudvOydtO2KuA..');
/** "영상 추가" */
let str_addVideo = decode('7JiB7IOBIOy2lOqwgA..');
/** "배치 바꾸기" */
let str_relocate = decode('67Cw7LmYIOuwlOq-uOq4sA..');
/** "배치 완료!" */
let str_relocateDone = decode('67Cw7LmYIOyZhOujjCE.');
/** "드래그" */
// export let str_drag = decode('65Oc656Y6re4');
/** "모바일 환경에서는 권장하지 않습니다.\n그래도 사용하시겠습니까?" */
let str_askMado = decode('66qo67CU7J28IO2ZmOqyveyXkOyEnOuKlCDqtozsnqXtlZjsp4Ag7JWK7Iq164uI64ukLgrqt7jrnpjrj4Qg7IKs7Jqp7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
/** "전체 닫기" */
let str_closeAll = decode('7KCE7LK0IOuLq-q4sA..');
/** "다운로드" */
let str_download = decode('64uk7Jq066Gc65Oc');
/** "닫기" */
let str_tooltip_close = decode('64ur6riw');
/** "자동짤방 이미지를 삭제하시겠습니까?" */
let str_askDeleteZzal = decode('7J6Q64-Z7Kek67CpIOydtOuvuOyngOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw_');
/** "이미지 업로드" */
let str_uploadImage = decode('7J2066-47KeAIOyXheuhnOuTnA..');
/** "자동짤방 업로드" */
let str_uploadZzal = decode('7J6Q64-Z7Kek67CpIOyXheuhnOuTnA..');
/** "버전 업데이트됨" */
let str_update = decode('67KE7KCEIOyXheuNsOydtO2KuOuQqA..');
/** "전체 변경사항 보기" */
let str_changelog = decode('7KCE7LK0IOuzgOqyveyCrO2VrSDrs7TquLA.');
/** "구매하지 않은 디시콘입니다." */
let str_notBought = decode('6rWs66ek7ZWY7KeAIOyViuydgCDrlJTsi5zsvZjsnoXri4jri6Qu');
/** "삭제" */
let str_delete = decode('7IKt7KCc');
/** "삭제하시겠습니까?" */
let str_deleteTitle = decode('7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMPw..');
/** "삭제된 게시물은 복구할 수 없습니다." */
let str_deleteDesc = decode('7IKt7KCc65CcIOqyjOyLnOusvOydgCDrs7XqtaztlaAg7IiYIOyXhuyKteuLiOuLpC4.');
/** "URL 복사" */
let str_copyUrl = decode('VVJMIOuzteyCrA..');
/** "ID 차단" */
let str_block_id = decode('SUQg7LCo64uo');
/** "IP 차단" */
let str_block_ip = decode('SVAg7LCo64uo');
/** "닉네임 차단" */
let str_block_name = decode('64uJ64Sk7J6EIOywqOuLqA..');
/** "다음 이용자를 차단하시겠습니까?" */
let str_blockUserTitle = decode('64uk7J2MIOydtOyaqeyekOulvCDssKjri6jtlZjsi5zqsqDsirXri4jquYw_');
/** "키워드 차단" */
let str_block_word = decode('7YKk7JuM65OcIOywqOuLqA..');
/** "전체 차단" */
let str_blockAll = decode('7KCE7LK0IOywqOuLqA..');
/** "갤러리 차단" */
let str_blockGall = decode('6rCk65-s66asIOywqOuLqA..');
/** "추가" */
let str_add = decode('7LaU6rCA');
/** "차단 설정" */
let str_settings_block = decode('7LCo64uoIOyEpOyglQ..');
/** `         ` */
let blanks = decode('4oCA4oCB4oCE4oCF4oCG4oCH4oCI4oCJ4oCK').split('');
MOD['_b8'] = () => {return {_d0:str_dclivechat,_71:str_recently,_f3:str_lineBreak,_4a:str_nullNickname,_d4:str_shortPassword,_41:str_nullCode,_cf:str_noGalleryUrl,_bb:str_noGalleryPageUrl,_b7:str_noSupportMobile,_4b:str_logout,_0b:str_confirm,_3e:str_cancel,_7f:str_yes,_81:str_noValidUrl,_d6:str_openUrlTitle,_0d:str_openInNew,_c9:str_placeholderVideo,_ba:str_placeholderMessage,_cb:str_placeholderReply,_4f:str_placeholderComment,_95:str_chatHeader,_5e:str_pullDown,_1b:str_pullDownHover,_8d:str_pullDownHover_zero,_e3:str_pullDownHover_over,_15:str_pullDownHover_count,_54:str_pullDownHover_common,_00:str_nickname,_9f:str_password,_68:str_code,_ee:str_replyTo,_23:str_commentTo,_6e:str_writeComment,_75:str_writeNewComment,_24:str_loading,_3d:str_settings,_6c:str_settings_mado,_b3:str_settings_smoothScroll,_64:str_settings_bigFont,_26:str_settings_showUnfixId,_3f:str_settings_smallDccon,_c5:str_settings_appendLink,_1a:str_settings_lowLatency,_c3:str_settings_chatOnly,_91:str_settings_hideLogin,_b4:str_settings_darkMode,_49:str_settings_chat,_96:str_settings_write,_b1:str_settings_useZzal,_98:str_settings_footer,_f0:str_settings_nikcon,_8e:str_chat,_e9:str_nullContent,_a8:str_notice,_18:str_survey,_85:str_greeting,_56:str_reconnected,_ef:str_error_generic,_0a:str_error_blockKey,_9e:str_error_badRequest,_22:str_imageTooBig,_a7:str_uploadFail,_fb:str_deleteFail,_bc:str_pendingUpload,_7a:str_postErrorImageTitle,_50:str_postErrorImageDesc,_92:str_notifyChatDisabled,_0f:str_runningAlready,_4e:str_tooltip_upload,_11:str_dragAndDrop,_62:str_notImage,_a3:str_chatDisabled,_02:str_settings_commentHighlight,_69:str_addVideo,_b8:str_relocate,_51:str_relocateDone,_ce:str_askMado,_1f:str_closeAll,_d7:str_download,_33:str_tooltip_close,_87:str_askDeleteZzal,_76:str_uploadImage,_e1:str_uploadZzal,_d1:str_update,_25:str_changelog,_8a:str_notBought,_2c:str_delete,_36:str_deleteTitle,_14:str_deleteDesc,_66:str_copyUrl,_db:str_block_id,_ff:str_block_ip,_2e:str_block_name,_c4:str_blockUserTitle,_3b:str_block_word,_f9:str_blockAll,_28:str_blockGall,_e7:str_add,_fc:str_settings_block,_b2:blanks};};
return MOD['_b8']();},_cd:()=>{// 자주 쓰이는 URL
let host = 'https://gall.dcinside.com/';

// 자주 쓰이는 함수 이름
// let getElementById = 'getElementById';
let getElementsByClassName = 'getElementsByClassName';
// let getElementsByName = 'getElementsByName';
// let getElementsByTagName = 'getElementsByTagName';
let querySelector = 'querySelector';
let innerText = 'innerText';
let placeholder = 'placeholder';
let onclick = 'onclick';
// let globalCompositeOperation = 'globalCompositeOperation';
MOD['_cd'] = () => {return {_a0:host,_61:getElementsByClassName,_db:querySelector,_b3:innerText,_33:placeholder,_c7:onclick};};
return MOD['_cd']();},_20:()=>{let { _b2:blanks } = MOD['_b8']();
let { _b3:innerText } = MOD['_cd']();

let doc = document;
let body = doc.body;
let head = doc.head;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let logDiv;

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
    if (DEBUG && logDiv) {
        for (let item of any) {
            if (typeof item == 'undefined') string += ' undefined';
            else string += ' ' + (item.toString?.() ?? '');
        }
        createElement('p', logDiv, { [innerText]: string });
    }
}
let initPromise = () => {
    let r, p = new Promise(resolve => r = resolve);
    return {r, p};
};
let sleep = (ms) => {
    let { r, p } = initPromise();
    timeout(r, ms);
    return p;
}
let randomInt = (start, end) => {
    let range = end - start + 1;
    let num = Math.random() * range;
    return Math.min(start + Math.floor(num), end);
};
let unescapeEmoji = (string) => {
    // emoji support
    let matches = string.matchAll(/&#x([0-9a-fA-F]+);/g);
    for (let match of matches) {
        let emoji = String.fromCodePoint('0x' + match[1]);
        string = string.replace(match[0], emoji);
    }
    return string;
}

let trimHtml = (string) => {
    return string
        .r(/(\r|\t)/g, '')
        .r(/[ ]{2,}/g, ' ');
};
function buf2hex(buffer) {
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
};
let splice = (list, item) => {
    let index = list.indexOf(item);
    if (index != -1) list.splice(index, 1);
}

let encoder = new TextEncoder();
let computeHashAsColor = async (string) => {
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

let randomBlanks = (count) => {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += blanks[randomInt(0, blanks.length - 1)];
    }
    return output;
};

let split = (string) => string.split('||');

// Document
let getCookie = (cookieName) => {
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
let cutIpAddress = (address) => {
    let array = address.split('.');
    return array[0] + '.' + array[1];
};
let setStyleProp = (element, propertyName, value) => element.style.setProperty(propertyName, value);
let setDocStyleProp = (propertyName, value) => setStyleProp(doc.documentElement, propertyName, value);

let createElement = (tagName, parent, attr, ...classes) => {
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
if (DEBUG) logDiv = createElement('div', body, 'log', 'hidden');

// grecaptcha v3
let initCaptchaV3 = async () => {
    let { r, p } = initPromise();
    createElement('script', body, {
        onload: () => {
            if (typeof grecaptcha == 'undefined') return debug('recaptcha is undefined');
            else debug('recaptcha v3 loaded');
            r();
        },
        type: 'text/javascript',
        src: https + 'www.google.com/recaptcha/api.js?render=' + grecaptchaBlock,
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

let useCaptcha = async (func, params, data, action) => {
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

let bytesKb = 1024;
let bytesUnits = 'B.KB.MB.GB.TB.PB'.split('.');
let bytes = (size) => {
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

// UI
let createIcon = (parent, name, ...classes) => {
    return createElement(spanString, parent, { [innerText]: name }, 'material-symbols-outlined.icon', ...classes);
};
let clearChildren = (element) => {
    while(element.lastChild) element.removeChild(element.lastChild);
};
let detach = (element) => {
    element.parentNode.removeChild(element);
    return element;
};
let addClass = (element, ...className) => {
    element.classList.add(...className);
    return element;
};
let removeClass = (element, ...className) => {
    element.classList.remove(...className);
    return element;
};
let scrollToTop = () => scrollTo(0, 0);
let preventEnter = false;
let enterAsClick = (input, submit, bShift = false, bForce = false) => {
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

// URL 매크로
let getBoardUrl = () => host + (bMinor ? 'mgallery/' : (bMini ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = () => getBoardUrl() + 'lists?id=' + gallId;
let getWriteUrl = () => getBoardUrl() + 'write/?id=' + gallId;
let getPostUrl = (num) => getBoardUrl() + 'view/?id=' + gallId + '&no=' + num;
let getDeleteUrl = (num) => getBoardUrl() + 'delete/?id=' + gallId + '&no=' + num;

// Fetch
let serializeForm = (...datas) => {
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
let serializeMultipart = (data, file) => {
    let form = createElement('form', null, { entype: "multipart/formdata" });
    let multipart = new FormData(form);
    for (let key in data) { multipart.append(key, data[key]); }
    if (file && file.name) multipart.append('files[]', file, file.name);
    return multipart;
};

// secret
let _secret;
// from common.js?v=220811 line 841
let _d = (r) => {
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
let rc1 = (s) => {
    let fi = parse(s.substring(0, 1));
    fi = fi > 5 ? fi - 5 : fi + 4;
    return s.r(/^./, fi);
}
let getSecretString = (html) => {
    let r = html.match(/var _r = _d\('([A-Za-z0-9+=\/]+)'\)/);
    if (!r) return '';
    return _d(r[1]);
}
let getSecondServiceCode = (code, secret) => {
    secret = rc1(secret ?? _secret);
    let _rs = secret.split(',');
    let c = '';
    for (n = 0; n < _rs.length; n++)
    c += toChar(2 * (_rs[n] - n - 1) / (13 - n - 1));
    return code.r(/(.{10})$/, c);
}

// worker support
let genUtil = () => {
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
let {
    _IH: getInnerHtml,
    _OH: getOuterHtml,
    _OHA: getOuterHtmlAll,
    _IT: getInnerText,
    _AT: getAttributeTo,
    _A: getAttribute,
    _TF: testFix,
    _IO: innerTextOf,
} = genUtil(debug);

// export let getHtml = (text, tagName, className) => {
//     let matches = getHtmlAll(text, tagName, className);
//     if (!matches) return '';
//     return matches[0];
// }
// export let getHtmlAll = (text, tagName, className) => {
//     let regex;
//     let key = tagName + className;
//     if (savedRegexHtml[key] !== undefined) regex = savedRegexHtml[key];
//     else {
//         let regexString = `<${tagName}[^>]*class=["'][^"]*${className}[^"]*["'][^>]*(\/?)>`;
//         regex = new RegExp(regexString, 'g');
//         savedRegexHtml[key] = regex;
//     }
//     let matches = text.matchAll(regex);
//     if (!matches) return null;
//     let result = [];
//     for (match of matches) {
//         if (match[1]) {
//             result.push([match[0], '']);
//             continue;
//         }
//         let index = match.index;
//         let size = 0;
//         let sub = text.substring(index);
//         let level = 0;
//         let ends = sub.matchAll(new RegExp(`<(\/?)${tagName}[^>]*(\/?)>`, 'g'));
//         for (let end of ends) {
//             if (end[1]) { // close
//                 level -= 1;
//                 if (level == 0) {
//                     index = end.index;
//                     size = end[0].length;
//                     break;
//                 }
//             } else {
//                 if (!end[2]) level += 1;
//             }
//         }
//         result.push([sub.substring(0, index + size), sub.substring(match[0].length, index)]);
//     }
//     return result;
// };
// export let getInnerHtml = (text, tagName, className) => {
//     let match = getHtml(text, tagName, className);
//     if (!match) return '';
//     else return match[1];
// };
// export let getOuterHtml = (text, tagName, className) => {
//     let match = getHtml(text, tagName, className);
//     if (!match) return '';
//     else return match[0];
// };
// export let getOuterHtmlAll = (text, tagName, className) => {
//     let outers = [];
//     let matches = getHtmlAll(text, tagName, className);
//     if (!matches) return '';
//     for (let match of matches) {
//         outers.push(match[0]);
//     }
//     return outers;
// };
// export let getInnerText = (text, tagName, className) => {
//     let innerHtml = getInnerHtml(text, tagName, className);
//     if (!innerHtml) return '';
//     return innerTextOf(innerHtml);
// };
// export let innerTextOf = (text) => {
//     let result = '';
//     for (let match of text.matchAll(/(>|$)(.*?)(<|^)/g)) {
//         result += match[2].trim();
//     }
//     return result;
// };
// export let savedRegexAttr = {};
// export let getAttributeTo = (text, attrName, output, propName) => {
//     let attr = getAttribute(text, attrName);
//     if (attr == null) return;
//     output[propName] = attr;
// }
// export let getAttribute = (text, attrName) => {
//     let regex;
//     if (savedRegexAttr[attrName] !== undefined) regex = savedRegexAttr[attrName];
//     else {
//         regex = new RegExp(`${attrName}="([^"]+)"`);
//         savedRegexAttr[attrName] = regex;
//     }
//     let match = text.match(regex);
//     if (!match) return null;
//     return match[1];
// }

// // 기타 매크로
// export let testFix = (string) => /fix/.test(string);

let savedRegexId = {};
let getValueById = (text, id) => {
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

let getFormData = (text, id, data) => {
    let regex = new RegExp(`<form[^>]+id=["']${id}["'][^>]*>.*?<\/form>`);
    let match = text.match(regex);
    if (!match) return false;
    updateFormDataV3(match[0], data);
    return true;
};

let getVarName = (obj) => {
    return Object.keys(obj)[0];
};
MOD['_20'] = () => {return {_65:doc,_cf:body,_3f:head,_d7:parse,_d5:request,_53:timeout,_95:encode,_07:toChar,_f7:getNow,_e5:initTime,_76:debug,_b8:initPromise,_81:sleep,_50:randomInt,_cd:unescapeEmoji,_9d:trimHtml,_b2:splice,_55:encoder,_9f:computeHashAsColor,_05:randomBlanks,_3a:split,_63:getCookie,_82:cutIpAddress,_52:setStyleProp,_ea:setDocStyleProp,_5f:createElement,_99:initCaptchaV3,_5e:executeCaptchaV3,_02:executeCaptcha,_18:useCaptcha,_34:bytesKb,_90:bytesUnits,_08:bytes,_d2:createIcon,_0d:clearChildren,_2f:detach,_cc:addClass,_f8:removeClass,_78:scrollToTop,_73:preventEnter,_71:enterAsClick,_bc:getBoardUrl,_c3:getBoardUrlPlain,_26:getListUrl,_b5:getWriteUrl,_4f:getPostUrl,_f0:getDeleteUrl,_1b:serializeForm,_30:serializeMultipart,_ae:_d,_d3:rc1,_56:getSecretString,_ed:getSecondServiceCode,_ca:genUtil,_f3:savedRegexId,_21:getValueById,_16:getFormData,_39:getVarName};};
return MOD['_20']();},_4b:()=>{// 자주 쓰이는 URL
let host = 'https://gall.dcinside.com/';

// 자주 쓰이는 함수 이름
// let getElementById = 'getElementById';
let getElementsByClassName = 'getElementsByClassName';
// let getElementsByName = 'getElementsByName';
// let getElementsByTagName = 'getElementsByTagName';
let querySelector = 'querySelector';
let innerText = 'innerText';
let placeholder = 'placeholder';
let onclick = 'onclick';
// let globalCompositeOperation = 'globalCompositeOperation';
MOD['_4b'] = () => {return {_a0:host,_61:getElementsByClassName,_db:querySelector,_b3:innerText,_33:placeholder,_c7:onclick};};
return MOD['_4b']();},_fe:()=>{let { _18:str_survey,_a8:str_notice } = MOD['_4f']();
let { _d5:getAsText } = MOD['_6b']();
let { _76:debug,_21:getValueById,_ca:genUtil } = MOD['_20']();
let { _a0:host } = MOD['_4b']();

let initGall = async (gallId, interval) => {
    let gall = {
        id: gallId,
        type: '',
        reset: null,
        set: null,
        onpostdata: null,
        oncomment: null,
        last: 0,
    };

    let listUrl = host + 'board/lists?id=' + gallId;
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
            let _lastNum = _LN ?? gall.last;
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
                _lastNum = Math.max(_lastNum, num);
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
            self.postMessage({type:'pd', d: postDataArray, n: _lastNum});
        } catch (e) {
            debug(e);
        }
    };
    let updateCycle = async (update, params) => {
        await update(params);
        let _loop = setTimeout(() => updateCycle(update, params), _IV ?? interval);
        if (loop !== undefined) loop = _loop;
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
                `self.onmessage=async(e)=>{switch(e.data.type){case'iv':_IV=e.data.iv;break;case'ln':_LN=e.data.ln;break;}};`,
                `_UC(_GP(${genUtil.toString()},console.error,${getAsText.toString()},${listUrl},{},'${str_survey}','${str_notice}'));`
            ], { type: 'text/javascript' });
            let url = URL.createObjectURL(blob);
            worker = new Worker(url);
            worker.onerror = (...any) => {
                debug(...any);
                initUpdate('error', ...any);
            };
            worker.onmessage = async (e) => {
                let data = e.data;
                if (data && data.type) {
                    if (data.type == 'pd') {
                        lastNum = data.n;
                        gall.last = lastNum;
                        gall.onpostdata?.(data.d);
                        if (worker) worker.postMessage({ type: 'ln', ln: lastNum });
                        return;
                    }
                    if (data.type == 'cc') return gall.oncomment?.(data.n, data.c, bFirstUpdate);
                    if (data.type == 'err') return initUpdate('worker err');
                }
            };
        } else {
            if (loop) clearTimeout(loop);
            loop = updateCycle(updateList, debug, {}, genUtil());
        }
    };
    gall.reset = initUpdate;
    initUpdate();

    gall.set = (_interval) => {
        if (worker) worker.postMessage({ type: 'iv', iv: _interval });
        else interval = _interval;
    };
    return gall;
};
MOD['_fe'] = () => {return {_6e:initGall};};
return MOD['_fe']();},_90:()=>{let { _76:debug } = MOD['_da']();
let { _6e:initGall } = MOD['_fe']();

(async() => {
    let gall = await initGall('20thdenki', 5000);
    gall.onpostdata = debug;
})();
}};
MOD['_90']();})()