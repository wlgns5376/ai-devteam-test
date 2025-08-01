# AI DevTeam 테스트 프로젝트

## 개요
이 프로젝트는 AI DevTeam 프로젝트 동작 테스트용입니다.

## 목적
GitHub Projects 보드에서 이 저장소에 관련된 일감을 받아와서 제대로 동작하는지 확인합니다.

## 주요 기능
- GitHub Projects 보드와의 연동 테스트
- AI DevTeam의 작업 할당 및 처리 검증
- 자동화된 개발 워크플로우 테스트
- GitHub App을 통한 인증 및 작업 처리

## 프로젝트 구조
```
ai-devteam-test/
├── .github/          # GitHub 관련 설정
├── .taskmaster/      # Task Master 설정
├── CLAUDE.md         # Claude Code 작업 가이드라인
├── CLAUDE.local.md   # 프로젝트별 작업 지침
├── src/              # 소스 코드
│   ├── components/   # React 컴포넌트
│   ├── pages/        # 페이지 컴포넌트
│   ├── hooks/        # 커스텀 훅
│   ├── services/     # API 서비스
│   ├── store/        # 상태 관리
│   ├── types/        # TypeScript 타입 정의
│   ├── utils/        # 유틸리티 함수
│   └── test/         # 테스트 설정
├── index.html        # 엔트리 HTML
├── package.json      # 프로젝트 설정
├── vite.config.ts    # Vite 설정
├── vitest.config.ts  # Vitest 설정
├── tsconfig.json     # TypeScript 설정
├── tailwind.config.js # Tailwind CSS 설정
└── README.md         # 프로젝트 설명 문서
```

## 기술 스택

### Frontend
- **프레임워크**: React 18 + Vite
- **언어**: TypeScript (strict mode)
- **라우팅**: React Router DOM v7
- **스타일링**: Tailwind CSS v4
- **상태관리**: Zustand v5 + TanStack Query v5
- **HTTP 클라이언트**: Axios + Zod (타입 검증)
- **테스팅**: Vitest + React Testing Library
- **코드 품질**: ESLint + Prettier + Husky
- **배포**: Vercel or Netlify

## 환경 설정

### 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 개발 스크립트
```bash
# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix

# 코드 포맷팅
npm run format

# 타입 체크
npm run typecheck

# 테스트 실행
npm run test

# 테스트 커버리지
npm run test:coverage

# 테스트 UI
npm run test:ui
```


## 개발 원칙

### TDD (테스트 주도 개발)
1. 요구사항에 따른 모든 테스트 코드를 먼저 작성
2. 테스트 실행하여 실패 확인 (Red)
3. 테스트를 통과하는 최소한의 코드 작성 (Green)
4. 코드 리팩토링 (Refactor)

### SOLID 원칙
- **단일 책임 원칙 (SRP)**: 각 클래스는 하나의 책임만 가짐
- **개방-폐쇄 원칙 (OCP)**: 확장에는 열려있고 수정에는 닫혀있음
- **리스코프 치환 원칙 (LSP)**: 하위 타입은 상위 타입을 대체 가능
- **인터페이스 분리 원칙 (ISP)**: 필요한 인터페이스만 의존
- **의존성 역전 원칙 (DIP)**: 구체적인 것이 추상적인 것에 의존

### Clean Code
- 의미 있는 이름 사용
- 함수는 한 가지 일만 수행 (20줄 이내)
- 설명 변수 적극 활용
- 일관성 있는 코드 스타일 유지

### 테스트 규칙
- Given-When-Then 패턴 적용
- 예외 상황 테스트 포함
- 테스트 커버리지 80% 이상 유지

## 작업 흐름
1. GitHub Projects 보드에 새로운 작업을 추가합니다
2. AI DevTeam이 자동으로 작업을 인식하고 할당합니다
3. Claude Code가 작업 요구사항에 따라 구현합니다
4. 변경사항을 커밋하고 PR을 생성합니다
5. 작업 완료 후 Projects 보드가 업데이트됩니다

## 기여 방법
- 새 작업에 대한 브랜치 생성 (형식: `issue-{번호}`)
- 커밋 메시지 규칙:
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `style`: 코드 포맷팅, 세미콜론 누락 등
  - `refactor`: 코드 리팩토링
  - `test`: 테스트 추가/수정
  - `chore`: 빌드 업무, 패키지 매니저 설정 등
- PR 생성 및 리뷰 요청

## 작업 완료 기준
1. 모든 테스트 통과
2. 테스트 커버리지 80% 이상
3. 린트 에러 없음
4. 타입 에러 없음
5. PR 작성 및 리뷰 준비 완료

## 라이선스
이 프로젝트는 테스트 목적으로 생성되었습니다.
