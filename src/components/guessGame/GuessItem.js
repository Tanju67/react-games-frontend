import React, { useContext } from "react";
import { GuessContext } from "../shared/context/guessGameContext";
import classes from "./GuessItem.module.css";

function GuessItem({ item }) {
  const { guess, message, score } = useContext(GuessContext).guessGameState;
  return (
    <div key={item} className={classes.gameCard}>
      {+item === +guess && score < 20 && (
        <span className={+item === +guess ? classes.activeMsg : ""}>
          {message}
        </span>
      )}

      {item === 0 && (
        <div>
          <span>20</span>
        </div>
      )}

      {item === 21 && (
        <div>
          <span>1</span>
        </div>
      )}

      {item !== 0 && item !== 21 && (
        <div
          id={item}
          style={{
            backgroundColor: `var(--clr${item % 6})`,
          }}
        >
          <span className={+item === +guess ? classes.active : ""}>{item}</span>
        </div>
      )}
    </div>
  );
}

export default GuessItem;
