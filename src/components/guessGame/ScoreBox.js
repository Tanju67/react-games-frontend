import React, { useContext, useEffect, useState } from "react";
import classes from "./ScoreBox.module.css";
import { GuessContext } from "../shared/context/guessGameContext";

function ScoreBox() {
  const { score } = useContext(GuessContext).guessGameState;
  const { highscore } = useContext(GuessContext);

  return (
    <div className={classes.scoreBox}>
      <p>
        <span>💯 Score: </span>
        {score}
      </p>
      <p>
        <span>🥇 Highscore: </span>
        {highscore}
      </p>
    </div>
  );
}

export default ScoreBox;
