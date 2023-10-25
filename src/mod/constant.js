// document에 할당하여 실행할 전역 함수 이름
export let appName = 'dclivechat';
export let openLinkFuncName = 'onopenlink';
export let onImageErrorFuncName = 'ondcconerror';
export let onImageClickFuncName = 'onimageclick';

// 자주 쓰이는 URL
export let host = 'https://gall.dcinside.com/';

// 자주 쓰이는 함수 이름
// let getElementById = 'getElementById';
export let getElementsByClassName = 'getElementsByClassName';
// let getElementsByName = 'getElementsByName';
// let getElementsByTagName = 'getElementsByTagName';
export let querySelector = 'querySelector';
export let innerText = 'innerText';
export let placeholder = 'placeholder';
export let onclick = 'onclick';
// let globalCompositeOperation = 'globalCompositeOperation';

// 자주 쓰이는 클래스 이름
export let hidden = 'hidden';
export let disabled = 'disabled';

// 환경
export let bMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
export let bMobileSafari = bMobileDevice && /Safari/i.test(navigator.userAgent);