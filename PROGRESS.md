# PROGRESS.md (진행 상황)

## 완료된 작업
- [x] 전체 페이지 골격 작성: `index.html`, `portfolio.html`, `contact.html`, 상세 페이지 4종(`manage.html`, `bookmark.html`, `insure.html`, `fylo.html`)
- [x] 디자인 토큰 반영: `style-guide.md` 기준 색상/타이포/스페이싱을 `css/style.css` `:root`에 커스텀 프로퍼티로 구현
- [x] 상세 페이지 4종 공유 템플릿 CSS 정리 (`.project-intro`, `.project-background`, `.static-previews`, `.project-nav` 등) — `body.page-detail` 스코프
- [x] `portfolio.html` 전용 그리드/카드 스타일 — `body.page-portfolio` 스코프
- [x] `.cta h2` 페이지 그룹별 스코프 분리 (상세 페이지군 vs 포트폴리오)
- [x] 반응형 대응: 모바일(기본) → 태블릿(48em) → 데스크톱(64em) 미디어쿼리 적용
- [x] 모바일 내비게이션 토글 기능 (`js/main.js`)
- [x] 컨택트 폼 유효성 검사 (`js/main.js` — 이름/이메일/메시지 필수값 + 이메일 형식 검증)
- [x] Vite 멀티 페이지 빌드 설정 (`vite.config.js`)
- [x] `index.html` 홈화면 세부 스타일 QA 반영:
  - 모바일 내비게이션 박스 및 내부 리스트 크기/위치(우측 32px)/여백 초기화 및 중앙 정렬 적용 (`css/style.css`)
  - 태블릿(768px 이상) 및 데스크탑(1024px 이상) 뷰포트에서 헤더 패딩, 히어로 이미지 마진 및 카드 하단 밀착 배치 오버라이드 스타일 추가 (`index.html` 내부 style)
  - 태블릿 및 데스크탑 뷰포트에서 `#about-me` 영역 컴포넌트 크기(프로필 이미지 281x600px, 텍스트 339x496px, 1015x600px 등) 고정 및 여백 초기화 사양 반영 (`index.html` 내부 style)
  - 태블릿 및 데스크탑 뷰포트에서 `.cta` 영역 간격 및 패딩 오버라이드 스타일 추가 (`index.html` 내부 style)
  - 소셜 아이콘 리스트 높이(24px) 및 수직 정렬(`align-items: center`) 세부 정렬 문제 보완 (`index.html` 내부 style 및 `css/style.css`)
- [x] 상세 페이지 4종에 중복 삽입돼 있던 인라인 `<style>`(`!important`) 오버라이드를 `css/style.css` "Detail Page Overrides" 섹션의 공유/스코프 셀렉터로 통합, 4개 HTML 파일에서 중복 블록 제거
- [x] 상세 페이지 4종(manage, bookmark, insure, fylo) 공통 스타일 및 마크업 QA 반영:
  - 헤더의 하단 여백(`padding-bottom: 40px`) 및 본문 컨테이너 상단 여백(`padding-top: 40px`) 오버라이드 적용 (HTML 내부 style)
  - `.project-intro` 상단 경계선(`.project-divider`와 동일) 추가 및 상하 패딩(`24px`) 설정 보완 (HTML 내부 style)
  - 기술 태그 리스트(`.project-tags`) 텍스트 전체의 색상을 `teal 400`으로 일괄 변경하고 상단 마진(`24px`) 설정 (HTML 내부 style)
  - `.project-background` 상하 패딩(`50px`, `40px`) 및 하위 본문 텍스트 단락의 상단 마진(`30px`) 오버라이드 (HTML 내부 style)
  - `.static-previews` 상단 패딩 제거(0), 하단 패딩(`62px`) 및 내부 이미지 리스트 상단 마진(`40px`) 보완 (HTML 내부 style)
  - `.project-nav` 영역 패딩 초기화(0), 하단 경계선 추가, 화살표 `svg`의 상단 여백(`21px`)과 텍스트 `span`의 수직 중앙 정렬 분리 적용 (HTML 내부 style)
  - `.project-nav` 내 이전/다음 링크의 텍스트(`span`)가 각 양끝으로 오도록 정렬(`left`/`right`) 및 내부 요소 간 플렉스 `gap` 제거(0) (HTML 내부 style)
  - `.project-nav` 내 텍스트 구조 변경: `.text-preset-3`(프로젝트명)이 위로, `.text-preset-7`(안내문)이 아래로 오도록 마크업 순서 스왑 완료 (HTML 마크업)
  - 상세 페이지 전용 `.cta .container` 상단 패딩(`66px`) 및 하단 패딩(`80px`) 스타일 최적화 (`css/style.css`)
  - 기술 태그 리스트(`.project-tags`) 텍스트 전체의 색상을 `teal 400`으로 변경하는 스타일을 공통 CSS 파일로 통합 (`css/style.css`)
  - `.project-nav` 내부의 `.project-nav-divider`가 비대칭 텍스트 길이에 쏠리지 않고 항상 정중앙(50%)에 고정되도록 좌우 링크에 `flex: 1 1 0%`를 부여하는 구조적 스타일 보완 완료 (`css/style.css`)

## 진행 중 / 현재 범위
- **현재 작업 범위: `manage.html`, `bookmark.html`, `insure.html`, `fylo.html`만** (2026-07-09 사용자 지시, 별도 안내 전까지 유지). 이 기간 중 요청은 이 4개 상세 페이지 및 그 마크업에 한정된 공유 파일(`css/style.css`, `js/main.js`) 수정만 진행.

## 다음 작업 후보 (미정 — 사용자 확인 필요)
- [ ] contact.html 세부 QA/개선 (범위 재지정 전까지 다른 페이지는 보류)
