import React from "react";
import GuessGame from "../components/guessGame/GuessGame";
import { Provider } from "../components/shared/context/guessGameContext";

function GuessGamePage() {
  return (
    <Provider>
      <GuessGame />
    </Provider>
  );
}

export default GuessGamePage;
