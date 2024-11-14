## Mission

<aside>
😁

지금까지 배운 내용을 활용해서 KBO 야구 순위표를 React로 만들어 보자

</aside>

---

## 요구사항

<aside>

- **[코드스니펫] 프로젝트 시작하기**
  ```jsx
  npm create vite@latest kbo-rankings -- --template react
  ```
- **[코드스니펫] 순위 데이터**
  ```jsx
  // src\statics\ranks.js
  export const ranks = [
    {
      name: "KIA",
      game: 140,
      wins: 85,
      loses: 53,
      draw: 2,
      winRate: 0.616,
      gameDiff: 0,
    },
    {
      name: "삼성",
      game: 142,
      wins: 77,
      loses: 63,
      draw: 2,
      winRate: 0.55,
      gameDiff: 9,
    },
    {
      name: "LG",
      game: 141,
      wins: 74,
      loses: 65,
      draw: 2,
      winRate: 0.532,
      gameDiff: 11.5,
    },
    {
      name: "두산",
      game: 142,
      wins: 72,
      loses: 68,
      draw: 2,
      winRate: 0.5,
      gameDiff: 14,
    },
    {
      name: "KT",
      game: 142,
      wins: 70,
      loses: 70,
      draw: 2,
      winRate: 0.5,
      gameDiff: 16,
    },
    {
      name: "SSG",
      game: 140,
      wins: 68,
      loses: 70,
      draw: 2,
      winRate: 0.493,
      gameDiff: 17,
    },
    {
      name: "롯데",
      game: 139,
      wins: 63,
      loses: 72,
      draw: 4,
      winRate: 0.467,
      gameDiff: 20.5,
    },
    {
      name: "한화",
      game: 140,
      wins: 64,
      loses: 74,
      draw: 2,
      winRate: 0.464,
      gameDiff: 21,
    },
    {
      name: "NC",
      game: 137,
      wins: 60,
      loses: 75,
      draw: 2,
      winRate: 0.444,
      gameDiff: 23.5,
    },
    {
      name: "키움",
      game: 139,
      wins: 58,
      loses: 81,
      draw: 0,
      winRate: 0.417,
      gameDiff: 27.5,
    },
  ];
  ```

</aside>

- 스타일까지 동일하지 않아도 괜찮아요.
- `<table>` 태그를 사용해서 만들어 주세요.
- 포스트 시즌에 올라가는 상위 5팀의 텍스트 컬러는 gold 컬러로 해주세요.
- 그 외의 부분은 자유롭게 커스텀 해서 작성해 주세요.
