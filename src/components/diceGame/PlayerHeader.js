import React, { useContext } from "react";
import classes from "./PlayerHeader.module.css";
import { GameContext } from "../shared/context/gameContext";
import { AuthContext } from "../shared/context/authContext";

function PlayerHeader({ index }) {
  const gameCtx = useContext(GameContext);
  const authCtx = useContext(AuthContext);

  return (
    <div
      style={{
        "--i": `${
          gameCtx.gameState.scoreOfPlayers[index].score * 5 <= 100
            ? gameCtx.gameState.scoreOfPlayers[index].score * 5
            : 100
        } `,
      }}
      className={`${classes.header} ${classes[`header--${index}`]} ${
        gameCtx.gameState.scoreOfPlayers[index].score * 5 < 50
          ? classes.less
          : ""
      } `}
    >
      <h2 className={classes.name} id="name--0">
        <span>{index === 0 ? authCtx.userName : "Player"}</span>
        <span>{index === 0 ? "" : index + 1}</span>
      </h2>
      <p className={classes.score} id="score--0">
        {gameCtx.gameState.scoreOfPlayers[+index].score}
      </p>
    </div>
  );
}

export default PlayerHeader;
