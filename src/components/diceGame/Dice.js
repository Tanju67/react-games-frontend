import React, { useContext } from "react";
import classes from "./Dice.module.css";
import { DiceRollContext } from "../shared/context/diceRollContext";

function Dice({ onRollDice }) {
  const rollCtx = useContext(DiceRollContext);
  return (
    <div className={classes.container}>
      <div
        style={{ transform: rollCtx.rotation }}
        className={`${classes.dice} ${
          rollCtx.animation ? classes.animate : ""
        }`}
      >
        <div className={`${classes.face} ${classes.front}`}></div>
        <div className={`${classes.face} ${classes.back}`}></div>
        <div className={`${classes.face} ${classes.top}`}></div>
        <div className={`${classes.face} ${classes.bottom}`}></div>
        <div className={`${classes.face} ${classes.right}`}></div>
        <div className={`${classes.face} ${classes.left}`}></div>
      </div>
    </div>
  );
}

export default Dice;
