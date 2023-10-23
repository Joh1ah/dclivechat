/** 
 * DC 라이브챗 by Joh1ah (좋1아)
 * git: https://github.com/Joh1ah/dclivechat
 */
(async() => {
/**
 * NOTE: 빌드된 코드를 웹에서 로드하도록 변경 - 2.0.0-20230125
 *
 * 모든 코드를 인라인으로 만들겠다는 고집을 버리고
 * 2.x 버전부터는 전부 웹상(Github Pages)에서
 * 코드를 불러와 실행하는 식으로 변경함
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
// let str_replaceImage = decode('7J2066-47KeA66W8IOuwlOq-uOyLnOqyoOyKteuLiOq5jD8.');
/** "이미지는 한 번에 하나씩 올릴 수 있습니다." */
// let str_imageOver = decode('7J2066-47KeA64qUIO2VnCDrsojsl5Ag7ZWY64KY7JSpIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "바꾸기" */
// let str_replace = decode('67CU6r646riw');
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
// let str_reloadCaptcha = decode('7IOI66Gc7Jq0IOydtOuvuOyngOuhnCDrs4Dqsr0.');
/** "이미지만 올릴 수 있습니다." */
let str_notImage = decode('7J2066-47KeA66eMIOyYrOumtCDsiJgg7J6I7Iq164uI64ukLg..');
/** "채팅이 비활성화된 갤러리입니다." */
let str_chatDisabled = decode('7LGE7YyF7J20IOu5hO2ZnOyEse2ZlOuQnCDqsKTrn6zrpqzsnoXri4jri6Qu');
/** `         ` */
let str_blanks = decode('4oCA4oCB4oCE4oCF4oCG4oCH4oCI4oCJ4oCK');
/** "댓글수 하이라이트" */
let str_settings_commentHighlight = decode('64yT6riA7IiYIO2VmOydtOudvOydtO2KuA..');
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

/** "이제 글을 오른쪽 클릭하면<br>다음 메뉴를 사용할 수 있습니다!" */
let str_features = decode('7J207KCcIOq4gOydhCDsmKTrpbjsqr0g7YG066at7ZWY66m0PGJyPuuLpOydjCDrqZTribTrpbwg7IKs7Jqp7ZWgIOyImCDsnojsirXri4jri6Qh');

//#endregion

//#region 전역 상수

let doc = document;
let body = doc.body;
let head = doc.head;
let storage = localStorage ?? null;
let bWorkerAvailable = window.Worker && true;
let bClipboardReadAvailable = window.navigator.clipboard.read && true;

let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);

let intervalPresets = [ 5000, 3000, 1000 ];
let minInterval = 2000; 
let maxPost = 80;
let maxCommentOnPage = 20;
let maxOpened = 5;
let commentSignitureLength = 8;
let highlightDuration = 500;

// 자주 쓰이는 함수 이름
// let getElementById = 'getElementById';
let getElementsByClassName = 'getElementsByClassName';
// let getElementsByName = 'getElementsByName';
let getElementsByTagName = 'getElementsByTagName';
let querySelector = 'querySelector';
let innerText = 'innerText';
let placeholder = 'placeholder';
let onclick = 'onclick';
// let globalCompositeOperation = 'globalCompositeOperation';

// document에 할당하여 실행할 전역 함수 이름
let appName = 'dclivechat';
let openLinkFuncName = 'onopenlink';
let onImageErrorFuncName = 'ondcconerror';
let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 클래스 이름
let hidden = 'hidden';
let disabled = 'disabled';

// 자주 쓰이는 HTML 태그 이름
let divString = 'div';
let spanString = 'span';

// captcha
let grecaptchaToken = 'g-recaptcha-token';
let grecaptchaResponse = 'g-recaptcha-response';
let grecaptchaBlock = '6Lc-Fr0UAAAAAOdqLYqPy53MxlRMIXpNXFvBliwI';

// 자주쓰는 웹폰트 아이콘
let sub = 'subdirectory_arrow_right';
let arrow = 'arrow_downward';

let newRegex = (string, g = true) => {
    string = string.r('?', '\\?');
    if (g) return new RegExp(string, 'g');
    return new RegExp(string);
};

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
let deleteSubmit = boardForms + '/delete_submit';
let deletePasswordSubmit = boardForms + '/delete_password_submit';
let commentDeleteSubmit = '/board/comment/comment_delete_submit';

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
let gallName = '';
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
let interval = intervalPresets[0];
let lastNum = 0;
let newPostCount = 0;
let bPullDown = true;
let bFirstUpdate = true;
let bGreeted = false;
let scrollSus = 99999;

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

let loop = null;
let worker = null;

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
/*
let escapeHtml = (unsafe) => {
    return unsafe
        // .r(/&/g, "&amp;")
        // .r(/</g, "&lt;")
        // .r(/>/g, "&gt;");
        .r(/&/g, '&amp;')
        .r(/#/g, '&#035;')
        .r(/'/g, '&#039;')
        .r(/</g, '&lt;')
        .r(/>/g, '&gt;')
        .r(/"/g, '&quot;');
};
*/
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
let blanks = str_blanks.split('');
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
    let _debug;
    try {
        _debug = debug;
    } catch {
        _debug = console.log;
    }

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
        _DEBUG: _debug,
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
    _DEBUG: _debug,
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

//#endregion

//#region Fetch 함수

// GET
let genFetch = () => {
    let _debug;
    try {
        _debug = _DEBUG;
    } catch {
        _debug = debug;
    }
    let getAsText = async (url, options = {}) => {
        if (!options.credentials) options.credentials = 'include';
        let res = await fetch(url, options).catch(_debug);
        if (!res || !res.ok) return '';
        return (await res.text().catch(_debug)).replace(/(\n|\r|\t)/g, '');
    };
    return { _TEXT: getAsText };
}
let { _TEXT: getAsText } = genFetch();

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
let postDelete = async (num, password = '') => {
    let html = await getAsText(getDeleteUrl(num));
    if (!html) return falseString('not available');
    let data = {
        [grecaptchaResponse]: '',
        _GALLTYPE_: gallType,
    };
    if (!getFormData(html, 'delete', data)) return falseString('no form');
    let secret = getSecretString(html);
    if (!secret) return falseString('no secret');
    data.service_code = getSecondServiceCode(data.service_code, secret);
    let match = html.match(/formData \+= "&([0-9a-z]+)=([0-9a-z]+)&/);
    if (!match) return falseString('not valid');
    data[match[1]] = match[2];
    if (password) data.password = password;
    // dcc_key_v1
    match = html.match(/dcc_key_v1 = document.getElementById\(["']([^"']+)["']\).getAttribute\(["']([^"']+)["']/);
    if (match) {
        let dcc_key_v1 = html.match(new RegExp(`<input[^>]+id=["']${match[1]}["'][^>]*>`));
        if (dcc_key_v1) data.dcc_key_v1 = getAttribute(dcc_key_v1[0], match[2]);
    }
    return await useCaptcha(postWrite, [ password ? deletePasswordSubmit : deleteSubmit ], data, 'delete_submit');
}
// 댓글 쓰기
let postComment = async (num, url, ...datas) => {
    let body = serializeForm(...datas);
    let options = {
        headers: formDataHeaders,
        referrer: getPostUrl(num),
    }
    return postAsText(url, options, body).catch(debug);
};

let postDeleteComment = async (commentNum, { num, id, value, vCurT }, password = '') => {
    let data = {
        ci_t: getCookie('ci_c'),
        id: gallId,
        re_no: commentNum,
        mode: 'del',
        [grecaptchaResponse]: '',
        _GALLTYPE_: gallType,
    };
    if (password) {
        data[id]= value,
        data.no = num;
        data.re_password = password;
        data.v_cur_t = vCurT;
    }
    return await useCaptcha(postComment, [ commentNum, commentDeleteSubmit ], data, 'comment_delete_submit');
};

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

let savedDccons = {};
let savedPackageTitles = [];
let loadingDccon = false;
let pending = [];
let _loadDcconDetail = async () => {
    if (!pending.length) return loadingDccon = false;
    let array = pending.shift();
    let code = array[0];
    let r = array[1];
    if (savedDccons[code] != undefined) return r(savedDccons[code]), timeout(_loadDcconDetail, 1); // proceed to next
    let json = await postDcconPackageDetail(code).catch(debug);
    if (!json) return r();
    let packageTitle = json['info']['title'];
    let packageIdx = json['info']['package_idx'];
    let details = [];
    for (let detail of json['detail']) {
        details.push({
            title: detail['title'],
            // idx: detail['idx'],
            buy: false,
            package_idx: packageIdx,
            package_title: packageTitle,
            code: detail['path']
        });
        }
    let package = {
        title: packageTitle,
        idx: packageIdx,
        buy: false,
        code: json['info']['list_img_path'],
        detail: details
    };
    savePackage(package);
    r(savedDccons[code]), timeout(_loadDcconDetail, 1);
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

let savePackage = (package) => {
    let savedPackages = getOption('dccon-pk') ?? {};
    if (savedPackages[package.idx] != undefined) {
        let existing = savedPackages[package.idx];
        if (existing.buy || !package.buy) return;
        existing.detail = package.detail;
        existing.buy = true;
    } else {
        savedPackages[package.idx] = package;
    }
    applyOption('dccon-pk', savedPackages);
};
let getPackage = (packageTitle) => {
    let savedPackages = getOption('dccon-pk');
    if (!savedPackages) return null;
    for (let idx in savedPackages) {
        if (savedPackages[idx].title == packageTitle) return savedPackages[idx];
    }
    return null;
}
let getDccon = (packageTitle, dcconTitle) => {
    let package = getPackage(packageTitle);
    if (!package || !package.detail) return null;
    for (let detail of package.detail) {
        if (detail.title == dcconTitle) return detail;
    }
    return null;
}

let getDcconUrl = (packageTitle, dcconTitle) => {
    let dccon = getDccon(packageTitle, dcconTitle);
    if (!dccon) return null;
    return getDcconUrlFromCode(dccon.code);
}
let getDcconUrlFromCode = (code) => https + 'dcimg5.dcinside.com/dccon.php?no=' + code;

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
    let maxPage = 1;
    if (target == 'recent') { // target: recent
        let detail = [];
            for (let item of list) {
                let match = item['list_img'].match(regexDcconId);
                if (!match) continue;
            detail.push({
                package_title: str_recently,
                package_idx: item['package_idx'],
                idx: item['idx'],
                code: match[1],
                title: item['title'],
            });
        }
        let package = {
            title: str_recently,
            idx: -1,
            detail: detail,
        };
        createPackagePage(package);
    } else if (target == 'icon') { // target: icon
        maxPage = json['max_page'];
        for (let item of list) {
            let packageTitle = item['title'];
            let packageIdx = item['package_idx'];
            let code = item['main_img_url'].match(regexDcconId);
            if (!code) continue;
            let detail = [];
            for (let dccon of item['detail']) {
                    let match = dccon['list_img'].match(regexDcconId);
                    if (!match) continue;
                detail.push({
                    package_title: packageTitle,
                    package_idx: packageIdx,
                    idx: dccon['detail_idx'],
                    buy: true,
                    code: match[1],
                    title: dccon['title'],
                });
            }
            let package = {
                title: packageTitle,
                idx: packageIdx,
                buy: true,
                code: code[1],
                detail: detail,
            };
            createPackagePage(package);
            savePackage(package);
        }
    }
    return maxPage;
}
let loadDcconList = async (target) => {
    if (target == 'recent') {
        await _loadDcconList(target, 0);
    }
    if (target == 'icon') {
        let maxPage = Math.min(await _loadDcconList(target, 0), 20);
        for (let page = 1; maxPage >= page; page++) {
            await _loadDcconList(target, page);
        }
    }
}
let insertDccon = async (dccon) => {
    if (!dccon.buy) return openAlert(str_notBought);
    let packageIdx = dccon.package_idx;
    let detailIdx = dccon.idx;
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
        [grecaptchaResponse]: '',
        check_6: undefined,
        check_7: undefined,
        check_8: undefined,
        _GALLTYPE_: gallType,
    };
    await useCaptcha(postWrite, [ dcconInsertIcon ], data, 'insert_icon');
    populatePackage('recent').catch(debug);
}
let insertDcconComment = async (dccon, num) => {
    if (!dccon.buy) return openAlert(str_notBought);
    let packageIdx = dccon.package_idx;
    let detailIdx = dccon.idx;
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
        [grecaptchaResponse]: '',
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
let replacedErrorIndex = 0;
// 디시콘에서 호출하는 기존 스크립트 차단
let neutralizeDccon = (string) => {
    string = string
        .r(/onmousedown="[^"]+"/g, '')
        .r(/class="written_dccon[^"]*"/g, 'class="d"');
    let matches = string.matchAll(/onerror="[^"]+"/g);
    for (let match of matches) {
        replacedErrorIndex++;
        let id = 'error-' + replacedErrorIndex;
        string = string.r(match[0], `id="${ id }" onerror="window.postMessage(JSON.stringify({type:'${onImageErrorFuncName}',id:'${ id }' }),'*')"`);
    }
    return string;
};

//#endregion

//#region 기타 함수

// 하이퍼링크를 앱에서 열리는 링크로 대체
let onclickFunc = (encoded) => `onclick="window.postMessage(JSON.stringify({type:'${openLinkFuncName}',url:'${encoded}' }),'*')"`;
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

let getDownloadUrl = (id) => 'https://image.dcinside.com/viewimage.php?id=&no=' + id;

let replaceImage = (string, id) => {
    let matches = string.matchAll(/<(img|video)[^>]*src="[^">]+no=([0-9a-zA-Z]+)[^">]*"[^>]*>/g);
    for (let match of matches) {
        let imageMatch = match[0];
        let replaced = imageMatch;
        let src = match[2];
        if (DEBUG) debug('src', src);

        if (/class="d"/.test(imageMatch)) continue;
        
        let classMatch = imageMatch.match(/class="([^"]+)"/);
        if (classMatch) {
            replaced = replaced.r(classMatch[0], `class="${ classMatch[1] } img"`);
        } else {
            replaced = replaced.r('>', '') + ' class="img">';
        }

        let clickMatch = imageMatch.match(/on[Cc]lick="[^"]+no=([0-9a-zA-Z]+)[^"]*"/);
        if (clickMatch) {
            // if there is onclick func ... it means it has original image
            replaced = replaced.r(clickMatch[0], `onclick="window.postMessage(JSON.stringify({type:'${onImageClickFuncName}',src:'${ getDownloadUrl(clickMatch[1]) }',id:'${ id }'}))" data-osrc="${ getDownloadUrl(clickMatch[1]) }"`);
        } else {
            replaced = replaced.r('>', '') + ` onclick="window.postMessage(JSON.stringify({type:'${onImageClickFuncName}',src:'${ getDownloadUrl(src) }',id:'${ id }'}))" data-osrc="${ getDownloadUrl(src) }" draggable="false">`;
        }
        string = string.r(imageMatch, replaced);
    }
    return string;
};

let setIntervalIndex = (index) => {
    interval = intervalPresets[index];
    if (worker) worker.postMessage({type:'iv', iv: interval});
};

/*
let updateFormData = (html, data) => {
    for (let id in data) {
        let value = html[querySelector]('#' + id);
        if (value) data[id] = value.value;
        else {
            value = html[querySelector](`[name='${ id }']`);
            if (value) data[id] = value.value;
        }
    }
    if (!gallType && formData._GALLTYPE_) gallType = formData._GALLTYPE_;
    if (!gallNum && formData.gallery_no) gallNum = formData.gallery_no;
    if (formData.r_key) rKey = formData.r_key;
};
*/

let updateFormDataV2 = (text, data) => {
    for (let id in data) {
        let value = getValueById(text, id);
        if (value) data[id] = value;
    }
    if (!gallType && formData._GALLTYPE_) gallType = formData._GALLTYPE_;
    if (!gallNum && formData.gallery_no) gallNum = formData.gallery_no;
    if (formData.r_key) rKey = formData.r_key;
};
let updateFormDataV3 = (text, data) => {
    let matches = text.matchAll(/<input[^>]+name=["']([^"']+)["'][^>]+value=["']([^"']*)["']/g);
    if (!matches) return;
    for (let match of matches) {
        data[match[1]] = match[2];
    }
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
        idMatch = match[2].match(/(board|mini)\/([A-Za-z0-9_]+)($|\?|\/|#)/);
        bMinor = (doc[getElementsByClassName]('micon').length > 0);
        bMini = (doc[getElementsByClassName]('mnicon').length > 0)
    }
    if (!idMatch || !idMatch.length) return onInvalidPage(str_noGalleryPageUrl);
    gallId = bMobile ? idMatch[2] : idMatch[1];
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
let clearSaveData = () => saveOptions({});
// 로드는 초기화 마지막 순서로

// blocked
let getBlockAll = () => {
    let json = storage?.getItem('block_all');
    if (!json) return {
        on: 1,
        word: '',
        id: '',
        nick: '',
        ip: '',
    };
    return JSON.parse(json);
};
let getBlockParts = () => {
    let json = storage?.getItem('block_parts');
    if (!json) return {};
    return JSON.parse(json);
};
let getBlockGall = (id, name) => getBlockParts()[id] ?? {
    on: 1,
    word: '',
    id: '',
    nick: '',
    ip: '',
    name: name,
};
let setBlockAll = (o) => storage?.setItem('block_all', JSON.stringify(o));
let setBlockParts = (o) => storage?.setItem('block_parts', JSON.stringify(o));

let isBlocked = (postData, blockData) => {
    if (!blockData.on) return false;
    return _isBlocked(postData, 'title', blockData, 'word', true)
        || _isBlocked(postData, 'nickname', blockData, 'nick')
        || _isBlocked(postData, 'id', blockData, 'id')
        || _isBlocked(postData, 'ip', blockData, 'ip');
}
let _isBlocked = (postData, key, blockData, id, include = false) => {
    if (!blockData[id]) return false;
    let splits = split(blockData[id]);
    for (let split of splits) {
        if (include) {
            if (postData[key].includes(split)) return true;
        } else {
            if (postData[key] == split) return true;
        }
    }
    return false;
};
let updateBlockAll = (o) => {
    o.on = 1;
    setBlockAll(o);
    for (let line of chatLines) {
        if (isBlocked(line, o)) addClass(line.chat, 'block');
        else removeClass(line.chat, 'block');
    }
}
let updateBlockGall = (o, id) => {
    o.on = 1;
    let blockParts = getBlockParts();
    blockParts[id] = o;
    setBlockParts(blockParts);
    for (let line of chatLines) {
        if (isBlocked(line, o)) addClass(line.chat, 'block');
        else removeClass(line.chat, 'block');
    }
}
let addBlock = (o, key, keyword) => {
    let splits = split(o[key]).filter(t => t != '');
    if (!splits.includes(keyword)) splits.push(keyword);
    o[key] = splits.join('||');
}
let removeBlock = (o, key, keyword) => {
    let splits = split(o[key]).filter(t => t != '');
    for (let i = 0; i < splits.length; i++) {
        let split = splits[i];
        if (split == keyword) {
            splits.splice(i, 1);
            break;
        }
    }
    o[key] = splits.join('||');
}

(async() => {
    let html = await getAsText(getListUrl()).catch(debug);
    let loginBox = getInnerHtml(html, divString, 'login_box');
    if (DEBUG) debug('login', loginBox);
    if (loginBox) {
        let string = getInnerHtml(loginBox, 'button', 'btn_inout');
        if (DEBUG) debug('string', string);
        if (string && string == str_logout) {
            bLogin = true;
            let nickname = getInnerText(loginBox, 'strong', 'nickname');
            if (nickname) userNickname = nickname;
            let nikcon = getOuterHtml(loginBox, 'strong', 'writer_nikcon');
            if (nikcon) {
                let match = getAttribute(nikcon, 'onClick').match(/\/([a-zA-Z0-9_-]+)['"]/);
                if (match) userId = match[1];
                match = nikcon.match(/src=["']([^"']+)["']/);
                if (match) {
                    userImg = match[1];
                    bUserFix = testFix(match[1]);
                }
                
            }
        }
    }
    if (DEBUG) debug('login', bLogin);
    onLoginChecked?.();

    // gall name
    gallName = getValueById(html, 'gallery_name');
    blockGallLabel[innerText] = str_blockGall + ' - ' + gallName;
})();

// 기존 화면 제거
clearChildren(body);
addClass(body, hidden);

// 기존 타이머 제거
for (var i = 1; i < 99999; i++) window.clearInterval(i);
for (var i = 1; i < 99999; i++) window.clearTimeout(i);

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
    .r(/_r/g, 'relative')
    .r(/_a/g, 'absolute')
    .r(/_o/g, 'overflow')
    .r(/_f/g, 'flex')
    .r(/_F/g, 'font')
    .r(/_j/g, 'justify-content')
    .r(/_g/g, 'grid-')
    .r(/_c/g, 'calc')
    .r(/_x/g, '100%')
if (bMobileSafari) {
    stylesheet = stylesheet.r(/_s/g, '');
} else {
    stylesheet = stylesheet.r(/_s/g, ' or (max-width:700px)');
}
createElement('style', head, { [innerText]: stylesheet });
createElement('link', head, {
    rel: 'stylesheet',
    href: https + 'fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
});

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

// #####################################################################
// ####################  UI  ###########################################
// #####################################################################
//#region 

if (DEBUG) debug('ui');

logDiv = createElement(divString, body, 'log', hidden);
scrollToTop();

let dropArea = createElement(divString, body, 'o');
createElement(divString, dropArea, { [innerText]: str_dragAndDrop } , 'drop');

let overlay = createElement(divString, body, 'o');
let renderOverlay = (bForce = false) => {
    if (DEBUG) debug('render overlay', (bForce && overlay.childNodes.length == 1), overlay.childNodes.length);
    if ((bForce && overlay.childNodes.length == 1) || !overlay.lastChild) removeClass(overlay, 'wait');
    else addClass(overlay, 'wait');
    if (overlay.childNodes.length === 0) preventEnter = false;
    else preventEnter = true;
}
let enterUp = true;
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
    let modal = createElement(divString, overlay, 'modal');
    if (title) createElement(divString, modal, { [innerText]: title }, 'tt');
    let content = createElement(divString, modal, 'desc');
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
    let optionContainer = createElement(divString, modal, 'opts.fr');
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
            createElement(spanString, button, { [innerText]: option.text });
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
    let postContent = document[querySelector]('#' + id);
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
    let container = createElement(divString, overlay, { [onclick]: () => {
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

    let controls = createElement(divString, container, 'fr');
    let download = createElement('a', controls, { [onclick]: () => {
        clicked = true;
        let temp = createElement('a', null, { href: curImg.src, download: '' });
        temp.click();
        temp.remove();
        request(() => clicked = false);
    }}, 'b');
    createIcon(download, 'download');
    createElement(spanString, download, { innerText: str_download });

    renderOverlay();
};

let addTooltip = (element, { text, top = false }, ...classes) => {
    addClass(element, 'has-tooltip');
    let tooltip = createElement(divString, element, 'tooltip', top ? 'tp' : 'bt',  ...classes);
    createElement(spanString, tooltip, { innerText: text });
    return tooltip;
};

let contextmenu;
let addContextMenu = (element, options = []) => {
    element.oncontextmenu = (ev) => {
        ev.preventDefault();
        let x = ev.clientX;
        let y = ev.clientY;
        if (contextmenu) contextmenu.remove();
        contextmenu = createElement(divString, body, 'p.ctx');
        contextmenu.style.left = x + 'px';
        contextmenu.style.top = y + 'px';
    
        for (option of options) {
            if (option.hr) {
                createElement('hr', contextmenu);
                continue;
            }
            let entry = createElement('a', contextmenu, 'fr.b');
            if (option.icon) createIcon(entry, option.icon);
            if (option.text) createElement(spanString, entry, { [innerText]: option.text });
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

createElement(divString, menu, { [onclick]: toggleMenu }, 'stretch');

let addVideoButton = createElement('a', menu, { [onclick]: () => {
    addClass(videoMain, 'go');
    removeClass(videoInputContainer, hidden);
} }, 'b');
createIcon(addVideoButton, 'add');
createElement(spanString, addVideoButton, { [innerText]: str_addVideo });

let relocating = false;
let relocateVideoButton = createElement('a', menu, 'b', disabled);
let relocateVideoButtonIcon = createIcon(relocateVideoButton, 'pan_tool');
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
        relocateVideoButtonIcon[innerText] = 'pan_tool';
        relocateVideoButtonSpan[innerText] = str_relocate;
        removeClass(videoMain, 'rlc');
    }
};

let closeAllVideosButton = createElement('a', menu, 'b', disabled);
createIcon(closeAllVideosButton, 'close');
createElement(spanString, closeAllVideosButton, { [innerText]: str_closeAll });

menuExpandButton = createIcon(createElement('a', menu, { [onclick]: toggleMenu }, 'b.fix-tl'), 'expand_less');

let videoInputContainer = createElement(divString, videoMain, 'p.fr.blank');
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
createElement(spanString, videoSubmit, {
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
    if (url == 'show log') return removeClass(logDiv, hidden);
    if (url == 'clear options') return clearSaveData();
    if (url == 'show options') return debug(_saveData);
    if (url == 'refresh update') return initUpdate();
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
    let videoDiv = createElement(divString, videoMain);
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
let bRefreshing = false;
let refresh = createElement('a', header, {
    [onclick]: () => {
        if (bRefreshing) return;
        bRefreshing = true;
        initUpdate('button');
        addClass(refreshIcon, 'rotate-ccw-half');
        timeout(() => {
            bRefreshing = false;
            removeClass(refreshIcon, 'rotate-ccw-half');
        }, 800);
    }
}, 'help.b.abs-tl');
let refreshIcon = createIcon(refresh, 'sync');
let help = createElement('a', header, { href: helpUrl, target: '_blank' }, 'help.b.abs-tr');
createIcon(help, 'help');
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
let getNotificationKey = (postNum, commentNum) => 'n' + postNum + '_' + commentNum;
let checkAddNotification = (postNum, commentNum, commentDiv = null) => {
    if (!listeningPost[postNum]) {
        if (DEBUG) debug('post', postNum, 'is not my post');
        return;
    }
    let key = getNotificationKey(postNum, commentNum);
    if (!listeningFunc[key]) {
        if (DEBUG) debug('comment', commentNum, 'is not a comment in interest');
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
    [onclick]: () => togglePullDown(),
    onscroll: (ev) => ev.preventDefault(),
}, 'r.pd.fr', (bMobileDevice ? 'm' : '_'), hidden);

let scrollDownButtonDiv1 = createElement(divString, scrollDownButton, 'not-hover');
createIcon(scrollDownButtonDiv1, (bMobileDevice ? arrow : 'pause'));
createElement(spanString, scrollDownButtonDiv1, { [innerText]: str_pullDown }, 'text', (bMobileDevice ? hidden : '_'));
let scrollDownButtonDiv2 = createElement(divString, scrollDownButton, 'hover');
createIcon(scrollDownButtonDiv2, arrow);
let newMessageSpan = createElement(spanString, scrollDownButtonDiv2, { [innerText]: str_pullDownHover }, 'text', (bMobileDevice ? hidden : '_'));

// 채팅창이 스크롤될 시 고정 여부를 다시 판단
let diff = () => Math.abs(chatPage.scrollHeight - chatViewport.clientHeight - chatViewport.scrollTop);
let lastDiff = 0;
chatViewport.onscroll = () => {
    let curDiff = diff();
    let change = lastDiff - curDiff;
    lastDiff = curDiff;
    if (curDiff < 2) checkMaxPost();
    if (change == 0) return;
    // upward
    if (change < 0 && bPullDown && curDiff > 2) {
        if (scrollSus == 0) return togglePullDown();
        scrollSus = Math.max(scrollSus - 1, 0);
        return;
    }
    // downward
    if (!bPullDown && curDiff < 2) togglePullDown();
}

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
        removeChat(childNode);
    }
}
let removeChat = (element) => {
    for (let i = 0; i < chatLines.length; i++) {
        let line = chatLines[i];
        if (line.chat == element) {
            chatLines.splice(i, 1);
            break;
        }
    }
    let removed = element[getElementsByClassName]('removed');
    if (removed && removed.length) removed[0].value = true;
    element.remove();
    pullDown(true);
}

// 채팅창 스크롤 고정 효과
let _pullDown = () => chatViewport.scrollTop = chatPage.scrollHeight;
pullDown = (bForced = false) => {
    scrollSus = bForced ? 1 : 0;
    if (!bPullDown) return;
    return _pullDown();
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

let chatLines = [];
let postContentDatas = {};
let postCommentCount = {};
let onPostCommentCountChanged = {};
let postCommentDatas = {};

let showLine = (div) => {
    if (!bPullDown) setNewPostCount(newPostCount + 1);
    removeClass(div, hidden);
    pullDown(true);
}
let newLine = async (postData) => {
    let num = postData.num;
    let line = createElement(divString, chatPage, 'chl', hidden);
    // 이미 채팅창에서 제거된 요소인지 여부를 저장
    let removed = createElement('input', line, { type: hidden, value: false, }, 'removed');
    let titleDiv = createElement(divString, line, 'tt.r');
    let inline = createElement(spanString, titleDiv);
    let name = postData.nickname;
    let ip = postData.ip;
    let title = unescapeEmoji(decodeURIComponent(postData.title));
    let id = postData.id;
    let img = postData.img;
    let fix = postData.fix;
    let my = postData.my ?? false;

    let blockAll = getBlockAll();
    let blockGall = getBlockGall(gallId, gallName);
    let blocked = isBlocked(postData, blockAll) || isBlocked(postData, blockGall);
    if (blocked) addClass(line, 'block');

    chatLines.push({
        chat: line,
        title: title,
        id: id,
        ip: ip,
        nickname: name
    });

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
            replaceDccon(titleSpan, dcconString, url);
            pullDown(true);
            continue;
        }
        waitingForFetch.push([dcconString, packageName, dcconName]);
        if (fetchingDcconInfo) continue;
        fetchingDcconInfo = true;
        (async () => {
            let { write } = await getPostContent(postData.num).catch(debug);
            if (!write) return;
            let imgs = getOuterHtmlAll(write, 'img', 'written_dccon');
            for (let img of imgs) {
                let match = getAttribute(img, 'src').match(regexDcconId);
                if (match) await loadDcconDetail(match[1]).catch(debug);
                else {
                    let match = getAttribute(img, 'data-src').match(regexDcconId);
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

    let postContentVp;
    // 글 본문
    if (num) {
        titleDiv.id = getNotificationKey(num, 0);
        
        let postContent = createElement(divString, line, 'w.zero');
        postContentVp = createElement(divString, postContent, 'vp.post');
        let postContentPage = createElement(divString, postContentVp, { id: 'pc-' + num }, 'page.pc');
    
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

            getPostContent(num).catch(debug).then(({text}) => {
                const iframes = text.matchAll(/<iframe[^>]*id="movieIcon([^"]*)"[^>]*>[^<]*<\/iframe>/g);
                if (iframes && true) (async() => {
                    for (const iframe of iframes) {
                        const movieUrl = host + 'board/movie/movie_view?no=' + iframe[1];
                        const movieText = await getAsText(movieUrl);
                        if (!movieText) continue;
                        const videoUrl = movieText.match(/<video[^>]*poster="([^"]*)"[^>]*>[^<]*<source[^>]*src="([^"]*)"[^>]*type="([^"]*)"[^>]*>/);
                        if (!videoUrl) continue;
                        const temp = createElement(divString, null, 'v-container');
                        const wrap = createElement(divString, temp, 'video_wrap');
                        createElement('source', 
                            createElement('video', 
                                createElement(divString, wrap, 'video_inbox'),
                                {
                                    controls: true,
                                    playsinline: true,
                                    controlslist: 'nodownload',
                                    poster: videoUrl[1],
                                    'data-no': iframe[1],
                                },
                                'dc_mv'
                            ),
                            { src: videoUrl[2], type: videoUrl[3] }
                        );
                        text = text.r(iframe[0], temp.outerHTML);
                        temp.remove();
                    }
                    postContentPage.innerHTML = text;
                })();
                else postContentPage.innerHTML = text;
            });
        };

        titleDiv.onclick = () => {
            bHiddenPostContent = !bHiddenPostContent;
            if (targetPostNum == num) setTarget(0);
            // 닫을 때
            if (bHiddenPostContent) {
                splice(openedList, titleDiv);
                addClass(postContent, 'zero');
                removeClass(line, 'open');
                while (postContentPage.lastChild) {
                    postContentPage.lastChild.remove();
                }
                pullDown();
                renderCloseAllButton();
                return;
            };
            // 열 때
            onOpenPostContent();
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
            else addClass(postComment, hidden);
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
                let myComment = text.length > commentSignitureLength && text.substring(text.length - commentSignitureLength) == lastSigniture;
                if (myComment) {
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

                // delete
                let contextOptions = [{
                    text: str_delete,
                    icon: 'delete',
                    [onclick]: async () => {
                        let password = '';
                        let { delId, delValue, vCurT } = await getPostContent(num).catch(debug);
                        if (ip || comment.ip) {
                            let { r, p } = initPromise();
                            let modal = openModal({
                                title: str_password,
                                input: password,
                                nowrap: true,
                                options: [{
                                    text: str_confirm,
                                    [onclick]: (close) => {
                                        password = modal.input.value;
                                        if (password.length < 2) return openAlert(str_shortPassword);
                                        close();
                                        r(true);
                                    }
                                }, {
                                    text: str_cancel,
                                    [onclick]: (close) => {
                                        close();
                                        r(false);
                                    }
                                }]
                            });
                            if (!await p) return;
                        }
                        let res = await postDeleteComment(commentNum, { num: num, id: delId, value: delValue, vCurT: vCurT }, password);
                        if (!res) openAlert(str_error_generic);
                        let splits = res.split('||');
                        if (splits[0] == 'true') {
                            commentEntry.remove();
                            return updateComment();
                        }
                        if (splits.length == 1) return openAlert(res);
                        openAlert(str_error_generic);
                    }
                }];
                if (my || ip || myComment || comment.ip || comment.id == userId) addContextMenu(commentEntry, contextOptions);
            }
            checkAnyMore();
            pullDown(true);
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
        onPostCommentCountChanged[num] = (newCount = -1, bForced = false) => {
            if (removed.value != 'false') {
                delete onPostCommentCountChanged[num];
                return;
            }
            let func = () => {
                if (newCount == -1) newCount = postCommentCount[num] + 1;
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
                } else {
                    addClass(commentCount, hidden);
                }
                if (!bHiddenPostContent || listeningPost[num]) updateComment().catch(debug);
            }
            // 댓글 수 변하는 타이밍을 임의로 설정
            if (bForced) func();
            else timeout(func, randomInt(1, interval));
        };
    }

    if (postData.date) {
        // 글 올라오는 타이밍을 시뮬레이션
        let simulatedDelay = getNow() - postData.date;
        if (simulatedDelay > interval || !bGreeted) showLine(line);
        timeout(() => showLine(line), interval - simulatedDelay);
    } else {
        showLine(line);
    }
    if (!bPullDown) checkMaxPost();

    // context menu
    let contextOptions = [];
    if (my || ip || (bLogin && id == userId)) contextOptions.push({
        text: str_delete,
        icon: 'delete',
        [onclick]: () => {
            openModal({
                title: str_deleteTitle,
                desc: str_deleteDesc,
                options: [{
                    text: str_confirm,
                    enter: true,
                    [onclick]: async (close, wait) => {
                        wait();
                        let password = '';
                        if (ip) { // 유동 삭제
                            let { r, p } = initPromise();
                            let pwModal = openModal({
                                title: str_password,
                                input: password,
                                nowrap: true,
                                options: [{
                                    text: str_confirm,
                                    enter: true,
                                    [onclick]: (_close, _wait) => {
                                        password = pwModal.input.value;
                                        if (password.length < 2) return openAlert(str_shortPassword);
                                        r(true);
                                        _close();
                                    }
                                }, {
                                    text:str_cancel,
                                    [onclick]: (_close) => {
                                        r(false);
                                        _close();
                                    }
                                }]
                            })
                            if (!await p) return close();
                        }
                        let res = await postDelete(num, password);
                        close();
                        let splits = res.split('||');
                        if (splits[0] == 'false') return openAlert(splits[1]);
                        removeChat(line);
                    }
                }, {
                    text: str_cancel
                }]
            })
        }
    }, {
        hr: true,
    });
    if (num) {
        contextOptions.push({
            text: str_openInNew,
            icon: 'open_in_new',
            [onclick]: () => {
                let temp = createElement('a', null, { href: getPostUrl(num), target: '_blank' });
                temp.click();
                temp.remove();
            }
        }, {
            text: str_copyUrl,
            [onclick]: () => {
                window.navigator.clipboard.writeText(getPostUrl(num));
            }
        });
        if (!my && (ip || id != userId)) {
            // 차단
            contextOptions.push({ hr: true });
            if (!ip) {
                // 고닉 차단
                contextOptions.push({
                    text: str_block_id,
                    [onclick]: () => {
                        openModal({
                            title: str_blockUserTitle,
                            desc: 'ID: ' + id,
                            options: [{
                                text: str_blockGall,
                                [onclick]: (close) => {
                                    let block = getBlockGall(gallId, gallName);
                                    block.on = 1;
                                    addBlock(block, 'id', id);
                                    updateBlockGall(block, gallId);
                                    close();
                                }
                            }, {
                                text: str_blockAll,
                                [onclick]: (close) => {
                                    let block = getBlockAll();
                                    block.on = 1;
                                    addBlock(block, 'id', id);
                                    updateBlockAll(block);
                                    close();
                                }
                            }, {
                                text: str_cancel,
                            }]
                        });
                    }
                });
            } else {
                // 유동 차단
                contextOptions.push({
                    text: str_block_ip,
                    [onclick]: () => {
                        openModal({
                            title: str_blockUserTitle,
                            desc: 'IP: ' + ip,
                            options: [{
                                text: str_blockGall,
                                [onclick]: (close) => {
                                    let block = getBlockGall(gallId, gallName);
                                    block.on = 1;
                                    addBlock(block, 'ip', ip);
                                    updateBlockGall(block, gallId);
                                    close();
                                }
                            }, {
                                text: str_blockAll,
                                [onclick]: (close) => {
                                    let block = getBlockAll();
                                    block.on = 1;
                                    addBlock(block, 'ip', ip);
                                    updateBlockAll(block);
                                    close();
                                }
                            }, {
                                text: str_cancel,
                            }]
                        });
                    }
                });
            }
            contextOptions.push({
                text: str_block_name,
                [onclick]: () => {
                    openModal({
                        title: str_blockUserTitle,
                        desc: name,
                        options: [{
                            text: str_blockGall,
                            [onclick]: (close) => {
                                let block = getBlockGall(gallId, gallName);
                                block.on = 1;
                                addBlock(block, 'nick', name);
                                updateBlockGall(block, gallId);
                                close();
                            }
                        }, {
                            text: str_blockAll,
                            [onclick]: (close) => {
                                let block = getBlockAll();
                                block.on = 1;
                                addBlock(block, 'nick', name);
                                updateBlockAll(block);
                                close();
                            }
                        }, {
                            text: str_cancel,
                        }]
                    });
                }
            });   
        }
    }
    if (contextOptions.length) {
        addContextMenu(titleDiv, contextOptions);
        addContextMenu(postContentVp, contextOptions);
    }
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
let inputNickname = createElement('input', loginInputContainer, { type:'text', [placeholder]: str_nickname, maxlength: 15, name: 'name' });
let inputPassword = createElement('input', loginInputContainer, { type:'password', [placeholder]: str_password, maxlength: 20, name: 'password' });
let captchaInputContainer = createElement(divString, loginInfoContainer, 'fr', hidden);
let captchaImageContainer = createElement('a', captchaInputContainer);
let captchaImage = createElement('img', captchaImageContainer, { [onclick]: () => renderInputCaptcha() }, 'captcha');
let inputCaptcha = createElement('input', captchaInputContainer, { type:'text', [placeholder]: str_code, maxlength: 20 });

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
    if (!bLogin && !getOption(str_settings_hideLogin)) {
        removeClass(loginInputContainer, hidden);
        removeClass(loginInputExpander, hidden);
        pullDown(true);
    } else {
        addClass(loginInfoContainer, hidden);
    }
    refreshWriteSession?.();
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
// createIcon(createElement('a', replyingTab, { [onclick]: () => setTarget(0) }, 'close'), 'cancel');

//#endregion

// #####################################################################
// ####################  INPUTS : CHAT  ################################
// #####################################################################
//#region 

if (DEBUG) debug('input chat');

let chatInputContainer = createElement(divString, chatContainer, 'ci-c');
let chatInputContainerFloat = createElement(divString, chatInputContainer, 'f');
let inputContainer = createElement(divString, chatInputContainerFloat, 'i');

// 채팅 입력란에 입력이 주어지면 높이를 다시 계산
let inputHeightName = '--ih';
let input = createElement('textarea', inputContainer, {
    [placeholder]: str_placeholderMessage,
    oninput: () => {
        setDocStyleProp(inputHeightName, (input.clientHeight + 12) + 'px');
        input.style.height = 0;
        input.style.height = (input.scrollHeight - 19) + 'px';
        pullDown(true);
        request(() => setDocStyleProp(inputHeightName, 0))
    },
    onblur: scrollToTop
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
        removeClass(lastTargetButtonSpan, 'f-white');
        addClass(replyInfoContainer, hidden);
        removeClass(chatViewport, 'r');
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
        removeClass(chatInputContainer, 'wr');
        input[placeholder] = str_placeholderMessage;
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
            input[placeholder] = str_placeholderReply;
            replyingNameSpan[innerText] = tCommentWriter;
            if (tCommentWriter != targetCommentWriter2) {
                replyingTypeNameSpan[innerText] = targetCommentWriter2;
                removeClass(replyingTypeIcon, hidden);
                removeClass(replyingTypeNameSpan, hidden);
            }
            replyingToSpan[innerText] = str_replyTo;
            tButton[innerText] = str_cancel;
            removeClass(tButton, 'f-white');
        } else {
            let postData = postContentDatas[num];
            replyingNameSpan[innerText] = postData.name;
            input[placeholder] = str_placeholderComment;
            replyingToSpan[innerText] = str_commentTo;
            tButton[innerText] = str_writeNewComment;
            addClass(tButton, 'f-white');
        }
        removeClass(replyInfoContainer, hidden);
        addClass(chatViewport, 'r');
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

let createPackagePage = (package) => {
    let packageIdx = package.idx;
    let packageTitle = package.title;
    let id = 'dc' + packageIdx;

    // make a package page
    let entry = createElement(divString, null, 'package');
    let existing = doc[querySelector]('#' + id);
    if (existing) {
        dcconPage.replaceChild(entry, existing);
    } else {
        dcconPage.appendChild(entry);
        // make a link in list
        let link = createElement('a', listPage, { href: '#' + id, [onclick]: () => {
            input.focus();
            scrollToTop();
        } });
        if (packageTitle == str_recently) createIcon(link, 'history');
        else createElement('img', link, { src: getDcconUrlFromCode(package.code) });
    }
    entry.setAttribute('id', id);
    createElement(spanString, createElement(divString, entry, 'hd.r'), { [innerText]: packageTitle });
    let flex = createElement(divString, entry, 'flex.fr');
    for (let dccon of package.detail) {
        let code = dccon.code;
        let title = dccon.title;
        let pTitle = dccon.package_title;
        createElement('img', flex, {
            loading: "lazy",
            src: getDcconUrlFromCode(code),
            [onclick]: async () => {
                let _dccon = await loadDcconDetail(code); // since package title could be 'latest'
                if (DEBUG) debug(pTitle, title, _dccon);
                if (isPostingWrite()) {
                    insertDccon(_dccon);
                    let _packageTitle = packageTitle;
                    if (packageTitle == str_recently) {
                        if (savedDccons[code] != undefined) _packageTitle = savedDccons[code].package_title;
                        else {
                            await loadDcconDetail(code);
                            _packageTitle = savedDccons[code].package_title;
                        }
                    }
                    input.focus();
                    input.value += ':' + _packageTitle + ', ' + title + ': ';
                } else {
                    insertDcconComment(_dccon, targetPostNum);
                }
            }
        }, 'd');
    }
}

let populatePackage = async (target) => {
    await loadDcconList(target).catch(debug);
}

onApplyFunc['dccon-pk'] = (packages) => {
    for (let title in packages) {
        if (savedPackageTitles.includes(title)) continue;
        let package = packages[title];
        for (let detail of package.detail) savedDccons[detail.code] = detail;
        savedPackageTitles.push(package.title);
    }
};

let panelHidden = true;
let bPopulated = false;
let togglePanel = () => {
    panelHidden = !panelHidden;
    if (panelHidden) {
        removeClass(dcconIcon, 'f');
        addClass(dcconPanel, hidden);
    } else {
        input.focus();
        addClass(dcconIcon, 'f');
        removeClass(dcconPanel, hidden);
        if (!bPopulated) {
            bPopulated = true;
            populatePackage('recent');
            populatePackage('icon');
        }
    };
    request(() => input.focus());
}
let dccon = createElement('a', chatInputContainerFloat, {
    onmousedown: () => togglePanel(),
}, 'd.b', disabled);
let dcconIcon = createIcon(dccon, 'mood');

//#endregion

// #####################################################################
// ####################  UPLOAD  #######################################
// #####################################################################
//#region 

if (DEBUG) debug('upload');

let uploadPanel = createElement(divString, chatInputContainerFloat, 'p.up.abs.vp.pv-vp', hidden);
let uploadPage = createElement(divString, uploadPanel, 'fr.page');
let addImage = createElement('a', uploadPage, {
    [onclick]: () => uploadInput.click()
}, 'pv.r.b.o-l');
createIcon(addImage, 'add_photo_alternate');
createElement(spanString, addImage, { [innerText]: str_uploadImage });

let zzal = null;
let omitZzal = false;
let files = [];

let panelToggled = false;
let renderUploadPanel = () => {
    if (zzal !== null) {
        if (!useZzal) addClass(zzal.preview, hidden);
        else {
            removeClass(zzal.preview, hidden);
            if (omitZzal) removeClass(zzal.preview, 'up');
            else addClass(zzal.preview, 'up');
        }
    }
    uploadNum[innerText] = files.length;
    if (files.length == 0) {
        addClass(uploadNum, hidden);
    } else {
        removeClass(uploadNum, hidden);
    }
    if (!panelToggled || !isPostingWrite()) {
        addClass(uploadPanel, hidden);
        removeClass(uploadIcon, 'f');
    } else {
        removeClass(uploadPanel, hidden);
        addClass(uploadIcon, 'f');
    }
};

let toggleUploadPanel = (bool = null) => {
    if (bool === null) panelToggled = !panelToggled;
    else panelToggled = bool;
    renderUploadPanel();
};

let createPreview = (parent, fileData) => {
    let preview = createElement(divString, parent, 'pv.r');
    let previewImageContainer = createElement(divString, preview, 'image');
    let previewImg = createElement('img', previewImageContainer);
    let previewDesc = createElement(divString, preview, 'desc');
    let name = createElement(spanString, previewDesc, { [innerText]: fileData.name }, 'file-name');
    createElement(spanString, previewDesc, { [innerText]: '(' + bytes(fileData.size) + ')' }, 'size');
    return {
        p: preview,
        c: previewImageContainer,
        i: previewImg,
        n: name
    };
}

// File을 받아 화면에 표시하고 필요한 정보를 담은 객체를 반환
let createFileData = (file) => {
    let { p: preview,
        c: previewImageContainer,
        i: previewImg,
    } = createPreview(uploadPage, file);
    let previewPending = createIcon(previewImageContainer, 'pending', 'pending.abs');
    let previewError = createIcon(previewImageContainer, 'warning', 'error.abs', hidden);
    let reader = new FileReader();
    reader.onload = () => previewImg.src = reader.result;
    reader.readAsDataURL(file);

    let { r, p } = initPromise();
    let fileData = {
        preview: preview,
        img: previewImg,
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
            for (let i = 0; i < files.length; i++) {
                let oldFile = files[i];
                if (fileData === oldFile) {
                    files.splice(i, 1);
                    break;
                }
            }
            renderUploadPanel();
            if (fileData.upload) postDeleteImage(fileData.num);
            else {
                await p.catch(debug);
                if (!fileData.error) postDeleteImage(fileData.num);
            }
        },
        p: p
    };
    files.push(fileData);

    let previewClose = createElement('a', preview, 'close.abs-tr.b');
    createIcon(previewClose, 'delete', 'f');
    previewClose.onclick = () => fileData.close();

    let onError = (reason, ...any) => {
        openAlert(reason);
        debug(reason, ...any);
        fileData.error = true;
        addClass(preview, 'error');
        removeClass(previewError, hidden);
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
};

let exportFileData = (fileData) => {
    return {
        name: fileData.name,
        size: fileData.size,
        type: fileData.type,
        url: fileData.url,
        src: fileData.img.src,
    };
};
let importFileData = (fileData) => {
    let { p: preview,
        i: previewImg
    } = createPreview(uploadPage, fileData);
    addClass(preview, 'up');
    previewImg.src = fileData.src;
    
    let imported = {
        preview: preview,
        img: previewImg,
        original: fileData.name,
        name: fileData.name,
        size: fileData.size,
        type: fileData.type,
        upload: true,
        file: null,
        error: false,
        num: null,
        url: fileData.url,
        close: () => {
            preview.remove();
            for (let i = 0; i < files.length; i++) {
                let oldFile = files[i];
                if (fileData === oldFile) {
                    files.splice(i, 1);
                    break;
                }
            }
            renderUploadPanel();
        },
    };

    let previewClose = createElement('a', preview, 'close.abs-tr.b');
    createIcon(previewClose, 'delete', 'f');
    previewClose.onclick = () => imported.close();

    return imported;
};

let setZzal = (fileData = null) => {
    if (zzal !== null) zzal.close();
    if (fileData === null) {
        zzal?.preview.remove();
        applyOption('zzal', '');
        removeClass(addZzal, hidden);
        zzal = null;
        return;
    }

    zzal = fileData;
    addClass(zzal.preview, 'o-f', 'z');
    for (let i = 0; i < files.length; i++) {
        if (files[i] === fileData) {
            files.splice(i, 1);
        }
    }
    fileData.close = () => {
        omitZzal = true;
    };
    
    let { p: preview, i: img, n: name } = createPreview(optionsWrite, fileData);
    addClass(preview, 'up', 'o-f');
    addClass(addZzal, hidden);
    let deleteZzal = createElement('a', preview, 'close.abs-tr.b');
    createIcon(deleteZzal, 'delete', 'f');
    deleteZzal.onclick = () => {
        openModal({
            desc: str_askDeleteZzal,
            options: [{
                text: str_yes,
                [onclick]: (close) => {
                    setZzal(null);
                    preview.remove();
                    close();
                },
                enter: true
            }, {
                text: str_cancel
            }]
        });
    };

    let onUpload = () => {
        img.src = fileData.img.src;
        name.innerText = fileData.name;
        let exported = exportFileData(fileData);
        applyOption('zzal', JSON.stringify(exported));
    };    
    if (fileData.upload) onUpload();
    else (async() => {
        await fileData.p;
        onUpload();
    })();
    
    renderUploadPanel();
};

let applyZzal = () => {
    let json = getOption('zzal');
    if (json === null) return;
    if (json === '') return;
    try {
        let exported = JSON.parse(json);
        let fileData = importFileData(exported);
        setZzal(fileData);
    } catch {
        setZzal(null);
    }
};

let onFileDropped = (file) => {
    if (file.size > 20000000) return openAlert(str_imageTooBig);
    if (bWriteUnavailable) return openAlert(str_chatDisabled);
    createFileData(file);
    renderUploadPanel();
    toggleUploadPanel(true);
};

let uploadInput = createElement('input', null, {
    type: 'file',
    accept: 'image/*',
    multiple: 'true',
    onchange: () => {
        for (let file of uploadInput.files) {
            onFileDropped(file);
        }
    }
});

let upload = createElement('a', chatInputContainerFloat, {
    [onclick]: () => toggleUploadPanel()
}, 'up.b.abs-tl', disabled);
addTooltip(upload, { text: str_tooltip_upload, top: true });

// 드래그 앤 드롭 지원
ondragenter = async (ev) => {
    if (ev.dataTransfer && ev.dataTransfer.files) {
        let files = ev.dataTransfer.files.length > 0 ? ev.dataTransfer.files :ev.dataTransfer.items;
        let file = files[0];
        if (!file.type || file.type.split('/')[0] != 'image') return;
        addClass(dropArea, 'drag');
    }
}
dropArea.ondragenter = (ev) => {
    ev.preventDefault();
}
dropArea.ondragover = (ev) => ev.preventDefault();
dropArea.ondragleave = () => {
    request(() => removeClass(dropArea, 'drag'));
}

dropArea.ondrop = (ev) => {
    ev.preventDefault();
    removeClass(dropArea, 'drag');
    if (ev.dataTransfer.files) {
        let alert = false;
        for (let file of ev.dataTransfer.files) {
            if (!file.type || file.type.split('/')[0] != 'image') alert = true;
            else onFileDropped(file);
        }
        if (alert) openAlert(str_notImage);
    }
}

// paste 지원
if (bClipboardReadAvailable) doc.addEventListener('paste', async () => {
    let clipboard = await window.navigator.clipboard.read();
    let imageCount = 0;
    for (let item of clipboard) {
        debug(item);
        let match = null;
        for (let type of item.types) {
            match = type.match(/image\/(.+)$/);
            debug(match);
            if (match) break;
        }
        debug(match);
        if (!match) continue;
        let blob = await item.getType(match[0]);
        let file = new File([ blob ], `image_${imageCount}.${match[1]}`);
        onFileDropped(file);
        imageCount += 1;
    }
});

let uploadIcon = createIcon(upload, 'add_circle');
let uploadNum = createElement('span', upload, { [innerText]: 0 }, 'cnt.abs-tr', hidden);

renderUploadImage = () => {
    if (isPostingWrite() && !bWriteUnavailable) removeClass(upload, disabled);
    else addClass(upload, disabled);
};

//#endregion

// #####################################################################
// ####################  SUBMIT & SETTING  #############################
// #####################################################################
//#region 

if (DEBUG) debug('settings');
let toggleSettings, changeSettingsPage;

let settingsPanel = createElement(divString, chatInputContainer, 'p.p-settings', hidden);
createElement(spanString, createElement(divString, settingsPanel, 'hd'), { [innerText]: str_settings }, 'h');
createIcon(createElement('a', settingsPanel, { [onclick]: () => toggleSettings() }, 'b.abs-tr'), 'close');
let settingsBack = createElement('a', settingsPanel, { [onclick]: () => changeSettingsPage() }, 'b.abs-tl', hidden);
createIcon(settingsBack, 'navigate_before'); 
let settingsPage = createElement(divString, settingsPanel);
let options = createElement(divString, settingsPage, 'opts');
let optionsBlock = createElement(divString, settingsPage, 'opts', hidden);
let optionsWrite = createElement(divString, settingsPage, 'opts', hidden);
let optionsChat = createElement(divString, settingsPage, 'opts', hidden);

let lastPage = options;
changeSettingsPage = (page = options) => {
    addClass(lastPage, hidden)
    removeClass(page, hidden);
    lastPage = page;
    if (page == options) addClass(settingsBack, hidden);
    else removeClass(settingsBack, hidden);
};

// 옵션 엔트리 작성 및 브라우저 저장/로드
let createOption = (labelText, icon, onChecked, onUnchecked, initialToggle = false, page = options) => {
    let toggled = initialToggle;
    let option = createElement(divString, page, 'opt');
    if (toggled) addClass(option, 'chk');
    let wrap = createElement(divString, option, 'label.fr');
    if (icon) createIcon(wrap, icon);
    createElement(spanString, wrap, { [innerText]: labelText });
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
};
let createOptionProperty = (labelText, icon, propertyName, onChecked, onUnchecked, initialToggle, page) => 
    createOption(labelText, icon, () => setDocStyleProp(propertyName, onChecked), () => setDocStyleProp(propertyName, onUnchecked), initialToggle, page);
let createPageSelect = (labelText, page, icon = '') => {
    let option = createElement(divString, options, { [onclick]: () => changeSettingsPage(page) }, 'opt.r');
    let wrap = createElement(divString, option, 'label.fr');
    if (icon) createIcon(wrap, icon);
    createElement(spanString, wrap, { [innerText]: labelText });
    createIcon(option, 'navigate_next', 'abs-r');
    return option;
};

// optionsBlock page
createPageSelect(str_settings_block, optionsBlock, 'block');
let createBlockOption = (label, parent, bAll, key) => {
    let option = createElement('a', parent, {
        [onclick]: () => {
            let modal = openModal({
                title: label,
                options: [], // no options
                close: true,
            });
            let content = modal.content;
            let entries = createElement(divString, content, 'b-entry.fr');
            let renderBlockEntries = () => {
                clearChildren(entries);
                let block = bAll ? getBlockAll() : getBlockGall(gallId, gallName);
                let splits = block[key].split('||');
                for (let keyword of splits) {
                    if (keyword == '') continue;
                    let entry = createElement(divString, entries, 'entry.fr');
                    createElement(spanString, entry, { [innerText]: '"' + keyword + '"' });
                    let close = createElement('a', entry, {
                        [onclick]: () => {
                            removeBlock(block, key, keyword);
                            if (bAll) updateBlockAll(block);
                            else updateBlockGall(block, gallId);
                            renderBlockEntries();
                        }
                    });
                    createIcon(close, 'close', 'sml');
                }
            };
            renderBlockEntries();
            let wrap = createElement(divString, content, 'b-wrap.fr');
            let input = createElement('input', wrap, 'nowrap');
            let button = createElement('a', wrap, {
                [onclick]: () => {
                    if (!input.value) return;
                    let block = bAll ? getBlockAll() : getBlockGall(gallId, gallName);
                    addBlock(block, key, input.value);
                    if (bAll) updateBlockAll(block);
                    else updateBlockGall(block, gallId);
                    renderBlockEntries();
                    input.value = '';
                }, [innerText]: str_add
            }, 'sb');
            enterAsClick(input, button, false, true);
        }
    }, 'opt.r');
    let wrap = createElement(divString, option, 'label.fr');
    // if (bAll) createIcon(wrap, 'globe');
    createElement(spanString, wrap, { [innerText]: label });
    createIcon(option, 'navigate_next', 'abs-r');
}
createElement(divString, optionsBlock, { [innerText]: str_blockAll }, 'opt.hr');
createBlockOption(str_block_word, optionsBlock, true, 'word');
createBlockOption(str_block_id, optionsBlock, true, 'id');
createBlockOption(str_block_ip, optionsBlock, true, 'ip');
createBlockOption(str_block_name, optionsBlock, true, 'nick');
let blockGallLabel = createElement(divString, optionsBlock, { [innerText]: str_blockGall }, 'opt.hr');
createBlockOption(str_block_word, optionsBlock, false, 'word');
createBlockOption(str_block_id, optionsBlock, false, 'id');
createBlockOption(str_block_ip, optionsBlock, false, 'ip');
createBlockOption(str_block_name, optionsBlock, false, 'nick');

// optionsWrite page
createPageSelect(str_settings_write, optionsWrite);
let uploadZzal = createElement('input', null, {
    type: 'file',
    accept: 'image/*',
    multiple: 'true',
    onchange: () => {
        if (uploadZzal.files.length === 0) return;
        let fileData = createFileData(uploadZzal.files[0]);
        setZzal(fileData);
        if (!useZzal) optionUseZzal.click();
    }
});
let addZzal = createElement('a', optionsWrite, { [onclick]: () => uploadZzal.click() }, 'pv.r.b.o-f');
createIcon(addZzal, 'add_photo_alternate');
createElement(spanString, addZzal, { [innerText]: str_uploadZzal });
let useZzal = false;
let optionUseZzal = createOption(str_settings_useZzal, null, () => {
    useZzal = true;
    if (zzal === null) return;
    removeClass(zzal.preview, hidden);
}, () => {
    useZzal = false;
    if (zzal === null) return;
    addClass(zzal.preview, hidden);
}, false, optionsWrite);

let footerString = '';
let footerOption = createElement('a', optionsWrite, {
    [onclick]: () => {
        let modal = openModal({
            title: str_settings_footer,
            input: footerString,
            options: [{
                text: str_confirm,
                [onclick]: (close) => {
                    footerString = modal.input.value;
                    applyOption('footer', footerString);
                    close();
                }
            }, {
                text: str_cancel
            }]
        });
        let footerInput = modal.input;
        addClass(footerInput, 'ft');
        let static = createElement(spanString, null, {
            [innerText]: '- ' + str_dclivechat,
            [onclick]: () => footerInput.focus()
        }, 'footer-static');
        footerInput.insertAdjacentElement('afterend', static);
    }
}, 'opt.r');
createElement(spanString, footerOption, { [innerText]: str_settings_footer }, 'label');
createIcon(footerOption, 'navigate_next', 'abs-r');

// default: true
createOption(str_settings_darkMode, 'dark_mode', () => removeClass(body, 'light'), () => addClass(body, 'light'), true);
let madoOption = createOption(str_settings_mado, 'splitscreen', () => {
    bMado = true;
    if (bMobileDevice && !getOption('mado')) {
        openModal({
            title: str_confirm,
            desc: str_askMado,
            options: [{
                text: str_yes,
                [onclick]: (close) => {
                    renderRow();
                    applyOption('mado', true);
                    close();
                },
                enter: true
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

createPageSelect(str_settings_chat, optionsChat);
let useLinkInContent = true;
createOption(str_settings_appendLink, null, () => useLinkInContent = true, () => useLinkInContent = false, true);

// default: false
createOption(str_settings_hideLogin, null, () => {
    addClass(loginInputContainer, hidden);
    addClass(loginInputExpander, hidden);
}, () => {
    if (bLogin) return;
    removeClass(loginInputContainer, hidden);
    removeClass(loginInputExpander, hidden);
});
createOption(str_settings_lowLatency, null, () => setIntervalIndex(1), () => setIntervalIndex(0));
createOption(str_settings_chatOnly, null, () => addClass(main, 'co'), () => removeClass(main, 'co'));

// page: chat
// 닉네임 아이콘 표시
createOption(str_settings_nikcon, null, () => removeClass(chatPage, 'hn'), () => addClass(chatPage, 'hn'), false, optionsChat);
// 반고닉 아이디 표시
createOption(str_settings_showUnfixId, null, () => {
    removeClass(chatPage, 'hu');
    pullDown(true);
}, () => {
    addClass(chatPage, 'hu');
    pullDown(true);
}, true, optionsChat);
// 댓글 수 하이라이트
let countColorName = '--cc';
createOptionProperty(str_settings_commentHighlight, null, countColorName, '#fc5', 'var(--cf)', true, optionsChat);
// 부드러운 스크롤 애니메이션
let scrollBehaviorName = '--sb';
createOptionProperty(str_settings_smoothScroll, null, scrollBehaviorName, 'smooth', 'auto', true, optionsChat);
// 폰트 크기 확대
let fontSizeName = '--fs';
createOption(str_settings_bigFont, null, () => {
    setDocStyleProp(fontSizeName, '15px');
    pullDown(true);
}, () => {
    setDocStyleProp(fontSizeName, '13px');
    pullDown(true);
}, false, optionsChat);
// 디시콘 크기 줄이기
let dcconSizeName = '--ds';
createOptionProperty(str_settings_smallDccon, null, dcconSizeName, '60px', '80px', false, optionsChat);

// footer
createElement(spanString, settingsPanel, { [innerText]: 'version: ' + VERSION }, 'version');

let settingsHidden = true;
toggleSettings = () => {
    settingsHidden = !settingsHidden;
    if (settingsHidden) {
        removeClass(settingsIcon, 'f');
        addClass(settingsPanel, hidden);
    } else {
        addClass(settingsIcon, 'f');
        removeClass(settingsPanel, hidden);
    }
}

// 옵션 버튼과 채팅 보내기 버튼
let submitContainer = createElement(divString, chatInputContainer, 'fr.sc');
let settings = createElement('a', submitContainer, { [onclick]: toggleSettings }, 'b.gray');
let settingsIcon = createIcon(settings, 'settings');

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
        write: '',
        esno: '',
        string: '',
        delId: '',
        delValue: '',
        vCurT: '',
        // recomFormData : null,
    };
    let text = await getAsText(getPostUrl(num)).catch(debug);

    let returnFunc = () => contentData;

    // check captcha
    if ((new RegExp(`id="code_${num}"`)).test(text)) bCaptchaComment = true;
    else bCaptchaComment = false;

    let write = getInnerHtml(text, divString, 'write_div');
    if (!write) return returnFunc();
    let head = getInnerHtml(text, divString, 'gallview_head');
    if (!head) return returnFunc();
    let writer = getOuterHtml(head, divString, 'gall_writer');
    if (!writer) return returnFunc();
    contentData.name = getAttribute(writer, 'data-nick');
    contentData.write = write;
    contentData.text = replaceImage(replaceLink(trimHtml(neutralizeDccon(write))), 'pc-' + num);
    let esno = getValueById(text, 'e_s_n_o');
    if (esno) contentData.esno = esno;
    contentData.string = getSecretString(text);
    postContentDatas[num] = contentData;
    // _cmt_del_form_
    let data = {};
    if(getFormData(text, '_cmt_del_form_', data)) {
        for (let key in data) {
            contentData.delId = key;
            contentData.delValue = data[key];
        }
    }
    let vCurT = getValueById(text, 'v_cur_t');
    if (vCurT) contentData.vCurT = vCurT;
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
    updateFormDataV2(text, commentFormData);
    commentFormData.service_code = getSecondServiceCode(commentFormData.service_code, contentData.string);
    commentFormDatas[num] = commentFormData;

    //TODO 개념글 추천
    // let recomFormData = {};
    // if (getFormData(text, '_view_form_', recomFormData)) contentData.recomFormData = recomFormData;

    return returnFunc();
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
    let { esno } = await getPostContent(num).catch(debug);
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

let onPostData = async (postDatas, bForced = false) => {
    if (postDatas.length == 0) return;
    if (!bGreeted) bForced = true;
    else if (bFirstUpdate) newLine({ title: str_reconnected });
    postDatas = postDatas.sort((a, b) => a.num - b.num);
    let lastNumCur = 0;
    for (let postData of postDatas) {
        if (!myPosts.includes(postData.num)) {
            await newLine(postData).catch(debug);
            if (postData.count) onPostCommentCountChanged[postData.num]?.(postData.count, bForced);
        }
        lastNumCur = Math.max(lastNumCur, postData.num);
    }
    lastNum = Math.max(lastNum, lastNumCur);
    if (worker) worker.postMessage({ type: 'ln', n: lastNum });

    if (!bGreeted) { // greeting
        newLine({ title: str_greeting });
        bGreeted = true;
        if (bWriteUnavailable) newLine({ title: str_notifyChatDisabled });
    }
    bFirstUpdate = false;
};

let genUpdateList = () => {
    let _debug, _url, _getAsText, _postCommentCount;
    let _onChange, _onPostData;
    let _getInnerText, _getInnerHtml, _getOuterHtml, _getAttributeTo, _getAttribute, _testFix;
    let _str_survey, _str_notice;
    let _parse;
    let _lastNum;
    try {
        _debug = _DEBUG;
        _url = _URL;
        _getAsText = _TEXT;
        _postCommentCount = {};
        _onChange = (n, c) => {
            _postCommentCount[n] = c;
            self.postMessage({type:'cc',n,c});
        };
        _onPostData = async (d) => self.postMessage({type:'pd',d});
        _getInnerText = _IT;
        _getInnerHtml = _IH;
        _getOuterHtml = _OH;
        _getAttributeTo = _AT;
        _getAttribute = _A;
        _testFix = _TF;
        _str_survey = _SS;
        _str_notice = _SN;
        _parse = Number.parseInt;
        _lastNum = () => _LN;
    } catch {
        _debug = debug;
        _url = getListUrl();
        _getAsText = getAsText;
        _postCommentCount = postCommentCount;
        _onChange = (n, c) => onPostCommentCountChanged[n]?.(c, bFirstUpdate);
        _onPostData = onPostData;
        _getInnerText = getInnerText;
        _getInnerHtml = getInnerHtml;
        _getOuterHtml = getOuterHtml;
        _getAttributeTo = getAttributeTo;
        _getAttribute = getAttribute;
        _testFix = testFix;
        _str_survey = str_survey;
        _str_notice = str_notice;
        _parse = parse;
        _lastNum = () => lastNum;
    }
    let unescapeHtml = (safe) => {
        return safe
            .replace(/&amp;/g, '&')
            .replace(/&nbsp;/g, ' ')
            .replace(/&#035;/g, '#')
            .replace(/&#039;/g, `'`)
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"');
    }
    let updateList = async () => {
        let text = await _getAsText(_url);
        if (!text) return;
        try {
            text = text.replace(/(\n|\r|\t)/g, ''); // use replace instead of r due to worker compatibility
            let postDatas = [];
            let matches = text.matchAll(/<tr[^>]*class="[^"]*us-post[^"]*"[^>]*data-no="([^"]*)".+?<\/tr>/g);
            if (!matches) return;
            for (let match of matches) {
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
                let num = _parse(match[1]);
                postData.num = num;
                let reply = post.match(/<span[^>]*class="[^"]*reply_num[^>]*"[^>]*>\[([0-9]+)\]<\/span>/);
                let lastCount = _postCommentCount[num] ?? 0; // worker support
                let count = 0;
                if (reply) {
                    count = _parse(reply[1]);
                    if (count) postData.count = count;
                }
                // skip when the post is older than last post
                if (num <= _lastNum()) {
                    if (count != lastCount) _onChange(num, count);
                    continue;
                }
                let title = _getInnerText(post, 'td', 'gall_tit');
                if (reply) title = title.slice(0, title.length - reply[1].length - 2);
                postData.title = unescapeHtml(title);
                let numString = _getInnerHtml(post, 'td', 'gall_num');
                if (numString == _str_survey || numString == _str_notice || numString == 'AD') continue; // 말머리 없음
                let subject = _getInnerText(post, 'td', 'gall_subject');
                postData.subject = unescapeHtml(subject);
                if (subject == _str_survey || subject == _str_notice || subject == 'AD') continue; // 말머리 있음
                let writer = _getOuterHtml(post, 'td', 'gall_writer');
                if (writer) {
                    _getAttributeTo(writer, 'data-nick', postData, 'nickname');
                    _getAttributeTo(writer, 'data-uid', postData, 'id');
                    _getAttributeTo(writer, 'data-ip', postData, 'ip');
                    let nikcon = writer.match(/<img[^>]*src=["']([^"']+)["']/);
                    if (nikcon) {
                        let img = nikcon[1];
                        postData.img = img;
                        postData.fix = _testFix(img);
                    }
                }
                let dates = _getOuterHtml(post, 'td', 'gall_date');
                let date = _getAttribute(dates, 'title');
                if (date !== null) postData.date = Date.parse(date);
                postDatas.push(postData);
            }
            await _onPostData(postDatas);
        } catch (e) {
            _debug(e);
        }
    }
    return { _UL: updateList };
}
let { _UL: updateList } = genUpdateList();

let genUpdateFunc = () => {
    let updateCycle = async () => {
        let _updateList, _iv, _loop, _debug;
        try {
            _updateList = _UL;
            _iv = _IV;
            _loop = () => { };
            _debug = _DEBUG;
        } catch {
            _iv = interval;
            _updateList = updateList;
            _loop = (id) => loop = id;
            _debug = debug;
        }
        await _updateList().catch((e) => { _debug(e); postMessage({type: 'err'}); });
        _loop(setTimeout(updateCycle, _iv));
    };

    return { _UC: updateCycle };
}
let { _UC: updateCycle } = genUpdateFunc();

let initUpdate = (...reason) => {
    debug('init update', ...reason);
    bFirstUpdate = true;
    if (bWorkerAvailable) {
        if (worker) worker.terminate();
        let blob = new Blob([
            `let _URL='${getListUrl()}';`,
            `let _IV=${interval};`,
            `let _LN=${lastNum};`,
            `let _SS='${str_survey}';`,
            `let _SN='${str_notice}';`,
            `let{_IH,_OH,_IT,_AT,_A,_TF,_DEBUG}=(${genUtil.toString()})();`,
            `let{_TEXT}=(${genFetch.toString()})();`,
            `let{_UL}=(${genUpdateList.toString()})();`,
            `let{_UC}=(${genUpdateFunc.toString()})();`,
            `self.onmessage=async(e)=>{switch(e.data.type){case'iv':_IV=e.data.iv;break;case'ln':_LN=e.data.n;break;}};`,
            `_UC();`,
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
                if (data.type == 'pd') return await onPostData(data.d);
                if (data.type == 'cc') return onPostCommentCountChanged[data.n]?.(data.c, bFirstUpdate);
                if (data.type == 'err') return initUpdate('worker err');
            }
        };
    } else {
        if (loop) clearTimeout(loop);
        updateCycle();
    }
}

// 업데이트 시작
initUpdate();

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
    if (!/id="write"/.test(html)) return onWritingBlocked();
    onWritingBlocked(false);
    updateFormDataV2(html, formData);
    // find service_code validation serial
    _secret = getSecretString(html);
    bCaptcha = /id="code"/.test(html);
    if (bMini) {
        formData.headtext = 0; // 말머리 일반
        let key = bLogin ? 'nickname' : 'name';
        let nickname = getValueById(html, key)
        if (nickname) anonymousNickname = nickname;
        else anonymousNickname = '';
    }
    renderInputCaptcha();
    renderInputNickname();
    pullDown(true);
}
let falseString = (s) => 'false||' + s;
let makeDcconContent = (url, title, idx) => `<img class="written_dccon" src="${url}" conalt="${title}" alt="${title}" con_alt="${title}" title="${title}" detail="${idx}">`;
let lastWrite = 0;
let getEmbed = async (url, bAddLink = true) => {
    let fallback = `<p><a href="${url}" target="_blank">${url}</a></p>`;
    let res = await postWrite(host + 'api/ogp', { url: url });
    if (!res) return fallback;
    let json = JSON.parse(res);
    if (!json.result) return fallback;
    let embed = `{{_OG_START::${url}^#^${json.og_title}^#^${json.og_description}^#^${json.og_image}::OG_END_}}`;
    if (bAddLink) embed = `<p><span class="og-url" style="color:#3b4890">${url}</span></p><p></p>` + embed;
    return embed;
}
let writePost = async (title, content) => {
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
    if (files.length !== 0 | (useZzal && zzal !== null && !omitZzal)) imageContent += str_lineBreak;
    if (useZzal && zzal !== null && !omitZzal) {
        imageContent += `<img src="${zzal.url}"/>` + str_lineBreak;
    }
    for (let i = 0; i < files.length; i++) {
        let fileData = files[i];
        if (!fileData.upload) return falseString(str_pendingUpload);
        imageContent += `<img src="${fileData.url}" class="txc-image "/>` + str_lineBreak;
        lastData['file_write[' + i + '][file_no]'] = fileData.num;
    }

    // apply link
    let linkContent = '';
    if (useLinkInContent && loadedVideoUrls.length) {
        for (let i = 0; i < loadedVideoUrls.length; i++) {
            let videoUrl = loadedVideoUrls[i];
            
            let matchYoutube = videoUrl.match(regexYoutube);
            let matchTwitch = videoUrl.match(regexTwitch);
            let videoId, url;
            if (matchYoutube) { // if youtube
                videoId = matchYoutube[2];
                url = 'https://youtu.be/' + videoId;
                if (i == 0) {
                    linkContent += `<p><span class="og-url" style="color:#3b4890" <div=""></span></p><div class="yt_movie"><embed src="https://www.youtube.com/v/${videoId}?version=3" type="application/x-shockwave-flash" width="560" height="315" allowfullscreen="true"></div><a class="yt_link" href="${url}" target="_blank">${url}</a></div>`;
                    linkContent += await getEmbed(url, false);
                    continue;
                }
            } else if (matchTwitch) {
                videoId = matchTwitch[2];
                url = 'https://www.twitch.tv/' + videoId;
            } else {
                url = videoUrl;
            }
            linkContent += await getEmbed(url);
        }
    }
    if (linkContent) linkContent += str_lineBreak;

    // apply dccon
    let dcconContent = '';
    for (let match of title.matchAll(regexDccon)) {
        let packageTitle = match[1];
        let dcconTitle = match[2];
        let url = getDcconUrl(packageTitle, dcconTitle);
        if (!url) continue;
        let dccon = getDccon(packageTitle, dcconTitle);
        if (!dccon) continue;
        if (!dccon.buy) continue;
        dcconContent += makeDcconContent(url, dcconTitle, dccon.idx);
    }
    if (dcconContent) dcconContent += str_lineBreak;

    for (let match of content.matchAll(regexDccon)) {
        let dcconString = match[0];
        let packageName = match[1];
        let dcconTitle = match[2];
        let url = getDcconUrl(packageName, dcconTitle);
        if (!url) continue;
        let dccon = getDccon(packageName, dcconTitle);
        if (!dccon) continue;
        if (!dccon.buy) continue;
        content = content.r(dcconString, makeDcconContent(url, dcconTitle, dccon.idx));
    }

    lastData.memo = encode(imageContent + linkContent + str_lineBreak + dcconContent + content);
    return await useCaptcha(postWrite, [ articleSubmit, formData, additionalFormData ], lastData, 'comment_submit');
};

// 글 작성 이후
let onWritePost = (res) => {
    timeout(refreshWriteSession, 500);
    let splits = split(res);
    if (splits.length == 1) {
        debug(res);
        return openAlert(str_error_generic);
    }
    if (splits[0] == 'false') {
        openAlert(splits[1]);
        return debug(res);
    }
    let num = parse(splits[1].trim());
    myPosts.push(num);
    newLine({
        num: num,
        nickname: getNicknameV2(),
        id: bLogin ? userId : '',
        ip: bLogin ? '' : cutIpAddress(formData.user_ip),
        title: formData.subject,
        img: userImg,
        fix: bUserFix,
        my: true,
    });
    omitZzal = false;
    for (let i = 0; i < files.length; i++) {
        files[i].close();
    }
    files.length = 0;
    toggleUploadPanel(false);
};

// 댓글 작성 이후
let onWriteComment = (res, num) => {
    timeout(renderInputCaptcha, 500);
    let splits = split(res);
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
};

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
    additionalFormData.memo = encode(body);
    let data = {
        id: gallId,
        no: num,
        c_gall_id: gallId,
        c_gall_no: num,
        [grecaptchaResponse]: '',
        _GALLTYPE_: gallType,
        headTail: '""',
    };
    let res = await useCaptcha(postComment, [ num, commentSubmit, commentFormData, additionalFormData ], data, 'comment_submit');
    try {
        let number = parse(res);
        if (number) return 'true||' + number;
    } catch {
        debug(res);
    }
    return res;
}

submit.onclick = async() => {
    if (!input.value) return;
    let title = input.value ?? '';
    input.value = '';
    input.oninput();
    if (targetPostNum == 0) {
        let { r, p } = initPromise();
        if (files.length !== 0) {
            let pending = false;
            let error = false;
            for (let fileData of files) {
                if (!fileData.upload) pending = true;
                if (fileData.error) error = true;
            }
            if (error) {
                openModal({
                    title: str_postErrorImageTitle,
                    desc: str_postErrorImageDesc,
                    options: [{
                        text: str_yes,
                        [onclick]: (close) => {
                            r(true);
                            close();
                        },
                        enter: true
                    }, {
                        text: str_cancel,
                        [onclick]: (close) => {
                            r(false);
                            close();
                        }
                    }],
                });
                if (!await p.catch(debug)) return;
            } else if (pending) {
                return openAlert(str_pendingUpload);
            }
        }
        let splits = title.split('\n');
        title = splits[0];
        let body = str_lineBreak;
        for (let i = 1; i < splits.length; i++) {
            body += `<p>${splits[i]}</p>`;
        }
        if (footerString !== '') {
            splits = footerString.split('\n');
            for (let split of splits) body += `<p style="color:#ABABAB;">${split}</p>`;
        }
        body += `<p style="color:#ABABAB;">- ${str_dclivechat} ${randomBlanks(20)}</p>`;
        onWritePost(await writePost(title, body).catch(debug));
    } else {
        lastSigniture = randomBlanks(commentSignitureLength);
        onWriteComment(await writeComment(targetPostNum, title + lastSigniture, targetCommentNum).catch(debug), targetPostNum);
    }
    if (bMobileDevice) input.focus();
} 

//#endregion

loadOptions();
// populatePackage('recent');
// populatePackage('icon');
if (loadedVideoUrls.length !== 0) toggleMenu(false);

// 업데이트 및 최초실행 안내창
let lastVersion = getOption('version') ?? '';
if (typeof VERSION !== 'undefined') {
    let getMajor = (version) => {
        let splits = version.split('.');
        return splits[0] + '.' + splits[1];
    } 
    let oldVersionMajor = getMajor(lastVersion);
    let versionMajor = getMajor(VERSION);
    if (oldVersionMajor !== versionMajor) {
        let modal = openModal({
            title: str_update + ': ' + VERSION,
            desc: str_features + '<a href="https://joh1ah.github.io/dclivechat/change.log" target="_blank">' + str_changelog + '</a>',
            html: true,
        });
        addContextMenu(modal.content, [{
            text: str_delete,
            icon: 'delete',
        }, {
            hr: true,
        }, {
            text: str_openInNew,
            icon: 'open_in_new',
        }, {
            text: str_copyUrl,
        }, {
            hr: true
        }, {
            text: str_block_id,
        }, {
            text: str_block_name,
        }]);
        let sample = modal.content.oncontextmenu({ preventDefault: () => {}, clientX: 0, clientY: 0 });
        contextmenu = null;
        detach(sample);
        modal.content.appendChild(sample);
        sample.style.position = 'relative';
        sample.style.marginTop = '1em';
    }
}
applyOption('version', VERSION);

applyZzal();
footerString = getOption('footer') ?? '';

request(() => removeClass(body, hidden));
debug('INIT done');
})().catch(reason => console.log(reason));