# DECISIONS.md (구조적 결정 기록)

## 폴더 구조
- 루트 레벨에 페이지별 HTML 파일 배치 (컴포넌트 프레임워크 없이 정적 멀티 페이지 구조):
  `index.html`(홈), `portfolio.html`(프로젝트 목록), `contact.html`, 상세 페이지 4종(`manage.html`, `bookmark.html`, `insure.html`, `fylo.html`).
- 스타일/스크립트는 전 페이지 공유 단일 파일로 관리: `css/style.css`, `js/main.js`.
- 이미지: `images/{detail, homepage, icons, portfolio}` + `images/logo.svg`.

## 상태 관리
- 별도 상태 관리 라이브러리 없음. DOM 직접 조작(vanilla JS)만 사용 (`js/main.js`).

## 컴포넌트/템플릿 분리 기준
- 컴포넌트 프레임워크 없음 — 페이지 간 공통 템플릿은 **body 클래스 스코핑**으로 구분:
  - `body.page-detail`: 상세 페이지 4종(manage/bookmark/insure/fylo)이 공유. 이 4개 페이지는 동일한 템플릿(`.project-intro`, `.project-background`, `.static-previews`, `.project-nav`, `main > picture` 히어로 이미지)을 사용하므로 해당 셀렉터들은 **페이지 스코프 없이 공유 CSS**로 관리.
  - `body.page-portfolio`: `portfolio.html` 전용 스코프.
- 사이트 전역 공유 마크업(`.cta`, 헤더/내비, 푸터)은 기본적으로 언스코프 상태이나, 페이지 그룹별로 다른 스타일이 필요한 경우에만 `body.page-detail .cta h2` / `body.page-portfolio .cta h2` 형태로 그룹 스코프 부여 (예: `.cta h2.text-preset-3`).
- 특정 프로젝트 카드 1개만 수정할 때는 `.project-card-manage`처럼 카드별 전용 클래스 사용 (포트폴리오 카드 패턴).
- **페이지 단독 스타일 분리 지침 (2026-07-10 갱신)**: 특정 페이지에만 국한된 스타일은 더 이상 HTML 내부 인라인 `<style>`에 작성하지 않고, `css/style.css`에 `:where(body.page-X)` 스코프로 작성함. 각 페이지의 `<body>`에 `page-home`(index.html) / `page-portfolio`(portfolio.html) / `page-contact`(contact.html) / `page-detail`(상세 페이지 4종) 클래스를 부여해 스코프 기준으로 사용. `:where()`는 명시도(specificity)를 추가하지 않으므로 기존에 쓰이던 `!important` 값은 원래 규칙의 유무를 그대로 보존해 이관함(캐스케이드 결과가 이전과 100% 동일하도록). 새 페이지 단독 스타일 추가 시에도 이 패턴(`:where(body.page-X) 셀렉터`)을 따르고, 인라인 `<style>` 태그는 사용하지 않음.

## 반응형 브레이크포인트
- `README.md`에 768px(태블릿)/1024px(데스크톱) 브레이크포인트가 명시돼 있으며, 이는 AGENTS.md 기본값과 실질적으로 동일함: **모바일 375px → 태블릿 768px(48em) → 데스크톱 1024px(64em)**.
- `css/style.css`는 실제로 `min-width: 48em`, `min-width: 64em` 기준 미디어쿼리를 사용 중 (모바일 우선, 이후 태블릿 → 데스크톱 순 확장).

## 디자인 토큰 관리
- `style-guide.md`가 단일 소스(source of truth) — 색상(Neutral/Slate/Indigo/기타), 타이포그래피 프리셋(Text Preset 1~8), 스페이싱 값을 `css/style.css`의 `:root` 커스텀 프로퍼티로 그대로 매핑해서 사용. 임의 헥사코드 사용 금지.
