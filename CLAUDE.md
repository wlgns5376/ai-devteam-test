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
   ACCESS_TOKEN=$(curl -s -X POST -H "Authorization: Bearer $JWT_TOKEN" \
     https://api.github.com/app/installations/$GITHUB_APP_INSTALLATION_ID/access_tokens | jq -r '.token')
   ```

3. **GitHub CLI 로그인**:
   ```bash
   echo "$ACCESS_TOKEN" | gh auth login --with-token
   ```

- **인증 결과**: `claude-coder-01[bot]`로 로그인
- **권한 범위**: GitHub App 권한 내에서 모든 CLI 기능 사용 가능
