# Cryptopulse

 ![로고](/public/main.png) ![그림](/public/list.png) ![디테일](/public/detail.png) ![스택](/public/stack.png)


## 프로젝트 소개

Cryptopulse는 최근 7일간의 코인 가격 동향을 추적하고 분석하는 웹 애플리케이션입니다. React와 TypeScript를 기반으로 하며, 차트 표시를 위해 Chart.js를 사용합니다. 사용자는 자신의 관심 있는 코인을 추적하고, Firebase를 통해 로그인하여 코인을 "나의 코인" 목록에 추가하거나 삭제할 수 있습니다.

## 기능


- 코인 가격의 실시간 트래킹
- 사용자 계정을 통한 코인의 추가 및 삭제
- 차트를 통한 가격 동향 시각화
- Firebase 인증을 통한 로그인 및 사용자 관리
- 반응형 웹 디자인

## 사용 기술

- React.js: UI 구성
- TypeScript: 타입 안전성 보장
- Chart.js: 데이터 시각화
- Firebase: 백엔드 서비스(인증 및 데이터베이스)
- Styled-Components: CSS-in-JS 스타일링
- React Query: 서버 상태 관리
- Zustand: 전역 상태 관리
- Vite: 빌드 툴 및 개발 서버

## 설치 방법

### 레포지토리를 클론합니다:

```bash
git clone https://example.com/cryptopulse.git
```

### 의존성을 설치합니다:

```bash
npm install
```

### 개발 서버를 실행합니다:

```bash
npm run dev
```

## 스크립트

- npm run dev: 개발 모드에서 앱을 실행합니다.
- npm run build: 프로덕션을 위한 앱을 빌드합니다.
- npm run lint: 프로젝트의 코드를 Linting 합니다.
- npm run preview: 빌드된 앱을 로컬 서버에서 확인합니다.

## 구성 요소

- CoinDetailPage: 코인 상세 정보 및 가격 차트를 보여 줍니다.
- MyCoinPage: 사용자가 추가한 코인을 관리할 수 있는 페이지입니다.
- HistoricalPriceChart: 최근 7일간의 가격 데이터를 그래프로 보여 줍니다.
