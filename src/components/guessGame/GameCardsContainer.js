import classes from "./GameCardsContainer.module.css";
import Card from "../shared/UIElemets/Card";

import ScoreBox from "./ScoreBox";
import GuessList from "./GuessList";

function GameCardsContainer() {
  return (
    <Card className={classes.container}>
      <GuessList />
      <ScoreBox />
    </Card>
  );
}

export default GameCardsContainer;
