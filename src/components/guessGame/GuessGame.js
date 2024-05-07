import React, { useContext, useState } from "react";
import classes from "./GuessGame.module.css";
import { GuessContext } from "../shared/context/guessGameContext";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import GameModalsContainer from "./GameModalsContainer";
import GameInputBox from "./GameInputBox";
import GameCardsContainer from "./GameCardsContainer";

function GuessGame() {
  const [input, setInput] = useState("");
  const { newGame, guessGameState } = useContext(GuessContext);
  const { isGameOver } = guessGameState;

  return (
    <div className={classes.guess}>
      <NavLink to={"/"}>
        <FaHome />
      </NavLink>
      {isGameOver && (
        <GameModalsContainer newGame={newGame} setInput={setInput} />
      )}
      <GameInputBox setInput={setInput} input={input} />
      <GameCardsContainer />
    </div>
  );
}

export default GuessGame;
