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
- [x] `contact.html` 전용 스타일링 및 마크업 QA 반영 (HTML 내부 style):
  - 헤더 하단 패딩(40px), `.get-in-touch` 상하 패딩(33px) 및 상단 구분선(border-top) 추가 완료
  - 소셜 아이콘 간격(16px), `.contact-form-section` 상하 패딩(24px, 74px) 설정 완료
  - 입력창(`input`, `textarea`) 테두리 제거(0) 및 `slate 800`에 불투명도 10% 반투명 배경색 지정 완료
  - 문의 폼 내부 필드들의 세로 간격(20px) 마진형으로 정비하여 마지막 필드 아래 누적 갭 현상 제거 완료
  - 제출 버튼 너비(165px) 및 글씨 꺾임 방지(`white-space: nowrap`) 적용 완료
- [x] `contact.html` 전용 태블릿 해상도 스타일 오버라이드 추가 (HTML 내부 style):
  - 헤더 상하 패딩(64px, 94px), 헤더 컨테이너 가로폭(689px) 및 메뉴 글씨 `Text Preset 7` 적용 완료
  - `.get-in-touch` 상하 패딩(32px) 및 가로폭(690px) 지정 완료
  - `.contact-form-section` 상하 패딩(32px, 90px) 및 가로폭(690px) 지정 완료
  - 입력 필드들 간의 세로 간격(24px) 마진형 구조 보완 완료
- [x] `contact.html` 전용 데스크톱 해상도 스타일 오버라이드 추가 (HTML 내부 style):
  - 헤더 컨테이너 패딩(0) 및 메뉴 글씨 `Text Preset 7` 적용 완료
  - `.get-in-touch` 상하 패딩(48px), 가로폭(1110px), 하단 구분선(border-bottom) 추가 완료
  - `.contact-form-section` 상하 패딩(48px, 102px), 가로폭(1110px) 지정 완료
  - 입력 필드들 간의 세로 간격(24px) 마진형 구조 보완 완료
- [x] 모바일/태블릿 및 데스크톱 입력창 포커스(`:focus`) 시 배경색 흰색(`neutral 0`) 및 테두리 청록빛(`1px teal 400`) 피드백 적용 (HTML 내부 style)
- [x] 모든 화면에서 입력창 필수 미작성 오류 시 경고 테두리(`1px red 500`) 오버라이드 복구 완료 (HTML 내부 style)
- [x] 에러 경고 글씨(`.form-error`)에 일괄적으로 `Text Preset 8` (10px 이탤릭체) 스타일 적용 완료 (HTML 내부 style)
- [x] `portfolio.html` 및 `contact.html` 메뉴 활성 링크에 `aria-current="page"`를 삽입하여 활성 페이지 강조 색상(`teal 400`) 전역 정상 노출 완료 (HTML 마크업)
- [x] 전역 공통 스타일(`css/style.css`) QA 적용:
  - 데스크톱 화면에서 브랜드 헤더 및 컨테이너 양단 밀착(`padding: 0`) 및 헤더 메뉴 글씨 `Text Preset 7` 적용 전역화 완료
  - 태블릿 화면에서 브랜드 헤더 컨테이너 너비(689px) 및 패딩(0) 적용 전역화 완료
  - 전역 제출 버튼 호버(`:hover`) 시 배경색을 `teal 400`으로 전환 완료
  - 모바일 내비게이션 활성 페이지 강조 색상 매칭 제외 완료

- [x] 내부 코드 구조 리팩토링 (기능/레이아웃/디자인/애니메이션 100% 동일 유지, 2026-07-10):
  - `index.html`, `portfolio.html`, `contact.html`에 남아있던 인라인 `<style>` 오버라이드(`!important` 포함)를 전부 제거하고 `css/style.css`로 이관
  - 각 페이지 `<body>`에 `page-home`(index) / `page-contact`(contact) 클래스 신규 부여 (portfolio/상세 4종은 기존 `page-portfolio`/`page-detail` 그대로 사용), `:where(body.page-X)` 스코프로 페이지 단독 스타일 격리
  - `:where()`는 명시도를 추가하지 않으므로 기존 `!important` 유무를 그대로 보존해 캐스케이드 결과 불변 유지
  - portfolio.html/contact.html 인라인 블록에 있던 `.nav-desktop a` 태블릿/데스크톱 오버라이드는 이미 항상 활성 상태인 기존 전역 `.nav-desktop a` 규칙과 값이 완전히 동일해 실질적으로 무효(no-op)였음을 확인 후 삭제
  - contact.html의 포커스 스타일(`max-width:63.99em` 블록 + `min-width:64em` 블록, 내용 동일)을 전체 폭을 커버하는 단일 규칙으로 병합
  - `npm run build` 및 `dist/` 산출물 검사로 인라인 `<style>` 잔존 여부·body 클래스 반영 여부 확인 완료
  - `DECISIONS.md`의 "페이지 단독 스타일 분리 지침" 갱신 (인라인 `<style>` 대신 `:where(body.page-X)` 패턴 사용으로 변경)
  - (범위 제외, 사용자 확인됨) 7개 HTML 파일에 반복되는 헤더/푸터 마크업 중복은 새 빌드 의존성이 필요해 이번 리팩토링에서 제외
- [x] 주석(Comment) 전면 리팩토링 (기능/레이아웃/구조 변경 없이 주석 텍스트만 수정, 2026-07-10):
  - HTML 4종(상세페이지) 및 `js/main.js`는 이미 `AGENTS.md` 섹션 주석 형식을 충족해 변경 없음
  - `css/style.css` `.mobile-nav`에 남아있던 Figma 익스포트 잔재 주석(`/* Menu */`, `/* 오토레이아웃 */`)을 목적을 설명하는 주석 한 줄로 교체
  - `/* === Detail Page Overrides (...mobile) === */` 섹션 제목이 실제로는 전 브레이크포인트 규칙을 포함하는데 "mobile"로만 표기돼 있던 오류를 "all breakpoints unless noted"로 정정
  - 직전 인라인 스타일 이관 작업(위 항목)에서 새로 추가된 Home/Portfolio/Contact Page Overrides 구간에 파일 전반에 쓰이는 "per Figma [breakpoint]" 주석 스타일을 동일하게 추가

## 프로젝트 상태
- **완료 (2026-07-10)** — 요구된 기능/레이아웃/디자인/접근성(A11y) 반영, 내부 코드 구조 리팩토링 및 주석 정리까지 마무리됨.
- 마지막 활성 작업 범위는 "모든 페이지 공통 적용"(2026-07-09 지정)이었음 — 프로젝트 재개 시 참고용으로 남겨둠.

## 다음 작업 후보
- 없음 (재개 시 신규 요청 범위를 다시 확인)
