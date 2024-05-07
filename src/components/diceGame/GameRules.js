import React from "react";
import classes from "./GameRules.module.css";

function GameRules({ onClose }) {
  return (
    <div className={classes["rules-modal"]}>
      <button onClick={onClose}>&times;</button>
      <h1>🧾 RULES OF THE GAME 🧾</h1>
      <ol>
        <li>Pig Game can be played with minimum 2 and maximum 6 people.</li>
        <li>
          At the beginning of the game, you can choose how many people you will
          play with.
        </li>
        <li>
          In 2-player game mode, when you press the hold button, the turn passes
          to the next player.
        </li>
        <li>
          In other modes, you must click the select next player button to
          determine the next player.
        </li>
        <li>
          When the active player clicks the roll button, the current score
          increases by the number of dice rolled.
        </li>
        <li>
          The active player does not change unless the number 1 is rolled on the
          dice or the hold button is pressed.
        </li>
        <li>
          If the dice rolls to 1, the active player becomes the next player and
          the current score is reset.
        </li>
        <li>
          If the hold button is clicked, the current score is added to the total
          score.
        </li>
        <li>The player whose total score exceeds 100 wins the game.</li>
        <li>
          In 2 and 3 player game modes, the game ends by determining only the
          first player, while in other modes the game ends after determining the
          second and third players.
        </li>
        <li>GOOD LUCK</li>
      </ol>
    </div>
  );
}

export default GameRules;
