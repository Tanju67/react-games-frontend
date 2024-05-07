import React, { useContext } from "react";
import classes from "./GuessList.module.css";
import { GuessContext } from "../shared/context/guessGameContext";
import GuessItem from "./GuessItem";
import { AuthContext } from "../shared/context/authContext";

function GuessList() {
  const { guess, lastGuess } = useContext(GuessContext).guessGameState;
  const authCtx = useContext(AuthContext);
  const translateTime = guess - lastGuess;

  return (
    <>
      <span className={classes.name}>🎈 Good Luck {authCtx.userName}</span>
      <div
        style={{
          transform: `translateX(${-34 * (guess - 1)}rem)`,
          transition: `all ${Math.abs(translateTime) * 0.3}s `,
        }}
        className={classes.gameCards}
      >
        {Array.from({ length: 22 }, (v, i) => i).map((item) => (
          <GuessItem key={item} item={item} />
        ))}
      </div>
    </>
  );
}

export default GuessList;
