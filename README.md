# 게임 파인더 :: 게이머들을 위한 솔루션

## 서비스 소개

GameFinder는 게임을 좋아하는 사람들이 할 게임이 없어 고민하는 문제를 해결하자! 라는 아이디어에서 시작한 프로젝트 입니다.

- 자신의 취향에 맞게 게임을 추천 받을 수 있습니다.
- ChatGPT를 활용해서 서비스를 구현했습니다.

## 개발 기간

기능 구현과 스타일링 : 2/8 ~ 3/31

리팩토링 : 진행중

## 프로젝트 목표

1. nextjs로 SSR을 통한 SEO향상
2. 타입스크립트를 실전에서 사용하면서 배우기

## 개발 환경

- 개발 :
  FE : Next.js / Sass /TypeScript
  BE : Node.js /Express.js /ChatGPT

## 기능 시연

[시퀀스 01.mp4](%E1%84%80%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A5%20%E1%84%80%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%86%E1%85%A5%E1%84%83%E1%85%B3%E1%86%AF%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%B1%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%89%E1%85%A7%E1%86%AB%20a878ee1abbcd47d28762beb8a16fd88e/%25EC%258B%259C%25ED%2580%2580%25EC%258A%25A4_01.mp4)

## 개발 이야기

- Typescript 사용기

[TypeScript에서 객체에서 Key로 String을 쓰지 못하는 이유 ( String과 String Literal )](https://devwater.tistory.com/38)

- meta 태그

```jsx
export default function Head() {
  return (
    <>
      <title>게임파인더 GAME FINDER</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="게임 취향을 반영해서 게임을 추천해주는 사이트. 여러분이 좋아할만한 게임을 찾아드립니다. "
      />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="게임파인더: GAME FINDER " />
      <meta property="og:type" content="컨텐츠 타입" />
      <meta property="og:url" content="페이지 주소" />
      <meta property="og:image" content="페이지 썸네일 이미지 주소" />
      <meta
        property="og:description"
        content="게임 취향을 반영해서 게임을 추천해주는 사이트. 여러분이 좋아할만한 게임을 찾아드립니다."
      />
      <meta name="twitter:card" content="Summary Card" />
      <meta name="twitter:title" content="게임파인더: GAME FINDER" />
      <meta
        name="twitter:description"
        content="게임 취향을 반영해서 게임을 추천해주는 사이트. 여러분이 좋아할만한 게임을 찾아드립니다."
      />
      <meta name="twitter:image" content="카드 썸네일 이미지 주소" />
    </>
  );
}
```
