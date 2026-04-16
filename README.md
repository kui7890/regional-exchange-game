# 지역 교류 미션 게임

초등학교 4학년 학생들이 강진, 장흥, 목포, 해남, 광주 간의 지역 교류를 게임처럼 체험할 수 있도록 만든 React + Vite 프로젝트입니다.

## 주요 기능

- 지역 교류 미션 해결
- 모둠별 점수 경쟁
- 리더보드 표시
- 최근 결과 기록
- 지역별 힌트 보기

## 실행 방법

### 1. Node.js 설치
Node.js LTS 버전을 설치합니다.

### 2. 프로젝트 실행
터미널에서 아래 명령어를 실행합니다.

```bash
npm install
npm run dev
```

브라우저에서 표시되는 로컬 주소로 접속하면 됩니다.

## 빌드 방법

```bash
npm run build
```

빌드가 끝나면 `dist` 폴더가 생성됩니다.

## GitHub 업로드 방법

```bash
git init
git add .
git commit -m "첫 배포용 프로젝트 업로드"
git branch -M main
git remote add origin 저장소주소
git push -u origin main
```

## Vercel 배포 방법

1. GitHub에 이 프로젝트를 업로드합니다.
2. Vercel에 로그인합니다.
3. `Add New Project`를 누릅니다.
4. GitHub 저장소를 선택합니다.
5. 배포 버튼을 누릅니다.

## 참고

- 현재 리더보드 점수는 브라우저 메모리 기준이라 새로고침하면 초기화됩니다.
- 점수를 계속 저장하려면 Firebase, Supabase 같은 데이터 저장 기능을 추가해야 합니다.
