import React from "react";
import DiceGame from "../components/diceGame/DiceGame";
import { Provider } from "../../src/components/shared/context/diceRollContext";
import { Provider as GameProvider } from "../../src/components/shared/context/gameContext";

function DiceGamePage() {
  return (
    <Provider>
      <GameProvider>
        <DiceGame />
      </GameProvider>
    </Provider>
  );
}

export default DiceGamePage;
