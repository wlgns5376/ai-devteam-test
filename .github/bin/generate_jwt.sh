#!/bin/bash

# 사용법 출력
if [ "$#" -ne 2 ]; then
  echo "사용법: $0 <GITHUB_APP_ID> <PRIVATE_KEY_PATH.pem>"
  exit 1
fi

APP_ID="$1"
PRIVATE_KEY_PATH="$2"

# 타임스탬프 계산
iat=$(date +%s)
exp=$((iat + 600))  # 10분 후 만료

# Base64 인코딩 함수 (RFC 7515 호환: padding 제거, URL-safe)
b64enc() {
  openssl base64 -e | tr -d '=' | tr '/+' '_-' | tr -d '\n'
}

# Header 및 Payload 생성
HEADER='{"alg":"RS256","typ":"JWT"}'
PAYLOAD="{\"iat\":$iat,\"exp\":$exp,\"iss\":\"$APP_ID\"}"

# Base64-URL 인코딩
HEADER_B64=$(echo -n "$HEADER" | b64enc)
PAYLOAD_B64=$(echo -n "$PAYLOAD" | b64enc)
DATA="${HEADER_B64}.${PAYLOAD_B64}"

# 서명 생성
SIGNATURE=$(echo -n "$DATA" | openssl dgst -sha256 -sign "$PRIVATE_KEY_PATH" | b64enc)

# JWT 출력
echo "${DATA}.${SIGNATURE}"