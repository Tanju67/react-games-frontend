import React, { useContext } from "react";
import classes from "./PlayerBody.module.css";
import Button from "../shared/UIElemets/Button";
import { GameContext } from "../shared/context/gameContext";

function PlayerBody({ index }) {
  const gameCtx = useContext(GameContext);
  return (
    <div
      className={`${classes.body} ${classes[`body--${index}`]} ${
        gameCtx.gameState.scoreOfPlayers[+index].score >= 20
          ? classes.winner
          : ""
      } `}
    >
      <div
        className={`${classes.current} ${
          gameCtx.gameState.listOfPlayer[gameCtx.gameState.activePlayer] ===
          index
            ? classes.active
            : ""
        }`}
      >
        <p className={classes["current-label"]}>Current</p>
        <p className={classes["current-score"]} id={`current--${index}`}>
          {gameCtx.gameState.scoreOfPlayers[+index].currentScore}
        </p>
      </div>
      <div className={classes.btns}>
        <Button
          id={index}
          onClick={gameCtx.onRollHandler}
          className={`${classes.btn} ${classes["btn--roll"]}`}
          data-btn="0"
        >
          🎲 Roll dice
        </Button>
        <Button
          id={index}
          className={`${classes.btn} ${classes["btn--hold"]}`}
          onClick={gameCtx.onHoldHandler}
          data-btn="0"
        >
          📥 Hold
        </Button>
      </div>
    </div>
  );
}

export default PlayerBody;
