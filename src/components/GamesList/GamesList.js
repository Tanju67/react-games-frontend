import React from "react";
import classes from "./GamesList.module.css";

function GamesList({ children }) {
  return <div className={classes.games}>{children}</div>;
}

export default GamesList;
