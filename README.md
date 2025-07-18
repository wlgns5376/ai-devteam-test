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
│   └── bin/          # GitHub App 인증 스크립트
├── .taskmaster/      # Task Master 설정
├── CLAUDE.md         # Claude Code 작업 가이드라인
└── README.md         # 프로젝트 설명 문서
```

## 환경 설정

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