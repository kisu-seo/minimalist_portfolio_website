# STACK.md (기술 스택 / 의존성 고정)

## 프레임워크
- 없음 — 순수 HTML/CSS/JS 멀티 페이지 정적 사이트.

## 빌드 도구
- **Vite** `^8.1.1` (devDependency, 유일한 프로젝트 의존성) — `dev`/`build`/`preview` 스크립트로 사용.
- `vite.config.js`에서 각 HTML 파일을 개별 엔트리로 등록한 멀티 페이지 빌드 구성:
  `index.html`, `portfolio.html`, `contact.html`, `manage.html`, `bookmark.html`, `insure.html`, `fylo.html`.
- Vite 8 내부 툴체인: 번들러 Rolldown, CSS 처리 Lightning CSS (둘 다 Vite에 내장되어 별도 프로젝트 설정 불필요).
- ESLint/Prettier/PostCSS/TypeScript 등 별도 설정 파일 없음.

## CSS
- CSS 프레임워크(Tailwind 등) 미사용 — 순수 CSS.
- 디자인 토큰을 `css/style.css`의 `:root`에 커스텀 프로퍼티로 정의 (색상/타이포/스페이싱) — `style-guide.md` 값과 1:1 매핑.
- 폰트: Google Fonts CDN `@import`
  - `--font-serif`: Ibarra Real Nova
  - `--font-sans`: Public Sans
- 특정 페이지 단독 스타일은 인라인 `<style>` 대신 `css/style.css`에 `:where(body.page-X)` 스코프로 작성 (2026-07-10부터 적용된 패턴, 배경은 `DECISIONS.md` 참고).

## JavaScript
- 라이브러리 없음 — 순수 Vanilla JS (`js/main.js`).
- 현재 구현: 모바일 내비게이션 토글, 컨택트 폼 유효성 검사(`contact-form`).

## 패키지 매니저
- npm (`package-lock.json` 존재).

---
사용자 승인 없이 새 라이브러리 추가 또는 버전 변경 금지.
