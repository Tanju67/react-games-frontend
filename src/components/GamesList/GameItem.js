import React from "react";
import classes from "./GameItem.module.css";
import Button from "../shared/UIElemets/Button";
import { NavLink } from "react-router-dom";

function GameItem({ image, link, title }) {
  return (
    <div className={classes.gameCard}>
      <div className={classes.imgBox}>
        <img src={image} alt="games" />
      </div>
      <div className={classes.textBox}>
        <h2>{title}</h2>
        <Button>
          <NavLink to={link}>Play</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default GameItem;
