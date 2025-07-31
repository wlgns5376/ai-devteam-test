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

## 기술 스택

- **언어**: TypeScript
- **런타임**: Node.js
- **테스트**: Jest (TDD)
- **린터**: ESLint
- **포맷터**: Prettier
- **Git Hooks**: Husky + lint-staged

## 프로젝트 구조

```
ai-devteam-test/
├── .github/          # GitHub 관련 설정
│   └── bin/          # GitHub App 인증 스크립트
├── .husky/           # Git hooks 설정
├── .taskmaster/      # Task Master 설정
├── src/              # 소스 코드
│   ├── __tests__/    # 테스트 파일
│   └── index.ts      # 메인 진입점
├── dist/             # 빌드 결과물 (gitignore)
├── coverage/         # 테스트 커버리지 (gitignore)
├── CLAUDE.md         # Claude Code 작업 가이드라인
├── README.md         # 프로젝트 설명 문서
├── package.json      # 프로젝트 설정
├── tsconfig.json     # TypeScript 설정
├── jest.config.js    # Jest 설정
├── eslint.config.js  # ESLint 설정
└── .prettierrc       # Prettier 설정
```

## 환경 설정

### 의존성 설치

```bash
npm install
```

### 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 테스트 감시 모드
npm run test:watch

# 테스트 커버리지 확인
npm run test:coverage

# 빌드
npm run build

# 타입 체크
npm run typecheck

# 린트
npm run lint

# 린트 자동 수정
npm run lint:fix

# 코드 포맷팅
npm run format
```

### GitHub App 인증

이 프로젝트는 GitHub App을 통해 인증하며, 다음 환경변수가 필요합니다:

- `GITHUB_APP_ID`: GitHub App ID
- `GITHUB_APP_PRIVATE_KEY_PATH`: GitHub App Private Key 파일 경로
- `GITHUB_APP_INSTALLATION_ID`: GitHub App Installation ID

## 작업 흐름

1. GitHub Projects 보드에 새로운 작업을 추가합니다
2. AI DevTeam이 자동으로 작업을 인식하고 할당합니다
3. Claude Code가 작업 요구사항에 따라 구현합니다
4. 변경사항을 커밋하고 PR을 생성합니다
5. 작업 완료 후 Projects 보드가 업데이트됩니다

## 기여 방법

- 새 작업에 대한 브랜치 생성 (형식: `feature/작업명-#이슈번호`)
- 커밋 메시지에 작업 ID 포함 (예: `docs: README 추가 (#1)`)
- PR 생성 및 리뷰 요청

## 라이선스

이 프로젝트는 테스트 목적으로 생성되었습니다.
