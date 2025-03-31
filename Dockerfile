# 베이스 이미지 설정
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 개발 서버 실행
CMD ["npm", "start"]