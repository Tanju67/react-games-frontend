import React, { useContext } from "react";
import classes from "./GameInputBox.module.css";
import Button from "../shared/UIElemets/Button";
import { GuessContext } from "../shared/context/guessGameContext";

function GameInputBox({ setInput, input }) {
  const { onGuess } = useContext(GuessContext);
  return (
    <div className={classes.gameActions}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="number"
        placeholder="Enter Guess (1-20)"
      />
      <Button onClick={() => onGuess(input)} className={classes.btn}>
        Guess
      </Button>
    </div>
  );
}

export default GameInputBox;
