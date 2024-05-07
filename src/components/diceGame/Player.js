import React from "react";
import classes from "./Player.module.css";
import PlayerHeader from "./PlayerHeader";
import PlayerBody from "./PlayerBody";

function Player({ index }) {
  return (
    <div className={`${classes.player} ${classes[`player--${index}`]}`}>
      <PlayerHeader index={index} />
      <PlayerBody index={index} />
    </div>
  );
}

export default Player;
