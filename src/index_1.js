(()=>{const MOD={
_1711:()=>{const decoder = new TextDecoder();
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
MOD['_1711'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_1711']();},_1394:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_1394'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_1394']();},_b3da:()=>{let { _ddb2:blanks } = MOD['_1711']();
let { _5fa0:host } = MOD['_1394']();

let doc = document;
let body = doc.body;
let head = doc.head;

let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
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
let buf2hex = (buffer) => {
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

// URL 매크로
let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
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

let falseString = (s) => 'false||' + s;
MOD['_b3da'] = () => {return {_2e65:doc,_89cf:body,_a33f:head,_7771:storage,_79c7:bWorkerAvailable,_da69:bClipboardReadAvailable,_c7d7:parse,_36d5:request,_6753:timeout,_5595:encode,_6507:toChar,_e4f7:getNow,_6676:debug,_a9b8:initPromise,_9481:sleep,_5250:randomInt,_f3cd:unescapeEmoji,_5c9d:trimHtml,_7ec1:buf2hex,_bcb2:splice,_959f:computeHashAsColor,_31d7:randomBlanks,_dd3a:split,_e765:getCookie,_0c82:cutIpAddress,_be52:setStyleProp,_c7ea:setDocStyleProp,_6b34:bytesKb,_0390:bytesUnits,_f208:bytes,_74bc:getBoardUrl,_1fc3:getBoardUrlPlain,_1d26:getListUrl,_7fb5:getWriteUrl,_0382:getPostUrl,_bbf0:getDeleteUrl,_371b:serializeForm,_9830:serializeMultipart,_97ae:_d,_af0d:rc1,_7556:getSecretString,_c8ed:getSecondServiceCode,_cfca:genUtil,_4782:getValueById,_0716:getFormData,_6239:getVarName,_39ec:falseString};};
return MOD['_b3da']();},_ad4f:()=>{const decoder = new TextDecoder();
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
MOD['_ad4f'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_ad4f']();},_3eff:()=>{let { _89cf:body,undefined:createElement,_6676:debug,_39ec:falseString,_a9b8:initPromise,_dd3a:split } = MOD['_b3da']();
let { _e09e:str_error_badRequest } = MOD['_ad4f']();

let grecaptchaToken = 'g-recaptcha-token';
let grecaptchaResponse = 'g-recaptcha-response';
let grecaptchaBlock = '6Lc-Fr0UAAAAAOdqLYqPy53MxlRMIXpNXFvBliwI';

let initCaptchaV3 = async () => {
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
MOD['_3eff'] = () => {return {_8599:initCaptchaV3,_b818:useCaptcha};};
return MOD['_3eff']();},_c5b8:()=>{const decoder = new TextDecoder();
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
MOD['_c5b8'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_c5b8']();},_64cd:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_64cd'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_64cd']();},_6620:()=>{let { _ddb2:blanks } = MOD['_c5b8']();
let { _5fa0:host } = MOD['_64cd']();

let doc = document;
let body = doc.body;
let head = doc.head;

let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
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
let buf2hex = (buffer) => {
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

// URL 매크로
let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
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

let falseString = (s) => 'false||' + s;
MOD['_6620'] = () => {return {_2e65:doc,_89cf:body,_a33f:head,_7771:storage,_79c7:bWorkerAvailable,_da69:bClipboardReadAvailable,_c7d7:parse,_36d5:request,_6753:timeout,_5595:encode,_6507:toChar,_e4f7:getNow,_6676:debug,_a9b8:initPromise,_9481:sleep,_5250:randomInt,_f3cd:unescapeEmoji,_5c9d:trimHtml,_7ec1:buf2hex,_bcb2:splice,_959f:computeHashAsColor,_31d7:randomBlanks,_dd3a:split,_e765:getCookie,_0c82:cutIpAddress,_be52:setStyleProp,_c7ea:setDocStyleProp,_6b34:bytesKb,_0390:bytesUnits,_f208:bytes,_74bc:getBoardUrl,_1fc3:getBoardUrlPlain,_1d26:getListUrl,_7fb5:getWriteUrl,_0382:getPostUrl,_bbf0:getDeleteUrl,_371b:serializeForm,_9830:serializeMultipart,_97ae:_d,_af0d:rc1,_7556:getSecretString,_c8ed:getSecondServiceCode,_cfca:genUtil,_4782:getValueById,_0716:getFormData,_6239:getVarName,_39ec:falseString};};
return MOD['_6620']();},_5b4b:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_5b4b'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_5b4b']();},_b16b:()=>{let getAsText = async (url, options = {}, onerror = console.error) => {
    if (!options.credentials) options.credentials = 'include';
    let res = await fetch(url, options).catch(onerror);
    if (!res || !res.ok) return '';
    return (await res.text().catch(onerror)).replace(/(\n|\r|\t)/g, '');
};
MOD['_b16b'] = () => {return {_1dd5:getAsText};};
return MOD['_b16b']();},_9f5e:()=>{const decoder = new TextDecoder();
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
MOD['_9f5e'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_9f5e']();},_0f2a:()=>{let getAsText = async (url, options = {}, onerror = console.error) => {
    if (!options.credentials) options.credentials = 'include';
    let res = await fetch(url, options).catch(onerror);
    if (!res || !res.ok) return '';
    return (await res.text().catch(onerror)).replace(/(\n|\r|\t)/g, '');
};
MOD['_0f2a'] = () => {return {_1dd5:getAsText};};
return MOD['_0f2a']();},_afca:()=>{const decoder = new TextDecoder();
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
MOD['_afca'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_afca']();},_9a1f:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_9a1f'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_9a1f']();},_661f:()=>{let { _ddb2:blanks } = MOD['_afca']();
let { _5fa0:host } = MOD['_9a1f']();

let doc = document;
let body = doc.body;
let head = doc.head;

let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
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
let buf2hex = (buffer) => {
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

// URL 매크로
let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
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

let falseString = (s) => 'false||' + s;
MOD['_661f'] = () => {return {_2e65:doc,_89cf:body,_a33f:head,_7771:storage,_79c7:bWorkerAvailable,_da69:bClipboardReadAvailable,_c7d7:parse,_36d5:request,_6753:timeout,_5595:encode,_6507:toChar,_e4f7:getNow,_6676:debug,_a9b8:initPromise,_9481:sleep,_5250:randomInt,_f3cd:unescapeEmoji,_5c9d:trimHtml,_7ec1:buf2hex,_bcb2:splice,_959f:computeHashAsColor,_31d7:randomBlanks,_dd3a:split,_e765:getCookie,_0c82:cutIpAddress,_be52:setStyleProp,_c7ea:setDocStyleProp,_6b34:bytesKb,_0390:bytesUnits,_f208:bytes,_74bc:getBoardUrl,_1fc3:getBoardUrlPlain,_1d26:getListUrl,_7fb5:getWriteUrl,_0382:getPostUrl,_bbf0:getDeleteUrl,_371b:serializeForm,_9830:serializeMultipart,_97ae:_d,_af0d:rc1,_7556:getSecretString,_c8ed:getSecondServiceCode,_cfca:genUtil,_4782:getValueById,_0716:getFormData,_6239:getVarName,_39ec:falseString};};
return MOD['_661f']();},_07fe:()=>{let { _c318:str_survey,_0ca8:str_notice } = MOD['_9f5e']();
let { _1dd5:getAsText } = MOD['_0f2a']();
let { _6676:debug,_4782:getValueById,_cfca:genUtil,_1d26:getListUrl } = MOD['_661f']();

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
MOD['_07fe'] = () => {return {_bc6e:initGall};};
return MOD['_07fe']();},_407c:()=>{const decoder = new TextDecoder();
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
MOD['_407c'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_407c']();},_7c61:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_7c61'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_7c61']();},_2fd7:()=>{let { _ddb2:blanks } = MOD['_407c']();
let { _5fa0:host } = MOD['_7c61']();

let doc = document;
let body = doc.body;
let head = doc.head;

let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
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
let buf2hex = (buffer) => {
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

// URL 매크로
let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
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

let falseString = (s) => 'false||' + s;
MOD['_2fd7'] = () => {return {_2e65:doc,_89cf:body,_a33f:head,_7771:storage,_79c7:bWorkerAvailable,_da69:bClipboardReadAvailable,_c7d7:parse,_36d5:request,_6753:timeout,_5595:encode,_6507:toChar,_e4f7:getNow,_6676:debug,_a9b8:initPromise,_9481:sleep,_5250:randomInt,_f3cd:unescapeEmoji,_5c9d:trimHtml,_7ec1:buf2hex,_bcb2:splice,_959f:computeHashAsColor,_31d7:randomBlanks,_dd3a:split,_e765:getCookie,_0c82:cutIpAddress,_be52:setStyleProp,_c7ea:setDocStyleProp,_6b34:bytesKb,_0390:bytesUnits,_f208:bytes,_74bc:getBoardUrl,_1fc3:getBoardUrlPlain,_1d26:getListUrl,_7fb5:getWriteUrl,_0382:getPostUrl,_bbf0:getDeleteUrl,_371b:serializeForm,_9830:serializeMultipart,_97ae:_d,_af0d:rc1,_7556:getSecretString,_c8ed:getSecondServiceCode,_cfca:genUtil,_4782:getValueById,_0716:getFormData,_6239:getVarName,_39ec:falseString};};
return MOD['_2fd7']();},_5ab9:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_5ab9'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_5ab9']();},_508a:()=>{let { _7771:storage } = MOD['_2fd7']();
let { _338e:appName } = MOD['_5ab9']();

let initOptions = (appName) => {
    let _saveData = {};
    let onApplyFunc = {};
    let saveOptions = (override) => {
        let string = JSON.stringify(override ?? _saveData);
        storage?.setItem(appName, string);
    };
    let _applyOption = (optionKey, value) => {
        _saveData[optionKey] = value;
        onApplyFunc[optionKey]?.(value);
    };
    let applyOption = (optionKey, value) => {
        _applyOption(optionKey, value);
        saveOptions();
    };
    let getOption = (optionKey) => {
        return _saveData[optionKey] ?? null;
    }
    let loadOptions = () => {
        let string = storage?.getItem(appName) ?? '';
        if (!string) return;
        _saveData = JSON.parse(string);
        for (let key in _saveData) _applyOption(key, _saveData[key]);
    };
    let clearSaveData = () => {
        _saveData = {};
        saveOptions();
    };
    return {
        onApplyFunc,
        applyOption,
        getOption,
        loadOptions,
        clearSaveData
    };
}

// export let {
//     onApplyFunc,
//     applyOption,
//     getOption,
//     loadOptions,
//     clearSaveData
// } = initOptions(appName);
MOD['_508a'] = () => {return {_a0cf:initOptions};};
return MOD['_508a']();},_2fba:()=>{const decoder = new TextDecoder();
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
MOD['_2fba'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_2fba']();},_70bd:()=>{const decoder = new TextDecoder();
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
MOD['_70bd'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_70bd']();},_90ee:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_90ee'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_90ee']();},_2c1b:()=>{let { _ddb2:blanks } = MOD['_70bd']();
let { _5fa0:host } = MOD['_90ee']();

let doc = document;
let body = doc.body;
let head = doc.head;

let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
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
let buf2hex = (buffer) => {
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

// URL 매크로
let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
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

let falseString = (s) => 'false||' + s;
MOD['_2c1b'] = () => {return {_2e65:doc,_89cf:body,_a33f:head,_7771:storage,_79c7:bWorkerAvailable,_da69:bClipboardReadAvailable,_c7d7:parse,_36d5:request,_6753:timeout,_5595:encode,_6507:toChar,_e4f7:getNow,_6676:debug,_a9b8:initPromise,_9481:sleep,_5250:randomInt,_f3cd:unescapeEmoji,_5c9d:trimHtml,_7ec1:buf2hex,_bcb2:splice,_959f:computeHashAsColor,_31d7:randomBlanks,_dd3a:split,_e765:getCookie,_0c82:cutIpAddress,_be52:setStyleProp,_c7ea:setDocStyleProp,_6b34:bytesKb,_0390:bytesUnits,_f208:bytes,_74bc:getBoardUrl,_1fc3:getBoardUrlPlain,_1d26:getListUrl,_7fb5:getWriteUrl,_0382:getPostUrl,_bbf0:getDeleteUrl,_371b:serializeForm,_9830:serializeMultipart,_97ae:_d,_af0d:rc1,_7556:getSecretString,_c8ed:getSecondServiceCode,_cfca:genUtil,_4782:getValueById,_0716:getFormData,_6239:getVarName,_39ec:falseString};};
return MOD['_2c1b']();},_9d69:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_9d69'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_9d69']();},_9dbd:()=>{const decoder = new TextDecoder();
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
MOD['_9dbd'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_9dbd']();},_a071:()=>{let { _89cf:body,_6676:debug,_2e65:doc,_a33f:head } = MOD['_2c1b']();
let { _84de:bMobileDevice,_fc71:bMobileSafari,_5cd2:hidden,_2fb3:innerText,_63c7:onclick,_7edb:querySelector } = MOD['_9d69']();
let { _0211:str_dragAndDrop } = MOD['_9dbd']();

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
let createIcon = (parent, name, ...classes) => {
    return createElement('span', parent, { [innerText]: name }, 'material-symbols-outlined.icon', ...classes);
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

let initUI = () => {
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
MOD['_a071'] = () => {return {_d45f:createElement,_a002:createIcon,_790d:clearChildren,_5f2f:detach,_82cc:addClass,_e4f8:removeClass,_2f78:scrollToTop,_6571:enterAsClick,_6ac9:initUI};};
return MOD['_a071']();},_60e4:()=>{const decoder = new TextDecoder();
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
MOD['_60e4'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_60e4']();},_2744:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_2744'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_2744']();},_2555:()=>{let { _ddb2:blanks } = MOD['_60e4']();
let { _5fa0:host } = MOD['_2744']();

let doc = document;
let body = doc.body;
let head = doc.head;

let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
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
let buf2hex = (buffer) => {
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

// URL 매크로
let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
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

let falseString = (s) => 'false||' + s;
MOD['_2555'] = () => {return {_2e65:doc,_89cf:body,_a33f:head,_7771:storage,_79c7:bWorkerAvailable,_da69:bClipboardReadAvailable,_c7d7:parse,_36d5:request,_6753:timeout,_5595:encode,_6507:toChar,_e4f7:getNow,_6676:debug,_a9b8:initPromise,_9481:sleep,_5250:randomInt,_f3cd:unescapeEmoji,_5c9d:trimHtml,_7ec1:buf2hex,_bcb2:splice,_959f:computeHashAsColor,_31d7:randomBlanks,_dd3a:split,_e765:getCookie,_0c82:cutIpAddress,_be52:setStyleProp,_c7ea:setDocStyleProp,_6b34:bytesKb,_0390:bytesUnits,_f208:bytes,_74bc:getBoardUrl,_1fc3:getBoardUrlPlain,_1d26:getListUrl,_7fb5:getWriteUrl,_0382:getPostUrl,_bbf0:getDeleteUrl,_371b:serializeForm,_9830:serializeMultipart,_97ae:_d,_af0d:rc1,_7556:getSecretString,_c8ed:getSecondServiceCode,_cfca:genUtil,_4782:getValueById,_0716:getFormData,_6239:getVarName,_39ec:falseString};};
return MOD['_2555']();},_5e49:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_5e49'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_5e49']();},_0125:()=>{let getAsText = async (url, options = {}, onerror = console.error) => {
    if (!options.credentials) options.credentials = 'include';
    let res = await fetch(url, options).catch(onerror);
    if (!res || !res.ok) return '';
    return (await res.text().catch(onerror)).replace(/(\n|\r|\t)/g, '');
};
MOD['_0125'] = () => {return {_1dd5:getAsText};};
return MOD['_0125']();},_fe0e:()=>{let { _6676:debug,undefined:getAttribute,undefined:getInnerHtml,undefined:getInnerText,undefined:getOuterHtml,undefined:testFix } = MOD['_2555']();
let { _5fa0:host } = MOD['_5e49']();
let { _1dd5:getAsText } = MOD['_0125']();

let initUser = () => {
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
MOD['_fe0e'] = () => {return {_9fb3:initUser};};
return MOD['_fe0e']();},_2fe6:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_2fe6'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_2fe6']();},_96c3:()=>{const decoder = new TextDecoder();
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
MOD['_96c3'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_96c3']();},_493a:()=>{const decoder = new TextDecoder();
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
MOD['_493a'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_493a']();},_2440:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_2440'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_2440']();},_d693:()=>{let { _ddb2:blanks } = MOD['_493a']();
let { _5fa0:host } = MOD['_2440']();

let doc = document;
let body = doc.body;
let head = doc.head;

let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
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
let buf2hex = (buffer) => {
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

// URL 매크로
let getBoardUrl = (gallType = 'G') => host + (gallType === 'M' ? 'mgallery/' : (gallType === 'm' ? 'mini/' : '')) + 'board/';
let getBoardUrlPlain = () => host + 'board/';
let getListUrl = (gallType, gallId) => getBoardUrl(gallType) + 'lists?id=' + gallId;
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

let falseString = (s) => 'false||' + s;
MOD['_d693'] = () => {return {_2e65:doc,_89cf:body,_a33f:head,_7771:storage,_79c7:bWorkerAvailable,_da69:bClipboardReadAvailable,_c7d7:parse,_36d5:request,_6753:timeout,_5595:encode,_6507:toChar,_e4f7:getNow,_6676:debug,_a9b8:initPromise,_9481:sleep,_5250:randomInt,_f3cd:unescapeEmoji,_5c9d:trimHtml,_7ec1:buf2hex,_bcb2:splice,_959f:computeHashAsColor,_31d7:randomBlanks,_dd3a:split,_e765:getCookie,_0c82:cutIpAddress,_be52:setStyleProp,_c7ea:setDocStyleProp,_6b34:bytesKb,_0390:bytesUnits,_f208:bytes,_74bc:getBoardUrl,_1fc3:getBoardUrlPlain,_1d26:getListUrl,_7fb5:getWriteUrl,_0382:getPostUrl,_bbf0:getDeleteUrl,_371b:serializeForm,_9830:serializeMultipart,_97ae:_d,_af0d:rc1,_7556:getSecretString,_c8ed:getSecondServiceCode,_cfca:genUtil,_4782:getValueById,_0716:getFormData,_6239:getVarName,_39ec:falseString};};
return MOD['_d693']();},_e969:()=>{// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
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

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 환경
let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);
MOD['_e969'] = () => {return {_338e:appName,_856c:openLinkFuncName,_c401:onImageErrorFuncName,_5d2b:onImageClickFuncName,_5fa0:host,_7d61:getElementsByClassName,_7edb:querySelector,_2fb3:innerText,_9b33:placeholder,_63c7:onclick,_5cd2:hidden,_8c6c:disabled,_84de:bMobileDevice,_fc71:bMobileSafari};};
return MOD['_e969']();},_a0aa:()=>{const decoder = new TextDecoder();
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
MOD['_a0aa'] = () => {return {_80d0:str_dclivechat,_c071:str_recently,_e1f3:str_lineBreak,_024a:str_nullNickname,_a6d4:str_shortPassword,_6d41:str_nullCode,_70cf:str_noGalleryUrl,_fcbb:str_noGalleryPageUrl,_abb7:str_noSupportMobile,_b14b:str_logout,_f70b:str_confirm,_ea3e:str_cancel,_2c7f:str_yes,_a681:str_noValidUrl,_90d6:str_openUrlTitle,_370d:str_openInNew,_c7c9:str_placeholderVideo,_daba:str_placeholderMessage,_0ccb:str_placeholderReply,_a34f:str_placeholderComment,_9395:str_chatHeader,_5b5e:str_pullDown,_371b:str_pullDownHover,_b48d:str_pullDownHover_zero,_55e3:str_pullDownHover_over,_3115:str_pullDownHover_count,_a054:str_pullDownHover_common,_1f00:str_nickname,_a99f:str_password,_7568:str_code,_4f00:str_replyTo,_eb23:str_commentTo,_70f3:str_writeComment,_2075:str_writeNewComment,_c324:str_loading,_543d:str_settings,_c36c:str_settings_mado,_42b3:str_settings_smoothScroll,_1e64:str_settings_bigFont,_d526:str_settings_showUnfixId,_5e3f:str_settings_smallDccon,_c6c5:str_settings_appendLink,_121a:str_settings_lowLatency,_d00d:str_settings_chatOnly,_2291:str_settings_hideLogin,_2cb4:str_settings_darkMode,_e749:str_settings_chat,_5e96:str_settings_write,_69b1:str_settings_useZzal,_4998:str_settings_footer,_9af0:str_settings_nikcon,_fe8e:str_chat,_a291:str_nullContent,_0ca8:str_notice,_c318:str_survey,_9800:str_greeting,_ed56:str_reconnected,_feef:str_error_generic,_520a:str_error_blockKey,_e09e:str_error_badRequest,_b922:str_imageTooBig,_96a7:str_uploadFail,_26fb:str_deleteFail,_50bc:str_pendingUpload,_767a:str_postErrorImageTitle,_9d24:str_postErrorImageDesc,_0392:str_notifyChatDisabled,_a10f:str_runningAlready,_42bc:str_tooltip_upload,_0211:str_dragAndDrop,_5162:str_notImage,_60a3:str_chatDisabled,_b902:str_settings_commentHighlight,_9869:str_addVideo,_18b8:str_relocate,_6751:str_relocateDone,_10ce:str_askMado,_841f:str_closeAll,_84d7:str_download,_3533:str_tooltip_close,_4c87:str_askDeleteZzal,_b876:str_uploadImage,_79e1:str_uploadZzal,_dfd1:str_update,_e925:str_changelog,_5196:str_notBought,_da54:str_delete,_0f36:str_deleteTitle,_6714:str_deleteDesc,_6187:str_copyUrl,_b154:str_block_id,_d6ff:str_block_ip,_cb2e:str_block_name,_88c4:str_blockUserTitle,_ecb3:str_block_word,_82d1:str_blockAll,_d628:str_blockGall,_0ce7:str_add,_79fc:str_settings_block,_ddb2:blanks};};
return MOD['_a0aa']();},_5027:()=>{let { _89cf:body,_6676:debug,_2e65:doc,_a33f:head } = MOD['_d693']();
let { _84de:bMobileDevice,_fc71:bMobileSafari,_5cd2:hidden,_2fb3:innerText,_63c7:onclick,_7edb:querySelector } = MOD['_e969']();
let { _0211:str_dragAndDrop } = MOD['_a0aa']();

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
let createIcon = (parent, name, ...classes) => {
    return createElement('span', parent, { [innerText]: name }, 'material-symbols-outlined.icon', ...classes);
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

let initUI = () => {
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
MOD['_5027'] = () => {return {_d45f:createElement,_a002:createIcon,_790d:clearChildren,_5f2f:detach,_82cc:addClass,_e4f8:removeClass,_2f78:scrollToTop,_6571:enterAsClick,_6ac9:initUI};};
return MOD['_5027']();},_0399:()=>{let { _8c6c:disabled,_5cd2:hidden,_2fb3:innerText,_63c7:onclick,_9b33:placeholder } = MOD['_2fe6']();
let { _9869:str_addVideo,_841f:str_closeAll,_f70b:str_confirm,_a681:str_noValidUrl,_370d:str_openInNew,_90d6:str_openUrlTitle,_c7c9:str_placeholderVideo,_18b8:str_relocate,_6751:str_relocateDone,_3533:str_tooltip_close } = MOD['_96c3']();
let { _82cc:addClass,_d45f:createElement,_a002:createIcon,_6571:enterAsClick,_e4f8:removeClass } = MOD['_5027']();

let initVideo = ({ main, openModal, openAlert }, { applyOption, onApplyFunc, saveOptions }, commands) => {
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
MOD['_0399'] = () => {return {_85b7:initVideo};};
return MOD['_0399']();},_1490:()=>{let { _8599:initCaptchaV3 } = MOD['_3eff']();
let { undefined:addClass,_89cf:body,undefined:clearChildren,_6676:debug,_2e65:doc,undefined:getAttribute,undefined:getInnerHtml,undefined:getInnerText,_1d26:getListUrl,undefined:getOuterHtml,undefined:testFix } = MOD['_6620']();
let { _338e:appName,_84de:bMobileDevice,_5fa0:host,_2fb3:innerText } = MOD['_5b4b']();
let { _1dd5:getAsText } = MOD['_b16b']();
let { _bc6e:initGall } = MOD['_07fe']();
let { _a0cf:initOptions } = MOD['_508a']();
let { _80d0:str_dclivechat,_70cf:str_noGalleryUrl,_abb7:str_noSupportMobile } = MOD['_2fba']();
let { _6ac9:initUI } = MOD['_a071']();
let { _9fb3:initUser } = MOD['_fe0e']();
let { _85b7:initVideo } = MOD['_0399']();

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
}};
MOD['_1490']();})()