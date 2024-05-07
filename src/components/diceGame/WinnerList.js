import React, { useContext } from "react";
import classes from "./WinnerList.module.css";
import Button from "../shared/UIElemets/Button";
import { GameContext } from "../shared/context/gameContext";

function WinnerList({ index }) {
  const gameCtx = useContext(GameContext);
  const sortedWinnerList = index.sort((a, b) => a.rank - b.rank);
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>The winners of the game</h2>
      <ol className={classes.list}>
        {sortedWinnerList.map((list, i) => {
          return (
            <li key={list.id}>
              {i + 1}. Player {list.player}
            </li>
          );
        })}
      </ol>
      <Button onClick={gameCtx.onNewGame}>New Game</Button>
    </div>
  );
}

export default WinnerList;
