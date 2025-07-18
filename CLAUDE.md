# ai devteam test

## 공통

기본 언어는 한국어 입니다.

## GitHub 작업 설정

- **GitHub App 사용**: 모든 GitHub 관련 작업은 GitHub App 인증으로 수행
- **환경변수 설정 필요**:
  - `GITHUB_APP_ID`: GitHub App ID
  - `GITHUB_APP_PRIVATE_KEY_PATH`: GitHub App Private Key 파일 경로
  - `GITHUB_APP_INSTALLATION_ID`: GitHub App Installation ID
- **GitHub CLI**: `gh` 명령어로 PR, Issue, Review 등 모든 GitHub 작업 처리

### GitHub App 인증 방법

1. **JWT 토큰 생성**:

   ```bash
   JWT_TOKEN=$(.github/bin/generate_jwt.sh "$GITHUB_APP_ID" "$GITHUB_APP_PRIVATE_KEY_PATH")
   ```

2. **Access Token 발급**:

   ```bash
   curl -s -X POST -H "Authorization: Bearer $JWT_TOKEN" \
     https://api.github.com/app/installations/$GITHUB_APP_INSTALLATION_ID/access_tokens | jq -r '.token' > /tmp/claude-coder-01-token.txt
   ```

3. **GitHub CLI 로그인**:
   ```bash
   gh auth login --with-token < /tmp/claude-coder-01-token.txt
   ```

- **인증 결과**: `claude-coder-01[bot]`로 로그인
- **권한 범위**: GitHub App 권한 내에서 모든 CLI 기능 사용 가능

## 개발 규칙

- README.md, prd.md 참고
- 요구사항을 분석하고 설계를 먼저 작성, taskmaster 에 작업 등록
- 테스트 코드를 먼저 작성한 후 구현
- 필요 시 mermaid 다이어그램을 사용하여 명확한 구조 정의

## 코딩 규칙

- **Lombok 사용**: 모든 엔티티/값객체에 @Getter 적용
- **불변 객체**: 값 객체는 불변으로 설계
- **유효성 검증**: 생성자에서 비즈니스 규칙 검증
- **도메인 이벤트**: 중요한 상태 변경 시 이벤트 발행
- **패키지 구조**: domain, application, usecase로 명확히 분리
- **성능 최적화**: 쿼리 최적화, 인덱스 설정 등 고려, JPA N+1 고려, 필요 시 QueryDSL 사용

## 테스트 코드 규칙

- Given-When-Then 패턴 적용
- 예외 상황 테스트 포함
- DisplayName 사용하여 테스트 가독성 향상
- Parameterized Tests 를 적절히 활용
