import "./App.css";
import { ranks } from "./statics/ranks";

function App() {
  return (
    <div>
      <table>
        <TableHead />
        <tbody>
          {ranks.map((rank, index) => {
            const isTopFive = index <= 4;

            return (
              <TableRow
                key={index}
                index={index}
                rank={rank}
                isTopFive={isTopFive}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <td>순위</td>
        <td>팀명</td>
        <td>경기</td>
        <td>승</td>
        <td>패</td>
        <td>무</td>
        <td>승률</td>
        <td>게임차</td>
      </tr>
    </thead>
  );
}

function TableRow({ index, rank, isTopFive }) {
  return (
    <tr>
      <td style={isTopFive ? { color: "gold" } : {}}>{index + 1}</td>
      <td>{rank.name}</td>
      <td>{rank.game}</td>
      <td>{rank.wins}</td>
      <td>{rank.loses}</td>
      <td>{rank.draw}</td>
      <td>{rank.winRate}</td>
      <td>{rank.gameDiff}</td>
    </tr>
  );
}

export default App;
