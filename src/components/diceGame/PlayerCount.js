import React from "react";
import classes from "./PlayerCount.module.css";
import Button from "../shared/UIElemets/Button";

function PlayerCount({ onClickHandler }) {
  return (
    <div className={classes.modal}>
      <h2>choose the counts of the player</h2>
      <div className={classes["btn-container"]}>
        <Button onClick={onClickHandler}>2</Button>
        <Button onClick={onClickHandler}>3</Button>
        <Button onClick={onClickHandler}>4</Button>
        <Button onClick={onClickHandler}>5</Button>
        <Button onClick={onClickHandler}>6</Button>
      </div>
    </div>
  );
}

export default PlayerCount;
