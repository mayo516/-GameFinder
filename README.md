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

https://user-images.githubusercontent.com/70703716/229031198-9cf31eb4-4f5e-4bc7-90b8-546403eb13e7.mp4

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
