<h1><img alt="DC 라이브챗" src="https://github.com/Joh1ah/dclivechat/blob/main/images/dclivechat_h.png"/></h1>

디시인사이드를 실시간 채팅창으로 바꿔주는 북마크렛입니다.

<img src="https://nstatic.dcinside.com/dc/w/images/logo_icon.ico" style="width:1em;height:1em"> [라이브챗 갤러리](http://gall.dcinside.com/mini/livechat)

최신 버전: `2.2.1-20230912`

<br>

## 적용법
1. PC 또는 모바일 브라우저에 아무 북마크나 추가하세요.
2. 북마크 URL란에 아래 코드를 복사해 넣으세요.
```javascript
javascript:(()=>{fetch('https://joh1ah.github.io/dclivechat/min.js').then(res=>res.text().then(text=>eval(text))).catch(()=>alert('error'))})();
```
3. 이제 이 북마크를 누르면 DC 라이브챗이 실행됩니다.

![DC 라이브챗 스크린샷](https://github.com/Joh1ah/dclivechat/blob/main/images/screenshot_0.gif)

<br>

## 주요 기능
### 💬 실시간 채팅
* 갤러리 페이지를 일일이 새로고침 하지 않아도 됩니다.
* 글 리젠이 빠른 갤러리 여러 곳을 동시에 볼 수 있습니다.

### 📺 방송과 함께 보기
* 방송 화면을 원하는 만큼 여러개 열어두고 동시에 시청할 수 있습니다.
* 글을 쓸 때 방송 링크가 자동 추가됩니다. (설정에서 on/off 가능)
* 갤러리마다 이전에 보던 방송이 저장됩니다.

### 📱 공앱만큼 편한 기능
* 여러줄 입력 시 첫 줄은 제목, 나머지는 내용이 됩니다.
* 이미지를 드래그 앤 드롭으로 올릴 수 있습니다.
* 내가 쓴 글이나 댓글에 답이 달리면 알림이 표시됩니다.

<br>

## FAQ
### <i>실행이 되지 않아요</i>
* URL란이 제대로 수정되었는지 확인해보세요.<br>만약 수정한 URL이 저장되지 않았다면, 북마크렛 기능을 지원하지 않는 브라우저일 수 있습니다.
* 그래도 해결되지 않을 때에는 [라이브챗 갤러리](http://gall.dcinside.com/mini/livechat)에 제보해주세요.
### <i>방송이 보이지 않아요</i>
* 타 사이트에서의 시청이 금지된 영상은 볼 수 없습니다. (유튜브 멤버십 한정 방송 등)<br>단, 영상 링크는 정상적으로 추가됩니다.
### <i>소스코드를 보고싶어요</i>
* [index.js](https://github.com/Joh1ah/dclivechat/blob/main/src/index.js)와 [style.scss](https://github.com/Joh1ah/dclivechat/blob/main/src/style.scss)를 확인해주세요.
* 빌드된 각 버전은 [최신 릴리스](https://github.com/Joh1ah/dclivechat/releases)에서 찾아볼 수 있습니다.

<br>

## 주의사항
* 이 프로젝트는 실험적 기능을 포함하고 있으며 사용 중 일어나는 모든 문제의 책임은 사용자에게 있습니다.

<br>

## Changelog
v2.2.1-20230912
* 주요 업데이트가 아닌 경우 알림이 나오지 않도록 변경
* 업데이트 알림이 계속 나오는 문제 수정

v2.2.0-20230911
* 자동짤방 및 여러 이미지 첨부 기능 추가
* 꼬리말 수정 기능 추가
* 프로토콜이 명시되지 않은 주소가 열리지 않는 문제 수정
* 최초 실행 시 안내사항 표시
* 모바일 채팅창 오버스크롤 문제 수정
* 일부 환경에서 이미지 드롭이 되지 않는 문제 수정
* 반응형 UI 개선
* 브라우저 호환성 개선
* 기타 UI 개선

v2.1.2-20230214
* 이미지가 정상적으로 업로드되지 않던 문제 수정
* 일부 버튼에 툴팁 추가
* 상단바 숨기기 클릭 시 배치 바꾸기가 완료되도록 수정
* 기타 성능 개선
* 기타 UI 개선

v2.1.1-20230206
* 메모리 누수 문제 추가 개선

v2.1.0-20230206
* 상단바 숨기기 버튼 추가
* 댓글 및 답글 입력 시 쉽게 알아볼 수 있도록 변경
* 이미지 확대, 다운로드 기능 추가
* 영상 링크 임베드 추가
* 다크 모드 옵션 추가
* 설정 카테고리 분리
* 빌리빌리 영상 시청 시 최상위 페이지가 전환되는 문제 수정
* 오랜 시간 사용 시 메모리 누수가 발생하는 문제 수정
* 디시콘 로드 방식 개선
* 기타 UI 개선

v2.0.1-20230125
* 앱이 정상적으로 로드되지 않았을 때의 예외 처리 추가

v2.0.0-20230125
* javascript 코드를 웹에서 로드하도록 변경

v1.5.5-20230124
* 아이폰에서 반응형 UI가 작동하지 않는 문제 수정

v1.5.4-20230124
* 유동 로그인 숨기기 옵션이 작동하지 않는 문제 수정
* 입력 후 모바일 화면이 제대로 표시되지 않는 문제 수정

v1.5.3-20230123
* 구글 reCaptcha v3 지원
* 일부 환경에서 링크가 열리지 않는 문제 수정

v1.5.2-20230121
* 모바일에서 댓글수가 제대로 보이지 않던 문제 수정

v1.5.1-20230121
* 글 본문 닫을 시 내부 영상이 멈추도록 수정
* 일부 디시콘이 보이지 않던 문제 수정
* 레이아웃이 변경되는 최소 너비 추가
* 기타 UI 개선

v1.5.0-20230120
* 다중 화면 (마도) 기능 추가
* 옵션이 브라우저에 저장됨
* 재접속시 마지막 시청 목록이 유지됨
* 일부 유튜브 링크가 열리지 않던 문제 수정
* 모바일 UI 개선
* 기타 UI 개선

v1.4.1-20230118
* 댓글 도배 방지 코드가 보이지 않던 문제 수정

v1.4.0-20230118
* 전체 닫기 버튼 추가
* 알림 기능 추가
* 댓글수 하이라이트 옵션 추가
* 차단한 사용자의 글이 더 이상 표시되지 않음
* 글에 달리던 랜덤 태그(#)를 랜덤 공백문자로 변경
* 답글이 올라가지 않던 문제 수정
* 갤러리별 공지 기능 삭제
* 툴팁 기능 삭제

v1.3.0-20230117
* 미니 갤러리 지원
* captcha 지원

v1.2.2-20230116b
* 자잘한 버그 수정

v1.2.2-20230116
* 여러 창을 열고 닫을 때 전에 닫았던 글이 전부 열리는 문제 수정
* 글 제목 클릭시 글이 열리도록 수정

v1.2.1-20230116
* 드래그 앤 드롭으로 이미지 업로드 가능
* 유동 로그인 입력란 숨기기 옵션 추가
* 글 내용 열기 최대 개수 제한
* 부드러운 스크롤 애니메이션 사용 시 포커스가 풀리는 문제 수정
* 기타 UI 개선

v1.2.0-20230116
* 이미지 업로드 기능 추가
* 부드러운 스크롤 애니메이션
* 일부 메뉴에 툴팁 추가
* 권한이 없는 갤러리에서 채팅창 비활성화
* 모바일에서 엔터가 글쓰기로 이어지는 문제 수정
* 유니코드 문자열 이스케이프 방식 수정

v1.1.2-20230115
* 답글 대상 표시
* 비디오 링크 클릭 시 바로 시청

v1.1.1-20230114b
* 여러 줄 쓰기 가능 (공앱 퀵쓰기와 동일)
* 기타 UI 개선

v1.1.0-20230114
* 자체 도배 제한
* 댓글 및 대댓글 기능
* 디시콘 댓글 기능
* (실험적) 비디오 없이 채팅창만 사용하는 옵션 추가
* 디시콘 클릭 시 불필요한 동작이 일어나는 문제 수정

v1.0.1-20230113b
* 일부 브라우저에서의 fetch 오류 수정
* 일부 브라우저에서의 자동완성 문제 수정
* 잘못된 링크를 입력받는 문제 수정

v1.0.0-20230113
* 첫 공개 버전
