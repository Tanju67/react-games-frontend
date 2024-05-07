import React, { useContext, useState } from "react";
import classes from "./DiceGame.module.css";
import Button from "../shared/UIElemets/Button";
import Card from "../shared/UIElemets/Card";
import Dice from "./Dice";
import Player from "./Player";
import Modal from "../shared/UIElemets/Modal";
import PlayerCount from "./PlayerCount";
import { GameContext } from "../shared/context/gameContext";
import WinnerList from "./WinnerList";
import GameRules from "./GameRules";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function DiceGame() {
  const gameCtx = useContext(GameContext);

  const [swowGameRules, setShowGameRules] = useState(false);

  const players = [];

  for (let i = 0; i < gameCtx.gameState.playerCount; i++) {
    players.push(<Player key={i} index={i} id={i} />);
  }

  return (
    <div className={classes.game}>
      {gameCtx.isModalVisible && (
        <Modal>
          {!gameCtx.gameState.isGameOver && (
            <PlayerCount onClickHandler={gameCtx.onCloseModal} />
          )}
          {gameCtx.gameState.isGameOver && (
            <WinnerList index={gameCtx.gameState.winnerList} />
          )}
        </Modal>
      )}
      {swowGameRules && (
        <Modal className={classes.rules}>
          <GameRules onClose={() => setShowGameRules(false)} />
        </Modal>
      )}
      <div className={classes["button-box"]}>
        <NavLink to={"/"}>
          <FaHome />
        </NavLink>
        <Button onClick={gameCtx.onNewGame}>New Game</Button>
        <Button onClick={() => setShowGameRules(true)}>Game's Rule</Button>
      </div>
      <Card className={classes.container}>
        <div className={classes.diceBox}>
          <Button
            id={7}
            onClick={gameCtx.onSelectPlayer}
            className={`${classes.mainRollBtn} ${
              gameCtx.gameState.activePlayer === 7 ? classes.active : ""
            }`}
          >
            {gameCtx.gameState.activePlayer === 7
              ? "🎲 Select Next Player"
              : "🎲 Wait"}
          </Button>
          <Card className={classes.dice}>
            <Dice />
          </Card>
        </div>
        {players.map((player) => player)}
      </Card>
    </div>
  );
}

export default DiceGame;
