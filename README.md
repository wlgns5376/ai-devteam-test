# AI DevTeam 테스트 프로젝트

## 개요
이 프로젝트는 AI DevTeam 프로젝트의 동작을 테스트하기 위한 저장소입니다.

## 목적
GitHub Projects 보드에서 이 저장소에 관련된 일감을 받아와서 AI DevTeam이 제대로 동작하는지 확인합니다.

## 주요 기능
- GitHub Projects 보드와의 연동 테스트
- AI DevTeam의 작업 처리 프로세스 검증
- 자동화된 개발 워크플로우 테스트

## 프로젝트 구조
```
ai-devteam-test/
├── README.md          # 프로젝트 설명 문서
├── CLAUDE.md         # AI DevTeam 작업 가이드라인
└── .github/          # GitHub 관련 설정
    └── bin/          # GitHub App 인증 스크립트
```

## 사용 방법
1. GitHub Projects 보드에 새로운 이슈 생성
2. AI DevTeam이 자동으로 이슈를 감지하고 작업 수행
3. 작업 완료 후 자동으로 PR 생성

## 환경 설정
AI DevTeam이 정상적으로 동작하기 위해서는 다음 환경변수가 필요합니다:
- `GITHUB_APP_ID`: GitHub App ID
- `GITHUB_APP_PRIVATE_KEY_PATH`: GitHub App Private Key 파일 경로
- `GITHUB_APP_INSTALLATION_ID`: GitHub App Installation ID

## 기여 방법
1. 이슈를 통해 개선사항 제안
2. PR을 통해 직접 기여

## 라이선스
이 프로젝트는 테스트 목적으로 생성되었습니다.