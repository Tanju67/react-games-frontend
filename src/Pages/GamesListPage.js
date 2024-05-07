import React from "react";
import GamesList from "../components/GamesList/GamesList";
import GameItem from "../components/GamesList/GameItem";
import pigGameImg from "../assets/scrnli_2_2_2024_5-43-36 PM.png";
import guessGameImg from "../assets/scrnli_2_5_2024_12-46-25 AM.png";

function GamesListPage() {
  return (
    <GamesList>
      <GameItem title="Pig Game" image={pigGameImg} link="/dice-game" />
      <GameItem title="Guess Game" image={guessGameImg} link="/guess-game" />
    </GamesList>
  );
}

export default GamesListPage;
