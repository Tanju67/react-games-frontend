import React, { useContext } from "react";
import Modal from "../shared/UIElemets/Modal";
import classes from "./GameModalsContainer.module.css";
import { GuessContext } from "../shared/context/guessGameContext";
import Button from "../shared/UIElemets/Button";

function GameModalsContainer({ newGame, setInput }) {
  const { status, score } = useContext(GuessContext).guessGameState;
  const { highscore } = useContext(GuessContext);
  return (
    <Modal className={classes.guessModal}>
      <h2>{status === "win" ? "🎉 YOU WON 🎉" : "💣 YOU LOST 💣"}</h2>

      {status === "win" && (
        <p>
          <span>Your {score > highscore && "New "}Highscore: </span>{" "}
          {highscore > score ? highscore : score}
        </p>
      )}

      <p>
        <span>Your Score: </span> {score}
      </p>

      <Button
        onClick={() => {
          newGame();
          setInput("");
        }}
      >
        Play Again
      </Button>
    </Modal>
  );
}

export default GameModalsContainer;
