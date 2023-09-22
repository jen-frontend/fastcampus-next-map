# Next map

- React, Next.js를 이용한 지도 맛집 프로젝트 입니다.
- [Pull Request](https://github.com/jen-frontend/fastcampus-next-map/pulls?q=is%3Apr+is%3Aclosed) 탭에서 각 기능별 코드를 확인할 수 있습니다.
- 사이트 링크 1: [https://fastcampus-next-map.vercel.app/](https://fastcampus-next-map.vercel.app/)
- 사이트 링크 2: [https://www.fastcampus-nextmap.shop/](https://www.fastcampus-nextmap.shop/)

<br />

# 프로젝트 설명

## 주요 기능

- 외부 API (카카오 지도) 사용과 데이터 처리에 대한 경험
- 검색 기능 구현
- 사용자 리뷰 및 평점
- 데이터 정렬과 필터링
- geolocation API를 이용한 위치 정보 가져오기

## 앱 구조

- Next.js 반응형 웹
- TailwindCSS

## 상태관리

- Recoil, React Query
- 지도 관리
- 데이터 가져오기 (서버 상태 관리)

## 애니메이션 & 스타일링

- TailwindCSS를 이용한 스타일링

## 배포

- Vercel
- Github import 자동 배포

## 컴포넌트

- 레이아웃, 폼, 지도, 맛집 상자, 맛집 리스트, 검색 필터 등

## API

- Next.js API Routes를 이용한 백엔드 API 작성
- Prisma, Supabase를 이용한 데이터베이스 모델링 및 마이그레이션
- Next-auth, Prisma를 연동한 사용자 인증
- Prisma, React Query를 이용한 데이터 가져오기, 생성, 수정, 삭제

## 사용 스택

- Next.js
- Prisma
- Supabase
- Next-auth
- React-hook-form
- React-query
- Tailwind
- Kakao map API

## 기타 학습 개념

- Next.js를 이용한 SSR 개념
- Next.js API 개념
- Prisma 및 Supabase 개념
- Prisma 기본 문법
- Next-auth 인증
- API 개념 및 kakao map API 연동 개념
- Godaddy 호스팅

<br />

# 구현 기능

1. 메인 페이지(맛집 지도)
  - 카카오 지도에 맛집 목록을 아이콘 형식으로 나열
  - Kakao Map API로 지도 위에 맛집 마커 표시

2. 맛집 목록 페이지
  - 다양한 맛집 목록 표시
      - 사용자는 맛집을 클릭하여 상세 정보를 확인
  - 필터링, 정렬 기능(목록, 필터링)

3. 프로필 페이지(마이페이지)
  - 개인 정보 & 작성 리뷰 보여주기

4. 맛집 상세 페이지
  - 특정 맛집 정보 보여주기(주소, 연락처, 지도, 메뉴, 리뷰 등)

5. 찜한 가게 리스트
- 맛집 찜하기 기능을 통해, 저장한 맛집만 모아서 리스트로 보여주기

