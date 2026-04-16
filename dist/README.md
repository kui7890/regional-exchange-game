# 지역 교류 미션 게임 (정적 사이트 버전)

초등학교 4학년 사회 수업에서 사용할 수 있는 **지역 간 교류 체험 게임**입니다.

이 버전은 **순수 HTML / CSS / JavaScript**로 만들었기 때문에:
- `npm install`이 필요 없습니다.
- `package-lock.json` 문제가 없습니다.
- GitHub에 올린 뒤 Vercel로 바로 배포하기 쉽습니다.

## 파일 구성

- `index.html` : 메인 화면
- `styles.css` : 디자인
- `script.js` : 게임 로직
- `vercel.json` : Vercel 정적 배포 설정

## GitHub 업로드

이 폴더 안의 파일을 그대로 GitHub 저장소 루트에 올리면 됩니다.

저장소 루트 예시:

```text
index.html
styles.css
script.js
README.md
vercel.json
```

## Vercel 배포 설정

이 프로젝트는 **정적 사이트**입니다.

Vercel에서 보통 아래처럼 설정하면 됩니다.

- Framework Preset: `Other`
- Build Command: 비워 두기
- Output Directory: 비워 두기

`vercel.json`이 포함되어 있어 기본 정적 배포로 동작합니다.

## 데이터 저장 방식

- 모둠 점수와 최근 기록은 브라우저의 `localStorage`에 저장됩니다.
- 같은 브라우저에서는 새로고침 후에도 유지됩니다.
- 다른 컴퓨터나 다른 브라우저에서는 공유되지 않습니다.

## 수업 활용 팁

- 모둠별로 번갈아 한 문제씩 풀게 하면 좋습니다.
- 정답 뒤에는 왜 그 교류가 알맞은지 말하게 하면 학습 효과가 커집니다.
- 필요하면 `script.js` 안의 `missions`와 `regions` 데이터를 수정해 지역과 문제를 바꿀 수 있습니다.
