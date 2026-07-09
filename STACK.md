# STACK.md (기술 스택 / 의존성 고정)

## 프레임워크
- 없음 — 순수 HTML/CSS/JS 멀티 페이지 정적 사이트.

## 빌드 도구
- **Vite** `^8.1.1` (devDependency) — `dev`/`build`/`preview` 스크립트로 사용.
- `vite.config.js`에서 각 HTML 파일을 개별 엔트리로 등록한 멀티 페이지 빌드 구성:
  `index.html`, `portfolio.html`, `contact.html`, `manage.html`, `bookmark.html`, `insure.html`, `fylo.html`.

## CSS
- CSS 프레임워크(Tailwind 등) 미사용 — 순수 CSS.
- 디자인 토큰을 `css/style.css`의 `:root`에 커스텀 프로퍼티로 정의 (색상/타이포/스페이싱) — `style-guide.md` 값과 1:1 매핑.
- 폰트: Google Fonts CDN `@import`
  - `--font-serif`: Ibarra Real Nova
  - `--font-sans`: Public Sans
- 특정 페이지 단독 스타일 변경의 경우, 해당 HTML 파일 내부의 `<style>` 태그를 활용해 `style.css` 규칙을 덮어씀 (Vite 환경에서 `!important` 지시자로 우선순위 강제 적용).

## JavaScript
- 라이브러리 없음 — 순수 Vanilla JS (`js/main.js`).
- 현재 구현: 모바일 내비게이션 토글, 컨택트 폼 유효성 검사(`contact-form`).

## 패키지 매니저
- npm (`package-lock.json` 존재).

---
사용자 승인 없이 새 라이브러리 추가 또는 버전 변경 금지.
