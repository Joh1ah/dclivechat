/** 
 * DC 라이브챗 by Joh1ah (좋1아)
 * 해당 버전: 1.5.2-20230121
 * git: https://github.com/Joh1ah/dclivechat
 */
(async() => {

/**
 * NOTE: 용량 최적화
 * 
 * 최종 빌드 결과물이 지나지게 길어지지 않도록 주의할 것
 * 대부분의 브라우저에서는 64KB 제한이 있음
 */

//20230121
String.prototype.r = function(regex, string) {
    return this.replace(regex, string);
}

//#region 특수문자 문자열 셋

let decoder = new TextDecoder();
function decode(encoded) {
    let binary = atob(encoded.r(/-/g, '+').r(/_/g, '/').r(/\./g, '='));
    let bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) { bytes[i] = binary.charCodeAt(i); }
    return decoder.decode(bytes);
}

/**
 * NOTE: 특수문자 처리
 * 
 * 한글과 같은 문자가 URL 퍼센트 인코딩을 거치면 길이가 급격하게 늘어남
 * 예) "라이브챗" > "%EB%9D%BC%EC%9D%B4%EB%B8%8C%EC%B1%9"
 * 
 * 따라서 이러한 문자열을 미리 Base64 URL 인코딩 후
 * 로드 시 역순으로 변환하는 과정을 거치는 것으로 문제를 회피
 * 
 * 기존 Base64 URL 인코딩에서 쓰이는 "=" 기호 역시
 * URL 인코딩 시 이스케이프되므로 "."으로 대체했음
 */

/**
 * NOTE: 중복 Base64 인코딩 적용 - 1.5.0-20230120
 * 
 * 공백문자, 이퀄 기호, 중괄호 등 대부분의 특수문자가 전부 퍼센트 인코딩되면서
 * 결국 전체 코드를 Base64 인코딩 하는 것이
 * (전체 코드가 ascii에서 표현 가능한 문자로만 이루어졌다는 가정 하에)
 * 최종적인 결과물로 놓고봤을 때 더 적절하다는 것을 확인했음
 * 
 * 따라서 상기한 특수문자 처리 방식은 인코딩이 중복되어
 * 하나마나 한 정도로 길이가 늘어나는 문제가 있음
 * 
 * 하지만 디버깅을 위해 UTF-8 인코딩된 버전을 자주 사용했고
 * 돌려놓기에는 너무 양이 많았던 관계로
 * 상기 방식을 유지하기로 함
 */

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
/** "미니 갤러리는 지원하지 않습니다." */
// let str_noSupportMini = decode('66-464uIIOqwpOufrOumrOuKlCDsp4Dsm5DtlZjsp4Ag7JWK7Iq164uI64ukLg..');
/** "PC버전 페이지에서 다시 시도해주세요." */
let str_noSupportMobile = decode('UEPrsoTsoIQg7Y6Y7J207KeA7JeQ7IScIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQu');
/** "로그아웃" */
let str_logout = decode('66Gc6re47JWE7JuD');
/** "확인" */
let str_comfirm = decode('7ZmV7J24');
/** "취소" */
let str_cancel = decode('7Leo7IaM');
/** "네" */
let str_yes = decode('64Sk');
/** "아니오" */
// let str_no = decodeString('7JWE64uI7Jik');
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
/** "디시콘 검색" */
// let str_placeholderSearchDccon = decodeString('65SU7Iuc7L2YIOqygOyDiQ..');
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
/** "채팅 규칙" */
// let str_chatRule = decode('7LGE7YyFIOq3nOy5mQ..');
/** "네, 알겠습니다!" */
// let str_ruleConfirm = decode('64SkLCDslYzqsqDsirXri4jri6Qh');
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
let str_settings_shortLatency = decode('7Ken7J2AIOyxhO2MhSDsp4Dsl7Dsi5zqsIQ.');
/** "방송 없이 채팅창만 사용" */
let str_settings_chatOnly = decode('67Cp7IahIOyXhuydtCDssYTtjIXssL3rp4wg7IKs7Jqp');
/** "유동 로그인 숨기기" */
let str_settings_hideLogin = decode('7Jyg64-ZIOuhnOq3uOyduCDsiKjquLDquLA.');
/** "채팅" */
let str_chat = decode('7LGE7YyF');
/** "삭제되었거나 존재하지 않는 게시물입니다." */
let str_nullContent = decode('7IKt7KCc65CY7JeI6rGw64KYIOyhtOyerO2VmOyngCDslYrripQg6rKM7Iuc66y87J6F64uI64ukLg..');
/** "공지" */
let str_notice = decode('6rO17KeA');
/** "설문" */
let str_survey = decode('7ISk66y4');
/** "라이브챗 규칙" */
// let str_rulePostTitle = decode('65287J2067iM7LGXIOq3nOy5mQ..');
/** "채팅방에 오신 것을 환영합니다!" */
let str_greeting = decode('7LGE7YyF67Cp7JeQIOyYpOyLoCDqsoPsnYQg7ZmY7JiB7ZWp64uI64ukIQ..');
/** "알 수 없는 오류" */
let str_error_generic = decode('7JWMIOyImCDsl4bripQg7Jik66WY');
/** "알 수 없는 오류 (block_key)" */
let str_error_blockKey = decode('7JWMIOyImCDsl4bripQg7Jik66WYIChibG9ja19rZXkp');
/** "잘못된 요청입니다." */
let stR_error_badRequest = decode('7J6Y66q765CcIOyalOyyreyeheuLiOuLpC4.');
/** "트위치에서" */
// let str_onTwitch = decode('7Yq47JyE7LmY7JeQ7ISc');
/** `<p><div class="yt_thum_box"><div class="yt_movie"><embed src="https://www.youtube.com/v/` */
// let str_linkYoutube_part_1 = decode('PHA-PGRpdiBjbGFzcz0ieXRfdGh1bV9ib3giPjxkaXYgY2xhc3M9Inl0X21vdmllIj48ZW1iZWQgc3JjPSJodHRwczovL3d3dy55b3V0dWJlLmNvbS92Lw..');
/** `?version=3" type="application/x-shockwave-flash" width="560" height="315" allowfullscreen="true"></div><a class="yt_link" href="` */
// let str_linkYoutube_part_2 = decode('P3ZlcnNpb249MyIgdHlwZT0iYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2giIHdpZHRoPSI1NjAiIGhlaWdodD0iMzE1IiBhbGxvd2Z1bGxzY3JlZW49InRydWUiPjwvZGl2PjxhIGNsYXNzPSJ5dF9saW5rIiBocmVmPSI.');
/** `" target="_blank">` */
// let str_linkYoutube_part_3 = decode('IiB0YXJnZXQ9Il9ibGFuayI-');
/** `</a></div><p>` */
// let str_linkYoutube_part_4 = decode('PC9hPjwvZGl2PjxwPg..');
/** ` 시청 중: <a href="` */
// let str_linkGeneral_part_2 = decode('IOyLnOyyrSDspJE6IDxhIGhyZWY9Ig..');
/** "지금" */
// let str_now = decode('7KeA6riI');s
/** "이미지가 너무 큽니다." */
let str_imageTooBig = decode('7J2066-47KeA6rCAIOuEiOustCDtgb3ri4jri6Qu');
/** "이미지를 바꾸시겠습니까?" */
let str_replaceImage = decode('7J2066-47KeA66W8IOuwlOq-uOyLnOqyoOyKteuLiOq5jD8.');
/** "이미지는 한 번에 하나씩 올릴 수 있습니다." */
let str_imageOver = decode('7J2066-47KeA64qUIO2VnCDrsojsl5Ag7ZWY64KY7JSpIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "바꾸기" */
let str_replace = decode('67CU6r646riw');
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
// let str_tooltip_upload = decode('7J2066-47KeAIOyyqOu2gA..');
/** "드래그 앤 드롭으로 이미지 올리기" */
let str_dragAndDrop = decode('65Oc656Y6re4IOyVpCDrk5zroa3snLzroZwg7J2066-47KeAIOyYrOumrOq4sA..');
/** "새로운 이미지로 변경" */
// let str_reloadCaptcha = decode('7IOI66Gc7Jq0IOydtOuvuOyngOuhnCDrs4Dqsr0.');
/** "이미지만 올릴 수 있습니다." */
let str_notImage = decode('7J2066-47KeA66eMIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화된 갤러리입니다." */
let str_chatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQnCDqsKTrn6zrpqzsnoXri4jri6Qu');
/** `         ` */
let str_blanks = decode('4oCA4oCB4oCE4oCF4oCG4oCH4oCI4oCJ4oCK');
/** "댓글수 하이라이트" */
let str_settings_commentHighlight = decode('64yT6riA7IiYIO2VmOydtOudvOydtO2KuA..');
/** "현재 브라우저에서는 설정이 저장되지 않습니다." */
// let str_noStorageSupport = decode('7ZiE7J6sIOu4jOudvOyasOyggOyXkOyEnOuKlCDshKTsoJXsnbQg7KCA7J6l65CY7KeAIOyViuyKteuLiOuLpC4.');
/** "이미 시청중입니다." */
// let str_watchingAlready = decode('7J2066-4IOyLnOyyreykkeyeheuLiOuLpC4.');
/** "영상 추가" */
let str_addVideo = decode('7JiB7IOBIOy2lOqwgA..');
/** "배치 바꾸기" */
let str_relocate = decode('67Cw7LmYIOuwlOq-uOq4sA..');
/** "배치 완료!" */
let str_relocateDone = decode('67Cw7LmYIOyZhOujjCE.');
/** "드래그" */
// let str_drag = decode('65Oc656Y6re4');
/** "모바일 환경에서는 권장하지 않습니다.\n그래도 사용하시겠습니까?" */
let str_askMado = decode('66qo67CU7J28IO2ZmOqyveyXkOyEnOuKlCDqtozsnqXtlZjsp4Ag7JWK7Iq164uI64ukLgrqt7jrnpjrj4Qg7IKs7Jqp7ZWY7Iuc6rKg7Iq164uI6rmMPw..');

//#endregion

//#region 전역 상수

let doc = document;
let body = doc.body;
let head = doc.head;
let storage = localStorage ?? null;

let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

let intervalPresets = [ 4000, 2500 ];
let minInterval = 2000; 
let maxPost = 200;
let maxCommentOnPage = 20;
let maxOpened = 5;
let commentSignitureLength = 8;
let highlightDuration = 500;

// 자주 쓰이는 함수 이름
let getElementById = 'getElementById';
let getElementsByClassName = 'getElementsByClassName';
let getElementsByName = 'getElementsByName';
let getElementsByTagName = 'getElementsByTagName';
let querySelector = 'querySelector';
let innerText = 'innerText';
let onclick = 'onclick';

// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onerrorFuncName = 'ondcconerror';

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 자주 쓰이는 HTML 태그 이름
let divString = 'div';
let spanString = 'span';

// captcha
let grecaptcha = 'g-recaptcha-response';
let grecaptchaBlock = '6Lc-Fr0UAAAAAOdqLYqPy53MxlRMIXpNXFvBliwI';

// 자주쓰는 웹폰트 아이콘
let sub = 'subdirectory_arrow_right';
let arrow = 'arrow_downward';

function newRegex(string, g = true) {
    string = string.r('?', '\\?');
    if (g) return new RegExp(string, 'g');
    return new RegExp(string);
}

// 자주 쓰이는 정규식
let regexDccon = /:([^,:]+), ([^,:]+):/g; // regexDccon
let regexDcconId = /dccon\.php\?no=([a-z0-9]+)/; // regexDcconId
let regexTwitch = /twitch.tv\/(\?channel=)?([A-Za-z0-9_-]+)/;
let regexTwitchLink = /href="(https?:\/\/)?(www.)?twitch.tv\/([^"]+)"/g;
let regexYoutube = /youtu(.be\/|be.com\/watch\?v=|be.com\/v\/|be.com\/shorts\/|be.com\/live\/|be.com\/embed\/)([A-Za-z0-9_-]+)/;
let regexYoutubeLink = /href="(https?:\/\/)?(www.)?youtu(.be\/|be.com\/watch\?v=|be.com\/v\/|be.com\/shorts\/|be.com\/live\/)([^"]+)"/g;

// 자주 쓰이는 URL
let https = 'https://';
let origin = 'gall.dcinside.com/';
let host = https + origin;
let helpUrl = https +'github.com/Joh1ah/dclivechat';
let boardForms = '/board/forms';
let articleSubmit = boardForms + '/article_submit';
let commentSubmit = boardForms + '/comment_submit';
let dcconInsertIcon = '/dccon/insert_icon';

// 자주 쓰이는 함수
let parse = Number.parseInt;
let request = requestAnimationFrame;
let timeout = setTimeout;
let encode = encodeURIComponent;
let toChar = String.fromCharCode;
let getNow = Date.now;

// 로깅용
let initTime = getNow();

//#endregion

//#region 전역 변수

// 갤러리 관련
let gallId = '';
let gallType = '';
let rKey = '';
let gallNum = '';
let bMobile = false;
let bMinor = true;
let bMini = false;
let bLogin = false;
let bWriteUnavailable = false;

// 영상 관련
let bMado = true;

// 로그인 관련
let userNickname = '';
let userId = '';
let userImg = '';
let bUserFix = false;

// 도배방지 문자 관련
let bCaptcha = false;
let bCaptchaComment = false;

// 댓글 관련
let targetPostNum = 0;
let targetCommentNum = 0;
let lastSigniture = '';

// 채팅창 관련
let lastUpdate = 0;
let interval = intervalPresets[0];
let lastNum = 0;
let posting = false;
let newPostCount = 0;
let bBlockPullDownChange = true;
let bPullDown = true;
let firstUpdate = true;
let bGreeted = false;

// (유동) 로그인 입력란 관련
let bFormExpanded = true;

// 미니갤 관련
let anonymousNickname = '';

// hoist
let onLoginChecked;
let renderUploadImage;
let setTarget;
let pullDown;
let togglePullDown;
let toggleExpander;

// 전역 변수 매크로
let isPostingWrite = () => (targetPostNum == 0);
let isCaptcha = () => {
    if (isPostingWrite()) return bCaptcha;
    return bCaptchaComment;
};

//#endregion

let logDiv;

//#region 유틸리티 함수

let debug = (...any) => {
    let string = '[' + ((getNow() - initTime) / 1000).toFixed(2) + ']';
    console.log(string, ...any);
    if (logDiv) {
        for (let item of any) {
            string += ' ' + (item.toString?.() ?? '');
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
let escapeHtml = (unsafe) => {
    return unsafe
        .r(/&/g, "&amp;")
        .r(/</g, "&lt;")
        .r(/>/g, "&gt;");
};
let trimHtml = (string) => {
    return string
        .r(/\n/g, '')
        .r(/\r/g, '')
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
let blanks = str_blanks.split('');
let randomBlanks = (count) => {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += blanks[randomInt(0, blanks.length - 1)];
    }
    return output;
}

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
let setStyleVariable = (propertyName, value) => doc.documentElement.style.setProperty(propertyName, value);

let executeCaptcha = (action) => {
    let { r, p } = initPromise();
    grecaptcha.ready(() => grecaptcha.execute(grecaptchaBlock, {action: action}).then(token => r(token)).catch(e => debug(e), r('')));
    return p;
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
                fixed--;
                thres *= 10;
            }
        }
        unitDevide *= bytesKb;
        unitBytes *= bytesKb;
        unitIndex++;
    }
};

let parser = new DOMParser();
let parseHtml = (text) => {
    try {
        return parser.parseFromString(text, 'text/html');
    } catch (e) {
        debug(e);
        return null;
    }
}

// UI
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
}
let createIcon = (parent, name, ...classes) => {
    return createElement(spanString, parent, { [innerText]: name }, 'material-symbols-outlined.icon', ...classes);
};
let clearChildren = (element) => {
    while(element.lastChild) element.removeChild(element.lastChild);
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
let enterAsClick = (input, submit, bShift = false) => {
    input.onkeypress = (ev) => {
        if (ev.keyCode != 13) return;
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

// 기타 매크로
let testFix = (string) => /fix/.test(string);

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
    let escaped = escapeHtml(html);
    let r = escaped.match(/var _r = _d\('([A-Za-z0-9+=\/]+)'\)/);
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

//#endregion

//#region Fetch 함수

// GET
let getAsText = async (url, options = {}) => {
    if (!options.credentials) options.credentials = 'include';
    let res = await fetch(url, options).catch(debug);
    if (!res || !res.ok) return '';
    return res.text().catch(debug);
};
let getAsDocument = async (url) => {
    let text = await getAsText(url, { referrer: getListUrl() }).catch(debug);
    return text ? parseHtml(text) : null;
};

// POST
let postAsText = async(url, options = {}, body = '') => {
    if (!options.credentials) options.credentials = 'include';
    if (!options.method) options.method = 'POST';
    if (!options.mode) options.mode = 'cors';
    if (!options.body) options.body = body;
    let res = await fetch(url, options).catch(debug);
    if (!res || !res.ok) return '';
    return await res.text().catch(debug);
}
// XMLHttpRequest
let formDataHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
};
// 글 쓰기
let postWrite = async (url, ...datas) => {
    let body = serializeForm(...datas);
    let options = {
        headers: formDataHeaders,
        referrer: getWriteUrl(),
    };
    return postAsText(url, options, body).catch(debug);
}
// 댓글 쓰기
let postComment = async (num, url, ...datas) => {
    let body = serializeForm(...datas);
    let options = {
        headers: formDataHeaders,
        referrer: getPostUrl(num),
    }
    return postAsText(url, options, body).catch(debug);
}
// 디시콘 패키지 정보 얻기
let postDcconPackageDetail = async (code) => {
    let url = host + 'dccon/package_detail';
    let options = { headers: formDataHeaders };
    let body = serializeForm({
        ci_t: getCookie('ci_c'),
        package_idx: '',
        code: code
    });
    let res = await postAsText(url, options, body).catch(debug);
    if (!res) return null;
    try {
        return JSON.parse(res);
    } catch (e) {
        debug(e);
        return null;
    }
}
// 이미지 올리기
let postImage = async (file) => {
    let data = {
        r_key : rKey,
        gall_id: gallId,
        gall_no: gallNum,
        post_no: '',
        upload_ing: 'N',
        _GALLTYPE_: gallType,
    };
    try {
        let body = serializeMultipart(data, file);
        let options = {
            credentials: 'same-origin',
            referrer: host,
            referrerPolicy: 'strict-origin-when-cross-origin',
        };
        let url = https + 'upimg.dcinside.com/upimg_file.php?id=' + gallId + '&r_key=' + rKey;
        let res = await postAsText(url, options, body).catch(debug);
        if (!res) return null;
        return JSON.parse(res)['files'][0] ?? null;
    } catch (e) {
        debug(e);
        return null;
    }
}
// 올린 이미지 취소하기
let postDeleteImage = (imgNum) => {
    let data = {
        id: gallId,
        r_key: rKey,
        temp_no: imgNum,
    };
    let body = serializeForm(data);
    let options = {
        headers: formDataHeaders,
        credentials: 'same-origin',
        referrer: host +'/upload/image?xssDomain=dcinside.com',
        referrerPolicy: 'strict-origin-when-cross-origin',
    };
    let url = getBoardUrlPlain() + 'temp/upimg_pop_del';
    postAsText(url, options, body).catch(debug).then(res => (res != 'true') && openAlert(str_deleteFail));
}

//#endregion

//#region 디시콘 함수

let dcconSavedInfo = {};
let dcconSavedInfoReversed = {};
let dcconSavedInfoImgCode = {};
let dcconSavedInfoIdx = {};

let onPackageDetail;
let loadingDccon = false;

let pending = [];

let _loadDcconDetail = async () => {
    if (!pending.length) return loadingDccon = false;
    let array = pending.shift();
    let code = array[0];
    let r = array[1];
    if (dcconSavedInfoReversed[code] != undefined) return r(), timeout(_loadDcconDetail, 1); // proceed to next
    let json = await postDcconPackageDetail(code).catch(debug);
    if (!json) return r();
    let packageName = json['info']['title'];
    let packageIdx = json['info']['package_idx'];
    let dccons = json['detail'];
    let packageInfo = {};
    for (let dccon of dccons) {
        let dcconName = dccon['title'];
        let path = dccon['path'];
        dcconSavedInfoReversed[path] = [ packageName, dcconName ];
        dcconSavedInfoIdx[path] = [ packageIdx ];
        packageInfo[dcconName] = path;
    }
    dcconSavedInfo[packageName] = packageInfo;
    let listImgCode = json['info']['list_img_path'];
    dcconSavedInfoImgCode[packageName] = listImgCode;
    r(), timeout(_loadDcconDetail, 100);
}
let loadDcconDetail = (code) => {
    let { r, p } = initPromise();
    pending.push([code, r]);
    if (!loadingDccon) {
        loadingDccon = true;
        _loadDcconDetail();
    }
    return p;
}

let getDcconUrl = (packageName, dcconName) => {
    if (dcconSavedInfo[packageName] == undefined) return null;
    let package = dcconSavedInfo[packageName];
    if (package[dcconName] == undefined) return null;
    return getDcconUrlFromCode(package[dcconName]);
}
let getDcconListImgUrl = (packageName) => {
    if (dcconSavedInfoImgCode[packageName] == undefined) return null;
    return getDcconUrlFromCode(dcconSavedInfoImgCode[packageName]);
}
let getDcconUrlFromCode = (code) => https + 'dcimg5.dcinside.com/dccon.php?no=' + code;
let getDcconDetailSync = (code) => dcconSavedInfoReversed[code];
let getDcconIdxSync = (code) => dcconSavedInfoIdx[code];

let _loadDcconList = async (target, page) => {
    let jsonString = await postWrite( host + 'dccon/lists', {
        ci_t: getCookie('ci_c'),
        target: target,
        page: page
    }).catch(debug);
    if (!jsonString) return 0;
    if (jsonString == 'not_login') return 0;
    if (jsonString.substring(0, 1) != '{') return 0;
    let json;
    try {
        json = JSON.parse(jsonString);
    } catch (e) {
        debug(e);
        return {};
    }
    let list = json['list'];
    let maxPage = json['max_page'];
    if (target == 'recent') { // target: recent
        let { r, p } = initPromise();
        let result = [];
        timeout(async() => {
            for (let item of list) {
                let match = item['list_img'].match(regexDcconId);
                if (!match) continue;
                await loadDcconDetail(match[1]).catch(debug);
                result.push(match[1]);
            }
            r();
        }, 1);
        onPackageDetail(str_recently, result, p);
    } else if (target == 'icon') { // target: icon
        for (let item of list) {
            let { r, p } = initPromise();
            let dcconList = [];
            let packageName = item['title'];
            let packageDetail = item['detail'];
            timeout(async()=>{
                for (let dccon of packageDetail) {
                    let detailIdx = dccon['detail_idx'];
                    let match = dccon['list_img'].match(regexDcconId);
                    if (!match) continue;
                    let code = match[1];
                    await loadDcconDetail(code).catch(debug);
                    let array = getDcconIdxSync(code);
                    if (array && array.length == 1) array.push(detailIdx);
                    dcconList.push(match[1]);
                }
                r();
            }, 1);
            onPackageDetail(packageName, dcconList, p);
            await p;
        }
        return maxPage;
    }
}
let loadDcconList = async (target) => {
    if (target == 'recent') {
        await _loadDcconList(target, 0);
    } else if (target == 'icon') {
        let maxPage = Math.min(await _loadDcconList(target, 0), 20);
        for (let page = 1; maxPage >= page; page++) {
            await _loadDcconList(target, page);
        }
    }
}
let insertDccon = async (code) => {
    let array = getDcconIdxSync(code);
    let packageIdx = array[0];
    let detailIdx = array[1];
    let data = {
        id: gallId,
        no: undefined,
        package_idx: packageIdx,
        detail_idx: detailIdx,
        ci_t: getCookie('ci_c'),
        input_type: 'write',
        t_vch2: undefined,
        t_vch2_chk: undefined,
        c_gall_id: gallId,
        c_gall_no: undefined,
        [grecaptcha]: '',
        check_6: undefined,
        check_7: undefined,
        check_8: undefined,
        _GALLTYPE_: gallType,
    };
    let res = await postWrite(dcconInsertIcon, data);
    if (res) {
        let splits = res.split('||');
        if (splits.length > 2 && splits[2] == 'v3') {
            data[grecaptcha] = await executeCaptcha('insert_icon');
            await postWrite(dcconInsertIcon, data);
        }
    }
    populatePackage('recent').catch(debug);
}
let insertDcconComment = async (code, num) => {
    let array = getDcconIdxSync(code);
    let packageIdx = array[0];
    let detailIdx = array[1];
    let nickname = getNicknameV2();
    if (!nickname.length) return openAlert(str_nullNickname);
    let commentFormData = commentFormDatas[num];
    let data = {
        id: gallId,
        no: num,
        package_idx: packageIdx,
        detail_idx: detailIdx,
        name: nickname,
        ci_t: getCookie('ci_c'),
        input_type: 'comment',
        t_vch2: commentFormData.t_vch2,
        t_vch2_chk: commentFormData.t_vch2_chk,
        c_gall_id: gallId,
        c_gall_no: num,
        [grecaptcha]: '',
        check_6: commentFormData.check_6,
        check_7: commentFormData.check_7,
        check_8: commentFormData.check_8,
        _GALLTYPE_: gallType,
    };
    let additionalFormData = {};
    if (!bLogin) {
        let password = getPassword();
        if (password.length < 2) return openAlert(str_shortPassword);
        additionalFormData.password = password;
    }
    if (isCaptcha()) {
        let captcha = getCaptcha();
        if (!captcha.length) return openAlert(str_nullCode);
        additionalFormData.code = captcha;
    }
    if (targetCommentNum) {
        additionalFormData.c_no = targetCommentNum;
    }
    let res = await postWrite(dcconInsertIcon, data, additionalFormData);
    if (res == 'ok') {
        onPostCommentCountChanged[num](-1, true);
        setTarget(0);
    } else if (DEBUG) debug('insert dccon comment fail', res);
    timeout(renderInputCaptcha, 500);
    populatePackage('recent');
    return;
}

let replaceDccon = (element, regex, url) => {
    let img = `\<img class="dccon" src="${url}"\>`;
    element.innerHTML = element.innerHTML.r(regex, img);
}
// 디시콘에서 호출하는 기존 스크립트 차단
let neutralizeDccon = (string) => {
    return string
        .r(/onmousedown="[^"]+"/, '')
        .r(/onerror="[^"]+"/, `onerror="document.${onerrorFuncName}(this.parentNode)"`) // 
        .r(/class="written_dccon"/g, 'class="d"') ;
}
doc[onerrorFuncName] = (videoElement) => {
    let src = videoElement.getAttribute('data-src');
    videoElement.insertAdjacentElement('beforebegin', createElement('img', null, { src: src }, 'd'));
    addClass(videoElement, hidden);
}

//#endregion

//#region 기타 함수

// 하이퍼링크를 앱에서 열리는 링크로 대체
let onclickFunc = (encoded) => 'onclick="document.' + openLinkFuncName + '(\'' + encoded + '\')"';
let _replaceLink = (string, regex) => {
    let matches = string.match(regex);
    if (matches) {
        if (DEBUG) debug('replacing', string);
        for (let match of matches) {
            string = string.r(newRegex(match), onclickFunc(encode(match.split('"')[1])));
        }
        if (DEBUG) debug('replaced', string);
    }
    return string;
}
let replaceLink = (string) => {
    string = _replaceLink(string, regexTwitchLink);
    string = _replaceLink(string, regexYoutubeLink);
    return string;
}

let replaceEmbed = (string) => {
    let matches = string.matchAll(/<embed src="([^\?"]*)([^"]*)"([^>]+)>/g);
    for (let match of matches) {
        if (DEBUG) debug('replacing', string);
        string = string.r(match[0], `<iframe src="${match[1] + (match[2] ? match[2] + '&' : '?')}enablejsapi=1"${match[3]}></iframe>`);
        if (DEBUG) debug('replaced', string);
    }
    return string;
}

let setIntervalIndex = (index) => interval = intervalPresets[index];

let updateFormData = (html, data) => {
    for (let id in data) {
        let value = html[getElementById](id);
        if (value) data[id] = value.value;
        else {
            value = html[getElementsByName](id);
            if (value && value.length) data[id] = value[0].value;
        }
    }
    if (!gallType && formData._GALLTYPE_) gallType = formData._GALLTYPE_;
    if (!gallNum && formData.gallery_no) gallNum = formData.gallery_no;
    rKey = formData.r_key;
};

//#endregion

// #####################################################################
// #################### INIT ###########################################
// #####################################################################
//#region 

if (DEBUG) debug('initializing');

let onInvalidPage = (reason) => {
    alert(reason);
    return 0;
};
let validateLocation = (url) => {
    let match = url.match(/^https?:\/\/(gall|m).dcinside.com\/([^\n]+)$/);
    if (!match) return onInvalidPage(str_noGalleryUrl);
    let idMatch = null;
    if (match[1] == 'gall') {
        idMatch = match[2].match(/id=([A-Za-z0-9_]+)($|\&|#)/);
        bMinor = /^mgallery/.test(match[2]);
        bMini = /^mini/.test(match[2]);
    } else {
        bMobile = true;
        idMatch = match[2].match(/^board\/([A-Za-z0-9_]+)($|\?|\/|#)/);
        bMinor = (doc[getElementsByClassName]('micon').length > 0);
        bMini = (doc[getElementsByClassName]('mnicon').length > 0)
    }
    if (!idMatch || !idMatch.length) return onInvalidPage(str_noGalleryPageUrl);
    gallId = idMatch[1];
    return 1;
}
if (!validateLocation(location.href)) return;

// 모바일 페이지에서 PC 페이지로 넘어가도록 쿠키 변경
doc.cookie = 'm_dcinside_web=done; path=/; domain=.dcinside.com';

// 모바일 뷰포트 변경
createElement('meta', head, { name:'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0' });

// 미니갤러리 지원 : 완료
// if (bMini) return onInvalidPage(str_noSupportMini);

if (bMobile) {
    onInvalidPage(str_noSupportMobile);
    return location.href = getListUrl();
}

// DC 라이브챗이 이미 실행중인지 확인
if (doc[appName]) return doc[appName]();
doc[appName] = () => openAlert(str_runningAlready);

doc.title = str_dclivechat + ' :: ' + doc.title;

let _saveData = {};
let onApplyFunc = {};
let saveOptions = (override) => {
    let string = JSON.stringify(override ?? _saveData);
    storage?.setItem(appName, string);
};
let _applyOption = (optionKey, bool) => {
    _saveData[optionKey] = bool;
    onApplyFunc[optionKey]?.(bool);
};
let applyOption = (optionKey, bool) => {
    _applyOption(optionKey, bool);
    saveOptions();
};
let getOption = (optionKey) => {
    return _saveData[optionKey] ?? null;
}
let loadOptions = () => {
    let string = storage?.getItem(appName) ?? '';
    if (!string) return;
    _saveData = JSON.parse(string);
    for (let key in _saveData) applyOption(key, _saveData[key]);
};
let clearSaveData = () => saveOptions({});
// 로드는 초기화 마지막 순서로

let checkLoginStatus = async() => {
    let html = await getAsDocument(getListUrl()).catch(debug);
    let loginBox = html[getElementById]('login_box');
    if (loginBox) {
        let loginButtons = loginBox[getElementsByClassName]('btn_inout');
        if (loginButtons.length > 0) {
            let string = loginButtons[0].innerText;
            if (string == str_logout) bLogin = true;
            if (DEBUG) debug('login', bLogin);
        }
        let nickname = loginBox[querySelector]('strong.nickname');
        if (nickname) userNickname = nickname.innerText;
        let nikcon = loginBox[querySelector]('strong.writer_nikcon');
        if (nikcon) {
            let match = nikcon.getAttribute('onclick').match(/\/([a-zA-Z0-9_-]+)'/);
            if (match) userId = match[1];
            let img = nikcon[getElementsByTagName]('img')[0];
            userImg = img.src;
            bUserFix = testFix(img.src);
        }
    }
    onLoginChecked?.();
}
checkLoginStatus();

// 기존 화면 제거
clearChildren(body);

// 스타일 적용
let stylesheet = STYLESHEET // defined when building
    .r(/_w/g, 'width')
    .r(/_h/g, 'height')
    .r(/_b/g, 'background')
    .r(/_m/g, 'margin')
    .r(/_p/g, 'padding')
    .r(/_d/g, 'display')
    .r(/_i/g, '!important')
    .r(/_P/g, 'position')
    .r(/_T/g, 'top')
    .r(/_B/g, 'bottom')
    .r(/_L/g, 'left')
    .r(/_R/g, 'right')
createElement('style', head, { [innerText]: stylesheet });
createElement('link', head, {
    rel: 'stylesheet',
    href: https + 'fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
});

// load grecaptcha
createElement('script', body, {
    onload: () => {
        if (grecaptcha == undefined) return debug('no captcha');
        else debug('captcha loaded');
    },
    type: 'text/javascript',
    src: https + 'www.google.com/recaptcha/api.js?render=' + grecaptchaBlock,
});

//#endregion

// #####################################################################
// ####################  UI  ###########################################
// #####################################################################
//#region 

if (DEBUG) debug('ui');

logDiv = createElement(divString, body, 'log', hidden);

/**
 * NOTE:
 * ios 사파리 등 일부 브라우저는
 * 뷰포트에는 포함되지만 실제로 표시되지는 않는 공간이 있음
 */
let fixedBottom = createElement(divString, body, 'x');
let setMarginBottom = (num) => setStyleVariable('--mb', num + 'px');
setMarginBottom(0);
let requested = false;
let onResize = () => {
    let bottomY = fixedBottom.offsetTop;
    let htmlHeight = body.clientHeight;
    let marginBottom = htmlHeight - bottomY;
    setMarginBottom(marginBottom);
    pullDown(true);
    requested = false;
}
onresize = () => {
    if (requested) return;
    requested = true;
    request(onResize);
};
scrollToTop();

// 첫 글 목록이 로드되기 전에 스크롤 고정이 풀리는 문제를 강제로 막음
timeout(() => {
    scrollToTop();
    bPullDown = true;
    pullDown(true);
    timeout(() => {
        pullDown(true);
        bBlockPullDownChange = false;
    }, 400);
    onResize();
}, 400);

let dropArea = createElement(divString, body, 'o');
createElement(divString, dropArea, { [innerText]: str_dragAndDrop } , 'drop');

let overlay = createElement(divString, body, 'o');
let renderOverlay = () => {
    if (overlay.lastChild) addClass(overlay, 'wait');
    else removeClass(overlay, 'wait');
}

let openModal = (info) => {
    let options = info.options ?? [{ text: str_comfirm, [onclick]: (close) => close() }];
    let modal = createElement(divString, overlay, 'modal');
    if (info.title) createElement(divString, modal, { [innerText]: info.title }, 'tt');
    if (info.desc) createElement(divString, modal ,{ [innerText]: info.desc }, 'desc');
    let closeModal = () => {
        addClass(modal, hidden);
        modal.remove();
        renderOverlay();
    }
    if (info.close) {
        let close = createElement('a', modal, { [onclick]: closeModal }, 'b.close.abs-tr');
        createIcon(close, 'close');
    } 
    let optionContainer = createElement(divString, modal, 'opts.fr');
    for (let option of options) {
        let bIcon = (option.icon != undefined);
        let optionDiv = createElement('a', optionContainer, {
            [innerText]: bIcon ? '' : (option.text ?? option),
            [onclick]: option.onclick ? () => option.onclick(closeModal) : closeModal,
        }, 'sb.r');
        if (bIcon) {
            createIcon(optionDiv, option.icon);
            createElement(spanString, optionDiv, { [innerText]: option.text });
        }
    }
    renderOverlay();
    return modal;
}
let openAlert = (desc) => openModal({ desc: desc });

let main = createElement('main', body);

//#endregion

// #####################################################################
// ####################  VIDEO  ########################################
// #####################################################################
//#region 

if (DEBUG) debug('video');

let videoContainer = createElement(divString, main, 'video');

// 마도 지원 - 20230119
let menu = createElement(divString, videoContainer, 'menu');
let videoMain = createElement(divString, videoContainer, 'main');

let addVideoButton = createElement('a', menu, { [onclick]: () => {
    addClass(videoMain, 'go');
    removeClass(videoInputContainer, hidden);
} }, 'b');
createIcon(addVideoButton, 'add');
createElement(spanString, addVideoButton, { [innerText]: str_addVideo });

let relocating = false;
let relocateVideoButton = createElement('a', menu, 'b', disabled);
let relocateVideoButtonIcon = createIcon(relocateVideoButton, 'pan_tool_alt');
let relocateVideoButtonSpan = createElement(spanString, relocateVideoButton, { [innerText]: str_relocate });
relocateVideoButton.onclick = () => {
    relocating = !relocating;
    if (relocating) {
        addClass(relocateVideoButton, '.t');
        relocateVideoButtonIcon[innerText] = 'check';
        relocateVideoButtonSpan[innerText] = str_relocateDone;
        addClass(videoMain, 'rlc');
    } else {
        removeClass(relocateVideoButton, '.t');
        relocateVideoButtonIcon[innerText] = 'pan_tool_alt';
        relocateVideoButtonSpan[innerText] = str_relocate;
        removeClass(videoMain, 'rlc');
    }
};

let videoInputContainer = createElement(divString, videoMain, 'p.fr');
let videoInputCloseButton = createElement('a', videoInputContainer, {
    [onclick]: () => {
        removeClass(videoMain, 'go');
        addClass(videoInputContainer, hidden);
    } }, 'b.abs-tr', hidden);
createIcon(videoInputCloseButton, 'close');

let videoInput = createElement('textarea', videoInputContainer, {
    placeholder: str_placeholderVideo,
}, 'src');
let videoSubmit = createElement('a', videoInputContainer, {
    // [innerText]: str_comfirm,
    [onclick]: () => addVideo(videoInput.value)
}, 'sb');
createElement(spanString, videoSubmit, {
    [innerText]: str_comfirm,
});
enterAsClick(videoInput, videoSubmit);

let loadedVideoUrls = [];
let videoDivs = [];
let renderRow = () => {
    if (!bMado) {
        let newLength = Math.min(videoDivs.length, 1);
        setStyleVariable('--mh', '0px');
        loadedVideoUrls.length = newLength;
        for (let i = 1; i < videoDivs.length; i++) {
            videoDivs[i]?.remove();
        }
        videoDivs.length = newLength;
        if (relocating) relocateVideoButton.click();
    } else setStyleVariable('--mh', '50px');
    addClass(relocateVideoButton, disabled);
    removeClass(relocateVideoButton, '.t');
    removeClass(videoMain, 'go');
    if (!videoDivs.length) {
        if (relocating) relocateVideoButton.click();
        addClass(videoInputCloseButton, hidden);
        removeClass(videoInputContainer, hidden);
        return;
    }
    removeClass(relocateVideoButton, disabled);
    removeClass(videoInputCloseButton, hidden);
    addClass(videoInputContainer, hidden);
    if (videoDivs.length == 1) setStyleVariable('--r2t', '0px');
    else setStyleVariable('--r2t', '50%');
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
    setStyleVariable('--rw1', r1cnt);
    setStyleVariable('--rw2', r2cnt);
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
    if (!url) return openAlert(str_noValidUrl);
    if (url == 'show log') return removeClass(logDiv, hidden);
    if (url == 'clear options') return clearSaveData();
    if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url))
        return openAlert(str_noValidUrl);
    _addVideo(url);
    renderRow();
}

// 글 본문에 링크가 있다면
// 영상 화면에 표시하는 전역 함수를 추가
doc[openLinkFuncName] = (string) => {
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
            text: str_comfirm,
            [onclick]: (close) => {
                addVideo(decoded);
                close();
            }
        }],
        close: true,
    });
};

let removeVideoPlayer = (url, videoDiv) => {
    splice(loadedVideoUrls, url);
    splice(videoDivs, videoDiv);
    saveOptions();
    videoDiv.remove();
    renderRow();
}

let addVideoTwitch = (id) => {
    let src = https + 'player.twitch.tv/?channel=' + id + '&parent=' + (bMobile ? 'm' : 'gall') + '.dcinside.com';
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
let addVideoIframe = (url, options = null) => {
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
    let videoDiv = createElement(divString, videoMain);
    videoDivs.push(videoDiv);
    index = () => videoDivs.indexOf(videoDiv);
    let onDown = (x, y) => {
        if (draggingDiv) return;
        addClass(videoDiv, 'drg');
        offsetX = () => videoDiv.getClientRects()[0].width / 2;
        offsetY = () => (videoDiv.getClientRects()[0].height / 2) + 50;
        setStyleVariable('--mx', (x - offsetX()) + 'px');
        setStyleVariable('--my', (y - offsetY()) + 'px');
        draggingDiv = videoDiv;
        draggingUrl = url;
    };
    let onMove = (x, y) => {
        request(() => {
            setStyleVariable('--mx', (x - offsetX()) + 'px');
            setStyleVariable('--my', (y - offsetY()) + 'px');
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
    let videoDrag = createElement(divString, videoDiv, {
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
    let video = createElement('iframe', videoDiv, options);
    renderRow();
    video.src = url;
    createIcon(createElement('a', videoDiv, { [onclick]: () => removeVideoPlayer(url, videoDiv) }, 'close.b.abs-tr'), 'close');
}

// 마지막에 시청하던 링크를 갤러리별로 저장 및 로드
onApplyFunc['videos-' + gallId] = (videos) => {
    for (let url of videos) if (!loadedVideoUrls.includes(url)) _addVideo(url);
}

//#endregion

// #####################################################################
// ####################  CHAT  #########################################
// #####################################################################
//#region 

if (DEBUG) debug('chat');

let openedList = [];
let checkMaxOpened = () => {
    if (openedList.length > maxOpened) openedList.shift().click();
};

// 오른쪽 또는 하단에 표시될 채팅창 div
let chatContainer = createElement(divString, main, 'chat');
let header = createElement(divString, chatContainer, 'hd');
createElement(spanString, header, { [innerText]: str_chatHeader }, 'h');
createIcon(createElement('a', header, { href: helpUrl, target: '_blank' }, 'help.b'), 'help');
let chatViewport = createElement(divString, chatContainer, 'vp');
let chatPage = createElement(divString, chatViewport, 'page');
let chatBottomContainer = createElement(divString, chatContainer, 'cb-c');

//20230117
let closeAllButton = createElement('a', chatBottomContainer, {
    [onclick]: () => { while(openedList.length) openedList.shift().click(); }
}, 'r.b.ca.right.sd');
createIcon(closeAllButton, 'close');
let renderCloseAllButton = () => {
    if (openedList.length) removeClass(closeAllButton, 'sd');
    else addClass(closeAllButton, 'sd');
};

let listeningFunc = {};
let listeningPost = {};
let notificationList = [];
let notifyButton = createElement('a', chatBottomContainer, {
    [onclick]: () => {
        if (!notificationList.length) return;
        let list = notificationList.shift();
        for (let item of list[1]) {
            listeningFunc[list[0]](item);
        }
        let temp = createElement('a', null, { href: '#' + list[0] });
        temp.click();
        temp.remove();
        renderNotify();
    }
}, 'r.b.nt.right.sd');
createIcon(notifyButton, 'notifications');
let notifyCountSpan = createElement(spanString, notifyButton, 'cnt.abs-tl.fade');
let renderNotify = () => {
    if (!notificationList.length) {
        addClass(notifyButton, 'sd');
        addClass(notifyCountSpan, 'fade');
    } else {
        removeClass(notifyButton, 'sd');
        removeClass(notifyCountSpan, 'fade');
        notifyCountSpan[innerText] = notificationList.length < 10 ? notificationList.length : '9+';
    }
};
let getNotificationKey = (postNum, commentNum) => postNum + '_' + commentNum;
let checkAddNotification = (postNum, commentNum, commentDiv = null) => {
    if (!listeningPost[postNum]) {
        if (DEBUG) debug('post', postNum, 'is not my post');
        return;
    }
    let key = getNotificationKey(postNum, commentNum);
    if (!listeningFunc[key]) {
        if (DEBUG) debug('comment', commentNum, 'is not a comment in intereste');
        return;
    }
    let notification = notificationList.find(list => list[0] == key);
    if (!notification) {
        notification = [key, []];
        notificationList.push(notification);
    }
    notification[1].push(commentDiv);
    renderNotify();
}
let appendListener = (postNum, commentNum, onClickNotify) => {
    listeningPost[postNum] = true;
    listeningFunc[getNotificationKey(postNum, commentNum)] = onClickNotify;
}

let scrollDownButton = createElement('a', chatBottomContainer, {
    [onclick]: () => togglePullDown()
}, 'r.pd.fr', (bMobileDevice ? 'm' : '_'), hidden);

let scrollDownButtonDiv1 = createElement(divString, scrollDownButton, 'not-hover');
createIcon(scrollDownButtonDiv1, (bMobileDevice ? arrow : 'pause'));
createElement(spanString, scrollDownButtonDiv1, { [innerText]: str_pullDown }, 'text', (bMobileDevice ? hidden : '_'));
let scrollDownButtonDiv2 = createElement(divString, scrollDownButton, 'hover');
createIcon(scrollDownButtonDiv2, arrow);
let newMessageSpan = createElement(spanString, scrollDownButtonDiv2, { [innerText]: str_pullDownHover }, 'text', (bMobileDevice ? hidden : '_'));

// 채팅창이 스크롤될 시 고정 여부를 다시 판단
let onScrollTimer = null;
let diff = () => Math.abs(chatPage.scrollHeight - chatViewport.clientHeight - chatViewport.scrollTop);
let onChatScroll = () => {
    if (bBlockPullDownChange) return pullDown(true);
    clearTimeout(onScrollTimer);
    onScrollTimer = timeout(() => {
        if (bPullDown == diff() > 2) togglePullDown();
    }, 200);
}
chatViewport.onscroll = onChatScroll;

// 이름마다 해시값을 구한 뒤 글자 색으로 설정
let colorMap = {};
let getWriterKey = (name, id, ip) => {
    if (ip) return name + ip;
    return name + id;
}
let applyColor = async (name, id, ip, ...elements) => {
    let colorKey = getWriterKey(name, id, ip);
    let color;
    if (colorMap[colorKey] != undefined) {
        color = colorMap[colorKey];
    } else {
        color = await computeHashAsColor(colorKey).catch(debug);
        colorMap[colorKey] = color;
    }
    if (true) color = toBrightColor(color); // legacy
    for (let element of elements) {
        if (element) element.style.color = color;
    }
}

// 작성자 정보 영역 생성 매크로
let createWriter = (parent, name, id, ip, img, fix) => {
    if (img) createElement('img', parent, { src: img }, 'nikcon');
    let nameSpan = createElement(spanString, parent, { [innerText]: name }, 'name');
    let ipSpan = null;
    if (id) {
        if (!fix) ipSpan = createElement(spanString, parent, { [innerText]: id }, 'ip.id');
    } else if (ip) {
        ipSpan = createElement(spanString, parent, { [innerText]: ip }, 'ip')
    };
    createElement(spanString, parent, { [innerText]: ': ' });
    applyColor(name, id, ip, nameSpan, ipSpan);
}

// 스크롤 고정이 풀린 후
let setNewPostCount = (num) => {
    newPostCount = num;
    let lastWord = str_pullDownHover_zero;
    if (num != 0) {
        if (num > 20) lastWord = str_pullDownHover_over
        else lastWord = num + str_pullDownHover_count
    }
    newMessageSpan.innerText = str_pullDownHover_common + lastWord;
}

// 채팅 개수 제한
let checkMaxPost = () => {
    let nodes = chatPage.childNodes;
    while (nodes.length > maxPost) {
        let childNode = nodes[0];
        let removed = childNode[getElementsByClassName]('removed');
        if (removed && removed.length) removed[0].value = true;
        chatPage.removeChild(childNode);
        pullDown(true);
    }
}

// 채팅창 스크롤 고정 효과
let _pullDown = () => chatViewport.scrollTop = chatPage.scrollHeight;
pullDown = (bForced = false) => {
    if (bBlockPullDownChange && bForced) _pullDown();
    else request(() => {
        if (bPullDown && (bForced || onScrollTimer == null)) _pullDown();
    });
};
togglePullDown = () => {
    bPullDown = !bPullDown;
    if (bPullDown) {
        addClass(scrollDownButton, hidden);
        setNewPostCount(0);
        pullDown(true);
    } else {
        removeClass(scrollDownButton, hidden);
    }
};

let postContentDatas = {};
let postCommentCount = {};
let onPostCommentCountChanged = {};
let postCommentDatas = {};

let showLine = (div) => {
    if (!bPullDown) setNewPostCount(newPostCount + 1);
    removeClass(div, hidden);
    pullDown(true);
}
let newLine = async (postData, bNow = false) => {
    let num = postData.num;
    let line = createElement(divString, chatPage, 'chl', hidden);
    // 이미 채팅창에서 제거된 요소인지 여부를 저장
    let removed = createElement('input', line, {
        type: hidden,
        value: false,
    }, 'removed');
    let titleDiv = createElement(divString, line, 'tt.r');
    let inline = createElement(spanString, titleDiv);
    let name = postData.nickname;
    let ip = postData.ip;
    let title = postData.title;
    let id = postData.id;
    let img = postData.img;
    let fix = postData.fix;
    let my = postData.my ?? false;
    if (name) createWriter(inline, name, id, ip, img, fix);
    else addClass(line, 'notify'); // 이름이 주어지지 않으면 알림 메시지로 취급

    let titleSpan = createElement(spanString, inline, { [innerText]: title }, 'tt');

    // 디시콘
    let fetchingDcconInfo = false;
    let waitingForFetch = [];
    for (let match of title.matchAll(regexDccon)) {
        let dcconString = match[0];
        let packageName = match[1];
        let dcconName = match[2];
        let url = getDcconUrl(packageName, dcconName);
        if (url) {
            replaceDccon(titleSpan, newRegex(dcconString), url);
            pullDown(true);
            continue;
        }
        waitingForFetch.push([dcconString, packageName, dcconName]);
        if (fetchingDcconInfo) continue;
        fetchingDcconInfo = true;
        (async () => {
            let { write: writeDiv } = await getPostContent(postData.num).catch(debug);
            if (!writeDiv) return;
            let imgs = writeDiv[getElementsByClassName]('written_dccon');
            for (let img of imgs) {
                let match = img.src.match(regexDcconId);
                if (match) await loadDcconDetail(match[1]).catch(debug);
                else {
                    let match = img.getAttribute('data-src').match(regexDcconId);
                    if (match) await loadDcconDetail(match[1]).catch(debug);
                }
            }
            for (let names of waitingForFetch) {
                let url = getDcconUrl(names[1], names[2]);
                if (url) replaceDccon(titleSpan, newRegex(names[0]), url);
            }
            pullDown(true);
        })();
    }
    
    // 글 본문
    if (num) {
        let iframes = [];
        titleDiv.id = getNotificationKey(num, 0);
        
        let postContent = createElement(divString, line, 'w.zero');
        let postContentVp = createElement(divString, postContent, 'vp.post');
        let postContentPage = createElement(divString, postContentVp, 'page.pc');
    
        let bHiddenPostContent = true;
        if (my) {
            appendListener(num, 0, () => {
                if (bHiddenPostContent) titleDiv.click();
            });
        }
        let onOpenPostContent = () => {
            addClass(line, 'open');
            removeClass(postContent, 'zero');
            setTarget(0);
            if (bPullDown) togglePullDown();
            updateComment();
            splice(openedList, titleDiv);
            openedList.push(titleDiv);
            checkMaxOpened();
            renderCloseAllButton();
        };

        titleDiv.onclick = () => {
            bHiddenPostContent = !bHiddenPostContent;
            if (targetPostNum == num) setTarget(0);
            // 닫을 때
            if (bHiddenPostContent) {
                splice(openedList, titleDiv);
                addClass(postContent, 'zero');
                // 모든 유튜브 영상 중지
                for (let iframe of iframes) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":[]}', '*');
                }
                timeout(() => {
                    removeClass(line, 'open');
                    pullDown();
                }, 500);
                pullDown();
                renderCloseAllButton();
                return;
            };
            // 열 때
            onOpenPostContent();
            if (postContentDatas[num] == undefined) {
                getPostContent(num).catch(debug)
                .then(({text}) => {
                    postContentPage.innerHTML = text;
                    iframes = postContentPage[getElementsByTagName]('iframe');
                });
            }
        };
        
        // 본문 아래 댓글
        let postComment = createElement(divString, postContent, 'cm', hidden);
        let postCommentListVp = createElement(divString, postComment, 'vp');
        let postCommentListPage = createElement(divString, postCommentListVp, 'page');
        let showMore;
        let checkAnyMore;
        let postCommentShowMore = createElement('a', postComment, {
            [onclick]: () => showMore(),
        }, 'ex.sm.r');
        createIcon(postCommentShowMore, 'more_vert');
        let inputComment = createElement('a', postContent, {
            // [innerText]: str_writeComment,
            [onclick]: () => {
                if (targetPostNum == num) setTarget(0);
                else setTarget(num, line, inputCommentSpan);
            }
        }, 'ic.r');
        let inputCommentSpan = createElement(spanString, inputComment, {
            [innerText]: str_writeComment,
        });
        let postCommentExpander = createElement('a', postContent, { [onclick]: () => titleDiv.click() }, 'ex.alt');
        createIcon(postCommentExpander, 'expand_less');
        let commentWrappers = {};
        let commentDone = [];
        let commentWrapperPages = [];
        let currentWrapperPage = createElement(divString, postCommentListPage, 'w');
        let commentWrapperPageIndex = 0;
        let count = 0;
        let updateComment = async() => {
            if (removed.value != 'false') return;
            let data = await getPostComment(num).catch(debug);
            if (!data) return;
            if (data.count) removeClass(postComment, hidden);
            else return addClass(postComment, hidden);
            let tempWrapperPageIndex = commentWrapperPageIndex;
            for (let commentNum in data.comments) {
                if (commentDone.includes(commentNum)) continue;
                commentDone.push(commentNum);
                if (count > maxCommentOnPage) {
                    currentWrapperPage = createElement(divString, postCommentListPage, 'w', hidden);
                    tempWrapperPageIndex++;
                    count = 0;
                }
                let comment = data.comments[commentNum];
                let commentWrapper = createElement(divString, null, 'w');
                let commentEntry = createElement('a', null, 'cml.r');

                commentEntry.id = getNotificationKey(num, commentNum);
                
                let text = comment.text;
                let targetNum = comment.target;
                let targetName = comment.name;
                if (targetNum) {
                    let target = data.comments[targetNum];
                    if (target) targetName = target.name;
                    addClass(commentEntry, 're');
                    createIcon(createElement(divString, commentEntry, 're-icon'), sub);
                }
                
                // 시그니처 확인
                let my = text.length > commentSignitureLength && text.substring(text.length - commentSignitureLength) == lastSigniture;
                if (my) {
                    // 자신의 댓글인 경우, 알림 설정
                    lastSigniture = '';
                    appendListener(num, targetNum ? targetNum : commentNum, (newDiv) => {
                        if (bHiddenPostContent) titleDiv.click();
                        addClass(newDiv, 'hl');
                        timeout(() => removeClass(newDiv, 'hl'), highlightDuration);
                    });
                } else {
                    checkAddNotification(num, targetNum, commentEntry);
                }
                commentEntry.onclick = () => setTarget(num, line, inputCommentSpan, commentEntry, targetNum ? targetNum : comment.num, comment.name, targetName);
                if (commentWrappers[targetNum] == undefined) {
                    commentWrappers[comment.num] = commentWrapper;
                    commentWrapper.appendChild(commentEntry);
                    currentWrapperPage.appendChild(commentWrapper);
                    if (commentWrapperPages.length == tempWrapperPageIndex) {
                        commentWrapperPages.push(currentWrapperPage);
                    }
                } else {
                    let existing = commentWrappers[targetNum];
                    existing.insertAdjacentElement('beforeend', commentEntry);
                }
                let commentWriter = createElement(divString, commentEntry, 'writer-dlc');
                createWriter(commentWriter, comment.name, comment.id, comment.ip, comment.img, comment.fix);
                createElement(divString, commentEntry, { innerHTML: text }, 'text');
                count++;
            }
            checkAnyMore();
            pullDown();
        }
        showMore = () => {
            commentWrapperPageIndex++;
            let wrapperPage = commentWrapperPages[commentWrapperPageIndex];
            if (wrapperPage) removeClass(wrapperPage, hidden);
            checkAnyMore();
        }
        checkAnyMore = () => {
            if (commentWrapperPageIndex + 1 == commentWrapperPages.length) addClass(postCommentShowMore, hidden);
            else removeClass(postCommentShowMore, hidden);
        }

        // 제목 옆에 댓글 수
        let commentCount = createElement(spanString, inline, 'cm.fr', hidden);
        createIcon(commentCount, sub, 'f');
        let commentCountDiv = createElement(divString, commentCount, 'nc.gray-div');
        let commentCountOver = createElement(spanString, commentCount, { [innerText]: '+' });
        let digits = [];
        let olds = [];
        let news = [];
        for (let i = 0; i < 3; i++) {
            let digit = createElement(divString, commentCountDiv, 'num-' + i);
            olds.push(createElement(spanString, digit, 'old'));
            news.push(createElement(spanString, digit, 'new'));
            digits.push(digit);
        }
        let changeNumber = (digit, max, num) => {
            let actualDigit = 3 - max + digit;
            let old = news[actualDigit][innerText];
            olds[actualDigit][innerText] = old;
            news[actualDigit][innerText] = num;
            if (num != old) {
                addClass(digits[actualDigit], 'changed');
                timeout(() => removeClass(digits[actualDigit], 'changed'), 500);
            }
        }
        let splitNumber = (num) => {
            let string = num + '';
            return string.split('').reverse();
        }
        onPostCommentCountChanged[num] = (newCount = -1, bNow = false) => {
            if (removed.value != 'false') {
                delete onPostCommentCountChanged[num];
                return;
            }
            let func = () => {
                if (newCount == -1) newCount = postCommentCount[num] + 1;
                // let oldCount = postCommentCount[num] ?? 0;
                postCommentCount[num] = newCount;
                let splited = splitNumber(newCount);
                if (splited.length > 3) {
                    splited = '999'.split('');
                    removeClass(commentCountOver, hidden);
                } else {
                    addClass(commentCountOver, hidden);
                }
                for (let i = 0; i < splited.length; i++) {
                    changeNumber(i, splited.length, splited[i]);
                }
                if (newCount) {
                    removeClass(commentCount, hidden);
                    pullDown(true);
                }
                if (DEBUG) debug(num, listeningPost);
                if (!bHiddenPostContent || listeningPost[num]) updateComment().catch(debug);
            }
            // 댓글 수 변하는 타이밍을 임의로 설정
            if (bNow) func();
            else timeout(func, randomInt(1, interval));
        };
    }

    if (!bNow && postData.date) {
        // 글 올라오는 타이밍을 시뮬레이션
        let simulatedDelay = getNow() - postData.date;
        if (simulatedDelay > interval) showLine(line);
        timeout(() => showLine(line), interval - simulatedDelay);
    } else {
        showLine(line);
    }
    checkMaxPost();
};

//#endregion

// #####################################################################
// ####################  INPUTS : LOGIN  ###############################
// #####################################################################
//#region 

if (DEBUG) debug('input login');

let loginInfoContainer = createElement(divString, chatContainer, 'li-c');
let loginInputExpander = createElement('a', loginInfoContainer, { [onclick]: () => toggleExpander() }, hidden, 'ex.tab');
let loginInputExpanderSpan = createIcon(loginInputExpander, 'expand_more');
toggleExpander = () => {
    bFormExpanded = !bFormExpanded;
    if (bFormExpanded) {
        loginInputExpanderSpan.innerText = 'expand_more';
        removeClass(loginInputContainer, hidden);
    } else {
        loginInputExpanderSpan.innerText = 'expand_less';
        addClass(loginInputContainer, hidden);
    }
    pullDown(true);
}
let loginInputContainer = createElement(divString, loginInfoContainer, 'fr', hidden);
let inputNickname = createElement('input', loginInputContainer, { type:'text', placeholder: str_nickname, maxlength: 15, name: 'name' });
let inputPassword = createElement('input', loginInputContainer, { type:'password', placeholder: str_password, maxlength: 20, name: 'password' });
let captchaInputContainer = createElement(divString, loginInfoContainer, 'fr', hidden);
let captchaImageContainer = createElement('a', captchaInputContainer);
let captchaImage = createElement('img', captchaImageContainer, { [onclick]: () => renderInputCaptcha() }, 'captcha');
let inputCaptcha = createElement('input', captchaInputContainer, { type:'text', placeholder: str_code, maxlength: 20 });

// 미니갤: 익명 게시판인 경우
let renderInputNickname = () => {
    if (!bMini) return;
    if (anonymousNickname) {
        inputNickname.value = anonymousNickname;
        addClass(inputNickname, disabled);
    } else {
        removeClass(inputNickname, disabled);
    }
}

// Captcha를 새로고침하거나 닫음
let renderInputCaptcha = async () => {
    inputCaptcha.value = '';
    if (isCaptcha()) {
        let postingWrite = isPostingWrite();
        let sessionData = {
            ci_t: getCookie('ci_c'),
            gall_id: gallId,
            kcaptcha_type: postingWrite ? 'write' : 'comment',
            _GALLTYPE_: gallType
        };
        let url = host + 'kcaptcha/session';
        if (postingWrite) await postWrite(url, sessionData).catch(debug);
        else await postComment(targetPostNum, url, sessionData).catch(debug);
        captchaImage.src = host + 'kcaptcha/image/?gall_id='+ gallId +'&kcaptcha_type=' + (postingWrite ? 'write' : 'comment') + '&time='+ getNow() + '&_GALLTYPE_=' + gallType;
        removeClass(captchaInputContainer, hidden);
    } else {
        addClass(captchaInputContainer, hidden);
    }

}
let refreshWriteSession;

onLoginChecked = () => {
    if (!bLogin) {
        removeClass(loginInputContainer, hidden);
        removeClass(loginInputExpander, hidden);
        pullDown(true);
    } else {
        addClass(loginInfoContainer, hidden);
    }
    refreshWriteSession();
}
let getNickname = () => inputNickname.value ?? '';
let getNicknameV2 = () => anonymousNickname ? anonymousNickname : (bLogin ? userNickname : getNickname());
let getPassword = () => inputPassword.value ?? '';
let getCaptcha = () => inputCaptcha.value ?? '';

//#endregion

// #####################################################################
// ####################  REPLY INFO  ###################################
// #####################################################################
//#region 

let replyInfoContainer = createElement(divString, chatContainer, 'ri-c', hidden);
let replyingTab = createElement(divString, replyInfoContainer, 'tab');
let replyingNameSpan = createElement(spanString, replyingTab, 'name');
let replyingTypeIcon = createIcon(replyingTab, 'more_horiz', hidden);
let replyingTypeNameSpan = createElement(spanString, replyingTab, 'name', hidden);
let replyingToSpan = createElement(spanString, replyingTab, { [innerText]: str_replyTo });
createIcon(createElement('a', replyingTab, { [onclick]: () => setTarget(0) }, 'close'), 'cancel');

//#endregion

// #####################################################################
// ####################  INPUTS : CHAT  ################################
// #####################################################################
//#region 

if (DEBUG) debug('input chat');

let chatInputContainer = createElement(divString, chatContainer, 'ci-c');
let chatInputContainerFloat = createElement(divString, chatInputContainer, 'f');
let inputContainer = createElement(divString, chatInputContainerFloat, 'input');

// 채팅 입력란에 입력이 주어지면 높이를 다시 계산
let inputHeightName = '--ih';
let input = createElement('textarea', inputContainer, {
    placeholder: str_placeholderMessage,
    oninput: () => {
        setStyleVariable(inputHeightName, (input.clientHeight + 12) + 'px');
        input.style.height = 0;
        input.style.height = (input.scrollHeight - 19) + 'px';
        pullDown(true);
        request(() => setStyleVariable(inputHeightName, 0))
    }
}, disabled);

// 글 <-> 댓글 <-> 답글
let lastTargetDiv = null;
let lastTargetButtonSpan = null;
let lastTargetComment = null;
setTarget = (num, tDiv, tButton, tComment = null, tCommentNum = 0, tCommentWriter = '', targetCommentWriter2 = '') => {
    if (tComment != null && tComment == lastTargetComment) {
        num = 0;
        tCommentNum = 0;
    }
    if (lastTargetDiv && lastTargetButtonSpan) {
        if (lastTargetComment) removeClass(lastTargetComment, 'rp');
        removeClass(lastTargetDiv, 'wr');
        removeClass(lastTargetDiv, 'rp');
        lastTargetButtonSpan[innerText] = str_writeComment;
        addClass(replyInfoContainer, hidden);
        addClass(replyingTypeIcon, hidden);
        addClass(replyingTypeNameSpan, hidden);
    }
    targetPostNum = num;
    targetCommentNum = tCommentNum;
    if (isPostingWrite()) {
        if (bWriteUnavailable) {
            addClass(input, disabled);
            addClass(upload, disabled);
            addClass(dccon, disabled);
            addClass(submit, disabled);
            if (!bLogin) addClass(loginInfoContainer, hidden);
        }
        input.placeholder = str_placeholderMessage;
        lastTargetDiv = null;
        lastTargetButtonSpan = null;
        lastTargetComment = null;
    } else {
        if (bWriteUnavailable) {
            removeClass(input, disabled);
            removeClass(upload, disabled);
            removeClass(dccon, disabled);
            removeClass(submit, disabled);
            if (!bLogin) removeClass(loginInfoContainer, hidden);
        }
        addClass(chatInputContainer, 'wr');
        addClass(tDiv, 'wr');
        if (tComment && tCommentNum) {
            addClass(tComment, 'rp');
            addClass(tDiv, 'rp');
            input.placeholder = str_placeholderReply;
            replyingNameSpan[innerText] = tCommentWriter;
            if (tCommentWriter != targetCommentWriter2) {
                replyingTypeNameSpan[innerText] = targetCommentWriter2;
                removeClass(replyingTypeIcon, hidden);
                removeClass(replyingTypeNameSpan, hidden);
            }
            replyingToSpan[innerText] = str_replyTo;
            tButton[innerText] = str_cancel;
        } else {
            let postData = postContentDatas[num];
            replyingNameSpan[innerText] = postData.name;
            input.placeholder = str_placeholderComment;
            replyingToSpan[innerText] = str_commentTo;
            tButton[innerText] = str_writeNewComment;
        }
        removeClass(replyInfoContainer, hidden);
        lastTargetDiv = tDiv;
        lastTargetButtonSpan = tButton;
        lastTargetComment = tComment ?? null;
        input.focus();
    }
    renderUploadImage();
    renderInputCaptcha();
    renderUploadPanel();
    renderInputNickname();
    pullDown(true);
}

//#endregion

// #####################################################################
// ####################  DCCON  ########################################
// #####################################################################
//#region 

if (DEBUG) debug('dccon');

let dcconPanel = createElement(divString, chatInputContainer, 'p.p-dccon', hidden);
let listPage =
    createElement(divString,
        createElement(divString,
            createElement(divString, dcconPanel, 'dcl'),
        'vp'),
    'page');
let dcconPage =
    createElement(divString,
        createElement(divString,
            createElement(divString, dcconPanel, 'dcc'),
        'vp'),
    'page');

// 패키지 정보가 주어지면 
onPackageDetail = async (packageName, list, promise) => {
    let hash = await computeHashAsColor(packageName).catch(debug);
    let id = hash.substring(1);
    let linkImage = null;

    // make a package page
    let entry = createElement(divString, null, 'package');
    let existing = doc[getElementById](id);
    if (existing) {
        dcconPage.replaceChild(entry, existing);
    } else {
        dcconPage.appendChild(entry);
        // make a link in list
        let link = createElement('a', listPage, { href: hash, [onclick]: () => {
            input.focus();
            scrollToTop();
        } });
        if (packageName == str_recently) {
            createIcon(link, 'history');
        } else {
            linkImage = createElement('img', link, 'dm');
        }
    }
    entry.setAttribute('id', id);
    createElement(spanString, createElement(divString, entry, 'hd.r'), {
        [innerText]: packageName
    });
    let flex = createElement(divString, entry, 'flex.fr');
    let dummy = createElement(divString, entry, 'dm');
    createElement(spanString, dummy, { [innerText]: str_loading });
    await promise.catch(debug);
    addClass(dummy, hidden);
    for (let item of list) {
        let array = getDcconDetailSync(item);
        createElement('img', flex, {
            loading: "lazy",
            src: getDcconUrlFromCode(item),
            [onclick]: () => {
                if (isPostingWrite()) {
                    insertDccon(item);
                    input.focus();
                    input.value += ':' + array[0] + ', ' + array[1] + ': ';
                } else {
                    insertDcconComment(item, targetPostNum);
                }
            }
        }, 'd');
    }
    if (linkImage) {
        linkImage.src = getDcconListImgUrl(packageName);
        removeClass(linkImage, 'dm');
    }
}

let populatePackage = async (target) => {
    await loadDcconList(target).catch(debug);
}
populatePackage('recent');
populatePackage('icon');

let panelHidden = true;
let togglePanel = () => {
    panelHidden = !panelHidden;
    if (panelHidden) {
        addClass(dcconPanel, hidden);
    }
    else {
        input.focus();
        removeClass(dcconPanel, hidden)
    };
    request(() => input.focus());
}
let dccon = createElement('a', chatInputContainerFloat, {
    onmousedown: () => togglePanel(),
}, 'd.b', disabled);
createIcon(dccon, 'mood');

//#endregion

// #####################################################################
// ####################  UPLOAD  #######################################
// #####################################################################
//#region 

if (DEBUG) debug('upload');

let uploadPanel = createElement(divString, chatInputContainerFloat, 'p.up.abs', hidden);
let uploadPage = createElement(divString, uploadPanel, 'fr');
let previewAsIcon;

let lastFileData = null;

let renderUploadPanel = () => {
    if (!lastFileData || !isPostingWrite()) {
        addClass(uploadPanel, hidden);
        addClass(previewAsIcon, hidden);
    } else {
        removeClass(uploadPanel, hidden);
        if (lastFileData.upload) removeClass(previewAsIcon, hidden);
    }
}

// File을 받아 화면에 표시하고 필요한 정보를 담은 객체를 반환
let createFileData = (file) => {
    let preview = createElement(divString, uploadPage, 'pv.r');
    let previewImageContainer = createElement(divString, preview, 'image');
    let previewImg = createElement('img', previewImageContainer);
    let previewDesc = createElement(divString, preview, 'desc');
    createElement(spanString, previewDesc, { [innerText]: file.name }, 'file-name');
    createElement(spanString, previewDesc, { [innerText]: '(' + bytes(file.size) + ')' }, 'size');
    let previewPending = createIcon(previewImageContainer, 'pending', 'pending.abs');
    let previewError = createIcon(previewImageContainer, 'warning', 'error.abs', hidden);
    let reader = new FileReader();
    reader.onload = () => {
        previewImg.src = reader.result;
        previewAsIcon.src = reader.result;
        removeClass(previewAsIcon, hidden);
    }
    reader.readAsDataURL(file);

    let { r, p } = initPromise();
    let fileData = {
        preview: preview,
        original: file.name,
        name: '',
        size: file.size,
        type: file.type,
        upload: false,
        file: file,
        error: false,
        num: 0,
        url: '',
        close: async() => {
            preview.remove();
            lastFileData = null;
            renderUploadPanel();
            if (fileData.upload) postDeleteImage(fileData.num);
            else {
                await p.catch(debug);
                if (!fileData.error) postDeleteImage(fileData.num);
            }
        },
    };

    let previewClose = createElement('a', preview, 'close.abs-tr.b');
    createIcon(previewClose, 'delete', 'f');
    previewClose.onclick = fileData.close;

    let onError = (reason, ...any) => {
        openAlert(reason);
        debug(reason, ...any);
        fileData.error = true;
        addClass(preview, 'error');
        removeClass(previewError, hidden);
        renderUploadPanel();
    }
    postImage(file).catch(debug).then((json) => {
        addClass(previewPending, hidden);
        if (!json) return onError(str_uploadFail);
        if (json.error) return onError(json.error, json);
        fileData.upload = true;
        addClass(preview, 'up');
        fileData.name = json['name'];
        fileData.url = json['url'];
        fileData.num = json['file_temp_no'];
        r();
    });
    return fileData;
}

let onFileDropped = (file) => {
    if (file.size > 20000000) return openAlert(str_imageTooBig);
    if (bWriteUnavailable) return openAlert(str_chatDisabled);
    lastFileData?.close();
    lastFileData = createFileData(file);
    renderUploadPanel();
}

let uploadInput = createElement('input', null, {
    type: 'file',
    accept: 'image/*',
    onchange: () => {
        if (uploadInput.files.length) onFileDropped(uploadInput.files[0]);
    }
});

let askReplace = (onOk) => {
    if (lastFileData) openModal({
        title: str_replaceImage,
        desc: str_imageOver,
        options: [{
            text: str_replace,
            [onclick]: (close) => {
                onOk();
                close();
            }
        }, str_cancel ],
    });
    else onOk();
}

let upload = createElement('a', chatInputContainerFloat, {
    [onclick]: () => askReplace(() => uploadInput.click()),
}, 'up.b.abs-tl', disabled);

// 드래그 앤 드롭 지원
let c = 0;
ondragenter = () => {
    addClass(dropArea, 'drag');
}
dropArea.ondragenter = (ev) => {
    ev.preventDefault();
    c++;
}
dropArea.ondragover = (ev) => ev.preventDefault();
dropArea.ondragleave = () => {
    c--;
    request(() => removeClass(dropArea, 'drag'));
}

dropArea.ondrop = (ev) => {
    ev.preventDefault();
    removeClass(dropArea, 'drag');
    if (ev.dataTransfer.files) {
        let file = ev.dataTransfer.files[0];
        if (!file.type || file.type.split('/')[0] != 'image') return openAlert(str_notImage);
        askReplace(() => onFileDropped(file));
    }
}

createIcon(upload, 'add_circle');
previewAsIcon = createElement('img', upload, 'pv.icon.r', hidden);

renderUploadImage = () => {
    if (isPostingWrite() && !bWriteUnavailable) removeClass(upload, disabled);
    else addClass(upload, disabled);
}

//#endregion

// #####################################################################
// ####################  SUBMIT & SETTING  #############################
// #####################################################################
//#region 

if (DEBUG) debug('settings');

let settingsPanel = createElement(divString, chatInputContainer, 'p.p-settings', hidden);
createElement(spanString, createElement(divString, settingsPanel, 'hd'), { [innerText]: str_settings }, 'h');
let options = createElement(divString, settingsPanel, 'opts');

// 옵션 엔트리 작성 및 브라우저 저장/로드
let createOption = (labelText, onChecked, onUnchecked, initialToggle = false) => {
    let toggled = initialToggle;
    let option = createElement(divString, options, 'opt');
    if (toggled) addClass(option, 'chk');
    createElement(spanString, option, { [innerText]: labelText }, 'label');
    let changeToggled = (bool) => {
        toggled = bool;
        if (toggled) {
            addClass(option, 'chk');
            onChecked?.();
        } else {
            removeClass(option, 'chk');
            onUnchecked?.();
        }
    }
    createIcon(createElement(spanString, option, 'value'), 'check_small');
    option.onclick = () => applyOption(labelText, !toggled);
    onApplyFunc[labelText] = changeToggled;
    _applyOption(labelText, initialToggle);
    return option;
}
let createOptionProperty = (labelText, propertyName, onChecked, onUnchecked, initialToggle) => 
    createOption(labelText, () => setStyleVariable(propertyName, onChecked), () => setStyleVariable(propertyName, onUnchecked), initialToggle);

// default: true
let madoOption = createOption(str_settings_mado, () => {
    bMado = true;
    if (bMobileDevice && !getOption('mado')) {
        openModal({
            title: str_comfirm,
            desc: str_askMado,
            options: [{
                text: str_yes,
                [onclick]: (close) => {
                    renderRow();
                    applyOption('mado', true);
                    close();
                }
            }, {
                text: str_cancel,
                [onclick]: (close) => {
                    madoOption.click();
                    close();
                }
            }],
        });
    } else {
        renderRow();
    }
}, () => {
    bMado = false;
    renderRow();
}, !bMobileDevice);

let scrollBehaviorName = '--sb';
createOptionProperty(str_settings_smoothScroll, scrollBehaviorName, 'smooth', 'auto', true);
createOption(str_settings_showUnfixId, () => {
    removeClass(chatPage, 'hu');
    pullDown(true);
}, () => {
    addClass(chatPage, 'hu');
    pullDown(true);
}, true);
let useLinkInContent = true;
createOption(str_settings_appendLink, () => useLinkInContent = true, () => useLinkInContent = false, true);

let countColorName = '--cc';
createOptionProperty(str_settings_commentHighlight, countColorName, '#fc5', 'white', true);

// default: false
createOption(str_settings_hideLogin, () => {
    addClass(loginInputContainer, hidden);
    addClass(loginInputExpander, hidden);
}, () => {
    if (bLogin) return;
    removeClass(loginInputContainer, hidden);
    removeClass(loginInputExpander, hidden);
});
let fontSizeName = '--fs';
createOption(str_settings_bigFont, () => {
    setStyleVariable(fontSizeName, '15px');
    pullDown(true);
}, () => {
    setStyleVariable(fontSizeName, '13px');
    pullDown(true);
});
let dcconSizeName = '--ds';
createOptionProperty(str_settings_smallDccon, dcconSizeName, '60px', '80px');
createOption(str_settings_shortLatency, () => setIntervalIndex(1), () => setIntervalIndex(0));
createOption(str_settings_chatOnly, () => addClass(main, 'co'), () => removeClass(main, 'co'));
createElement(spanString, settingsPanel, { [innerText]: 'version: ' + VERSION }, 'version');

let settingsHidden = true;
let toggleSettings = () => {
    settingsHidden = !settingsHidden;
    if (settingsHidden) addClass(settingsPanel, hidden); 
    else removeClass(settingsPanel, hidden);
}

// 옵션 버튼과 채팅 보내기 버튼
let submitContainer = createElement(divString, chatInputContainer, 'fr.sc');
let settings = createElement('a', submitContainer, { [onclick]: toggleSettings }, 'b.gray');
createIcon(settings, 'settings');

let submit = createElement('a', submitContainer, 'sb', disabled);
createElement(spanString, submit, { [innerText]: str_chat });
enterAsClick(input, submit, true);

//#endregion

// #####################################################################
// ####################  GALL FUNCS  ###################################
// #####################################################################
//#region 

if (DEBUG) debug('funcs');

let commentFormDatas = {};

// 글 내용 읽기
let getPostContent = async (num, bForce = false) => {
    if (!bForce && postContentDatas[num] != undefined) return postContentDatas[num];
    let contentData = {
        num: num,
        name: '',
        text: str_nullContent,
        document: null,
        write: null,
        esno: '',
        string: '',
    };
    let html = await getAsText(getPostUrl(num)).catch(debug);
    let parsed = parseHtml(html);
    if (!parsed) return contentData;

    // check captcha
    if (parsed[getElementById]('code_' + num)) bCaptchaComment = true;
    else bCaptchaComment = false;

    contentData.document = parsed;
    let writeDivs = parsed[getElementsByClassName]('write_div');
    if (!writeDivs.length) return contentData;
    let head = parsed[querySelector]('.gallview_head');
    if (!head) return contentData;
    let writer = head[querySelector]('.gall_writer');
    if (!writer) return contentData;
    contentData.name = writer.getAttribute('data-nick');
    let writeDiv = writeDivs[0];
    contentData.write = writeDiv;
    contentData.text = replaceEmbed(replaceLink(trimHtml(neutralizeDccon(writeDiv.innerHTML))));
    let esno = parsed[getElementsByName]('e_s_n_o');
    if (esno.length) contentData.esno = esno[0].value;
    contentData.string = getSecretString(html);
    postContentDatas[num] = contentData;

    // info to write comment
    let commentFormData = {
        cur_t: '',
        check_6: '',
        check_7: '',
        check_8: '',
        check_9: '',
        check_10: '',
        recommend: '0',
        user_ip: '',
        t_vch2: '',
        t_vch2_chk: '',
        service_code: '',
    };
    updateFormData(parsed, commentFormData);
    commentFormData.service_code = getSecondServiceCode(commentFormData.service_code, contentData.string);
    commentFormDatas[num] = commentFormData;

    return contentData;
}

let _getPostComment = async (num, postData, commentData) => {
    let res = await postComment(num, getBoardUrlPlain() + 'comment/', postData).catch(debug);
    if (!res) return false;
    let json;
    try {
        json = JSON.parse(res);
    } catch (e) {
        debug(e, res);
        return false;
    }
    let newCount = json['total_cnt'];
    commentData.count = newCount;
    let list = json['comments'];
    if (!list || !list.length) return false;
    for (let item of list) {
        let commentNum = parse(item['no']);
        if (commentNum == 0) continue; // ad
        let comment = {
            num: commentNum,
            id: '',
            ip: '',
            name: '',
            img: '',
            fix: false,
            text: '',
            target: 0,
        };
        if (commentData.comments[commentNum] != undefined) continue;
        else commentData.comments[commentNum] = comment;
        comment.id = item['user_id'];
        comment.ip = item['ip'];
        comment.name = item['name'];
        comment.text = replaceLink(neutralizeDccon(item['memo']).r(/\n/g, '\<br /\>'));
        let target = item['c_no'];
        if (target) comment.target = parse(target);
        let icon = item['gallog_icon'];
        let match = icon.match(/\<img src='([^']+)'/);
        if (match) {
            let img = match[1];
            comment.img = img;
            comment.fix = testFix(img); // /fix/.test(img);
        }
    }
    return true;
}
let getPostComment = async (num) => {
    let postContentData = await getPostContent(num).catch(debug);
    let esno =  postContentData.esno;
    let lastCount = postCommentCount[num];
    let commentData = {
        count: lastCount,
        num: 0,
        comments: {},
    };
    if (postCommentDatas[num] != undefined) commentData = postCommentDatas[num];
    let postData = {
        id: gallId,
        no: num,
        cmt_id: gallId,
        cmt_no: num,
        focus_cno: '',
        focus_pno: '',
        e_s_n_o: esno,
        comment_page: 1,
        sort: 'D',
        prevCnt: '0',
        board_type: '',
        _GALLTYPE_: gallType,
    };
    let result = true;
    while (result) {
        result = await _getPostComment(num, postData, commentData).catch(debug);
        postData.comment_page++;
    }
    if (lastCount != commentData.count) onPostCommentCountChanged[num](commentData.count, true);
    postCommentDatas[num] = commentData;
    return commentData;
}

// 글 목록 읽기

let myPosts = [];

let updateList = async (force = false) => {
    let now = getNow();
    // abort when posting or already updated few secones ago
    if (posting || (!force && now - lastUpdate < interval)) return lastUpdate = now;
    lastUpdate = now;
    let url = getListUrl();
    let gall = await getAsDocument(url).catch(debug);
    if (!gall) return;
    let postDatas = [];
    let posts = gall[getElementsByClassName]('us-post');
    for (let post of posts) {
        // 차단된 유저 건너뜀
        if (post.classList.contains('block-disable')) continue;
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
        let num = parse(post.getAttribute('data-no'));
        postData.num = num;

        let reply = post[querySelector]('span.reply_num');
        let lastCount = postCommentCount[num] ?? 0;
        let count = 0;
        if (reply) {
            let countString = reply.innerHTML;
            count = parse(countString.substring(1, countString.length - 1));
            if (count) postData.count = count;
        }
        // skip when the post is older than last post
        if (num <= lastNum) {
            if (count != lastCount) onPostCommentCountChanged[num]?.(count, firstUpdate);
            continue;
        }
        let titles = post[getElementsByClassName]('gall_tit');
        if (titles.length) {
            postData.title = titles[0][getElementsByTagName]('a')[0].innerText.r('\n', '').r('\r', '').trim();
        }
        let numString = post[getElementsByClassName]('gall_num')[0].innerText;
        
        if (numString == str_survey || numString == str_notice || numString == 'AD') continue; // 말머리 없음
        let subjects = post[getElementsByClassName]('gall_subject');
        if (subjects.length) {
            let subject = subjects[0].innerText.trim();
            postData.subject = subject;
            if (subject == str_survey || subject == str_notice || subject == 'AD') continue; // 말머리 있음
        }
        let writers = post[getElementsByClassName]('gall_writer');
        if (writers.length) {
            let writer = writers[0];
            let element = writer.attributes.getNamedItem('data-nick');
            if (element) postData.nickname = element.value;
            element= writer.attributes.getNamedItem('data-uid');
            if (element) postData.id = element.value;
            element = writer.attributes.getNamedItem('data-ip');
            if (element) postData.ip = element.value;
            element = writer[getElementsByClassName]('writer_nikcon');
            if (element && element.length) {
                let img = postData.img = element[0][getElementsByTagName]('img')[0].src
                postData.img = img;
                postData.fix = testFix(img);
            };
        }
        let dates = post[getElementsByClassName]('gall_date');
        if (dates && dates.length) {
            postData.date = Date.parse(dates[0].getAttribute('title'));
        }
        postDatas.push(postData);
    }

    if (postDatas.length == 0) return;
    postDatas = postDatas.sort((a, b) => a.num - b.num);
    let lastNumCur = 0;
    for (let postData of postDatas) {
        if (!myPosts.includes(postData.num)) {
            await newLine(postData, firstUpdate).catch(debug);
            if (postData.count) onPostCommentCountChanged[postData.num]?.(postData.count, firstUpdate);
        }
        lastNumCur = Math.max(lastNumCur, postData.num);
    }
    lastNum = Math.max(lastNum, lastNumCur);
    firstUpdate = false;
}

let updateCycle = async() => {
    await updateList().catch(debug);
    timeout(updateCycle, interval);
};
// 업데이트 시작
updateCycle().then(() => {
    newLine({title: str_greeting});
    bGreeted = true;
    if (bWriteUnavailable) newLine({ title: str_notifyChatDisabled });
});

// 글 쓰기
let formData = {
    id: '',
    _GALLTYPE_: '',
    gallery_no: 0,
    r_key: '',
    upload_status: '',
    clickbutton: '',
    user_ip: '',
    block_key: '',
    tempIdx: '',
    headtext: '',
    use_headtext: '',
    poll: '',
    service_code: '',
    use_html: '',
    subject: '',
    adult_article_yn: 'N',
    adult_auth_yn: 'N',
    ci_t: undefined,
    mode: 'W',
    movieIdx: '',
    series_title: '[]',
    series_data: '',
    headTail: '""',
};

// 미니갤
if (bMini) formData.fix = '';

let blockKey = '';

// 권한 없는 갤러리인 경우
let onWritingBlocked = (bBlocked = true) => {
    if (!bWriteUnavailable && bBlocked && bGreeted) newLine({ title: str_notifyChatDisabled });
    bWriteUnavailable = bBlocked;
    if (bBlocked) {
        if (isPostingWrite()) {
            addClass(input, disabled);
            addClass(upload, disabled);
            addClass(dccon, disabled);
            addClass(submit, disabled);
        }
        if (!bLogin) addClass(loginInfoContainer, hidden);
    } else {
        removeClass(input, disabled);
        removeClass(upload, disabled);
        removeClass(dccon, disabled);
        removeClass(submit, disabled)
        if (!bLogin) removeClass(loginInfoContainer, hidden);
    }
}

refreshWriteSession = async() => {
    let html = await getAsText(getWriteUrl()).catch(debug);
    let parsed = parseHtml(html);
    if (!parsed) return onWritingBlocked();
    let write = parsed[getElementById]('write');
    if (!write) return onWritingBlocked();
    onWritingBlocked(false);
    updateFormData(parsed, formData);
    // find service_code validation serial
    _secret = getSecretString(html);
    bCaptcha = parsed[getElementById]('code') && true;
    if (bMini) {
        formData.headtext = 0; // 말머리 일반
        let key = bLogin ? 'nickname' : 'name';
        let nickname = parsed[getElementById](key);
        if (nickname) anonymousNickname = nickname.value;
        else anonymousNickname = '';
    }
    renderInputCaptcha();
    renderInputNickname();
    pullDown(true);
}
let falseString = (s) => 'false||' + s;
let makeDcconContent = (url, dcconName) => `<img class="written_dccon" src="${url}" conalt="${dcconName}" alt="${dcconName}" con_alt="${dcconName}" title="${dcconName}">`;
let lastWrite = 0;
let writePost = async (title, content) => {
    // get second block_key
    formData.subject = encode(title);
    let additionalFormData = {};
    if (!bLogin) {
        let nickname = getNickname();
        let password = getPassword();
        if (nickname.length == 0) return falseString(str_nullNickname);
        if (password.length < 2) return falseString(str_shortPassword);
        additionalFormData.name = nickname;
        additionalFormData.password = password;
    }
    if (bCaptcha) {
        let captcha = getCaptcha();
        if (captcha.length == 0) return falseString(str_nullCode);
        additionalFormData.kcaptcha_code = captcha;
    }
    let now = getNow();
    let elapsed = now - lastWrite;
    if (elapsed < minInterval) {
        let simulatedDelay = minInterval - elapsed;
        lastWrite = now + simulatedDelay;
        await sleep(simulatedDelay);
    } else {
        lastWrite = now;
    }

    blockKey = await postWrite('/block/block/', formData, additionalFormData).catch(debug);
    if (!blockKey) return falseString(str_error_blockKey);
    // apply service_code
    formData.service_code = getSecondServiceCode(formData.service_code);

    let lastData = {
        block_key: blockKey,
        memo: '',
        code: bCaptcha ? getCaptcha() : undefined,
        bgm: '0',
    };

    // apply image
    let imageContent = '';
    if (lastFileData && lastFileData.upload) {
        imageContent += str_lineBreak + `<img src="${lastFileData.url}" class="txc-image "/>` + str_lineBreak;
        lastData['file_write[0][file_no]'] = lastFileData.num;
    }

    // apply link
    let linkContent = '';
    if (useLinkInContent && loadedVideoUrls.length) {
        for (let i = 0; i < loadedVideoUrls.length; i++) {
            let videoUrl = loadedVideoUrls[i];
            let matchYoutube = videoUrl.match(regexYoutube);
            let matchTwitch = videoUrl.match(regexTwitch);
            let videoId;
            if (matchYoutube) { // if youtube
                videoId = matchYoutube[2];
                if (i == 0) linkContent += `<p><div class="yt_thum_box"><div class="yt_movie"><embed src="https://www.youtube.com/v/${videoId}?version=3" type="application/x-shockwave-flash" width="560" height="315" allowfullscreen="true"></div><a class="yt_link" href="https://youtu.be/${videoId}" target="_blank">https://youtu.be/${videoId}</a></div><p>`;
                else linkContent += `<p><a href="https://youtu.be/${videoId}">https://youtu.be/${videoId}</a></p>`;
            } else if (matchTwitch) {
                videoId = matchTwitch[2];
                linkContent += `<p><a href="https://www.twitch.tv/${videoId}">https://www.twitch.tv/${videoId}</a></p>`;
            } else {
                linkContent += `<p><a href="${videoUrl}">${videoUrl}</a></p>`;
            }
        }
    }
    if (linkContent) linkContent += str_lineBreak;

    // apply dccon
    let dcconContent = '';
    for (let match of title.matchAll(regexDccon)) {
        let packageName = match[1];
        let dcconName = match[2];
        let url = getDcconUrl(packageName, dcconName);
        if (url) {
            dcconContent += makeDcconContent(url, dcconName);
        }
    }
    if (dcconContent) dcconContent += str_lineBreak;

    for (let match of content.matchAll(regexDccon)) {
        let dcconString = match[0];
        let packageName = match[1];
        let dcconName = match[2];
        let url = getDcconUrl(packageName, dcconName);
        if (url) content = content.r(dcconString, makeDcconContent(url, dcconName));
    }
    lastData.memo = encode(imageContent + linkContent + str_lineBreak + /* dcconContent + */ content);
    let res = await postWrite(articleSubmit, formData, additionalFormData, lastData).catch(debug);
    if (res) {
        let splits = res.split('||');
        if (splits.length == 3 && splits[2] == 'v3') {
            //captcha
            let token = await executeCaptcha('comment_submit');
            if (!token) return falseString('captcha');
            lastData['g-recaptcha-token'] = token;
            return await postWrite(articleSubmit, formData, additionalFormData, lastData).catch(debug);
        }
    }
    return res;
}

// 글 작성 이후
let onWritePost = (res) => {
    timeout(refreshWriteSession, 500);
    let splits = res.split('||');
    if (splits.length < 2) {
        debug(res);
        openAlert(str_error_generic);
        return;
    }
    if (splits[0] == 'false') {
        openAlert(splits[1]);
        debug(res);
        return;
    }
    let num = parse(splits[1].trim());
    myPosts.push(num);
    newLine({
        num: num,
        nickname: getNicknameV2(),
        id: bLogin ? userId : '',
        ip: bLogin ? '' : cutIpAddress(formData.user_ip),
        title: decodeURIComponent(formData.subject),
        img: userImg,
        fix: bUserFix,
        my: true,
    });
    lastFileData?.close();
}
let onWriteComment = (res, num) => {
    timeout(renderInputCaptcha, 500);
    let splits = res.split('||');
    if (splits.length < 2)  {
        debug(res);
        return openAlert(str_error_generic);
    };
    if (splits[0] == 'false') {
        debug(res);
        return openAlert(splits[1]);
    }
    setTarget(0);
    onPostCommentCountChanged[num](-1, true);
    return true;
}

// 댓글 쓰기
let writeComment = async (num, body, target = 0) => {
    let commentFormData = commentFormDatas[num];
    if (!commentFormData) return 0;
    let additionalFormData = {};
    if (target) {
        additionalFormData.c_no = target;
    }
    if (!bLogin) {
        if (anonymousNickname) {
            additionalFormData.nickname = anonymousNickname;    
        } else {
            let nickname = getNickname();
            if (nickname.length == 0) return falseString(str_nullNickname);
            additionalFormData.name = nickname;
        }
        let password = getPassword();
        if (password.length < 2) return falseString(str_shortPassword);
        additionalFormData.password = password;
    } else {
        additionalFormData.name = userNickname;
    }
    if (bCaptchaComment) {
        let captcha = getCaptcha();
        if (captcha.length == 0) return falseString(str_nullCode);
        additionalFormData.code = captcha;
    }
    additionalFormData.memo = body;
    let data = {
        id: gallId,
        no: num,
        c_gall_id: gallId,
        c_gall_no: num,
        [grecaptcha]: '',
        _GALLTYPE_: gallType,
        headTail: '""',
    };
    let res = await postComment(num, commentSubmit, data, commentFormData, additionalFormData).catch(debug);
    if (!res) return falseString(stR_error_badRequest);
    let splits = res.split('||');
    if (splits.length > 2 && splits[2] == 'v3') {
        data[grecaptcha] = await executeCaptcha('comment_submit');
        res = await postComment(num, commentSubmit, data, commentFormData, additionalFormData).catch(debug);
    }
    try {
        let number = parse(res);
        if (number) return 'true||' + number;
        else return res;
    } catch {
        return res;
    }
}

submit.onclick = async() => {
    if (!input.value) return;
    let title = input.value ?? '';
    input.value = '';
    input.oninput();
    if (targetPostNum == 0) {
        let { r, p } = initPromise();
        if (lastFileData && !lastFileData.upload) {
            if (lastFileData.error) {
                openModal({
                    title: str_postErrorImageTitle,
                    desc: str_postErrorImageDesc,
                    options: [{
                        text: str_yes,
                        [onclick]: (close) => {
                            r(true);
                            close();
                        }
                    }, {
                        text: str_cancel,
                        [onclick]: (close) => {
                            r(false);
                            close();
                        }
                    }],
                });
                if (!await p.catch(debug)) return;
            }
            return openAlert(str_pendingUpload);
        }
        let splits = title.split('\n');
        title = splits[0];
        let body = '';
        for (let i = 1; i < splits.length; i++) {
            body += `<p>${splits[i]}</p>`;
        }
        body += str_lineBreak + `<p style="color:#ABABAB;">- ${str_dclivechat} ${randomBlanks(20)}</p>`;
        onWritePost(await writePost(title, body).catch(debug));
    } else {
        lastSigniture = randomBlanks(commentSignitureLength);
        onWriteComment(await writeComment(targetPostNum, title + lastSigniture, targetCommentNum).catch(debug), targetPostNum);
    }
    if (bMobileDevice) input.focus();
}

//#endregion

loadOptions();
debug('INIT done');
})().catch(reason => console.log(reason));