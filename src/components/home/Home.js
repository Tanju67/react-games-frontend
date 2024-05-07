import React, { useContext } from "react";
import classes from "./Home.module.css";
import homeImg from "../../assets/undraw_video_game_night_8h8m (1).svg";
import Button from "../shared/UIElemets/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../shared/context/authContext";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className={classes.home}>
      <div className={classes.textBox}>
        <h1>React Games</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
          est, blandit id rutrum ac, consequat a diam. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Proin condimentum arcu non augue maximus scelerisque.
          Aliquam at tincidunt massa.
        </p>
        <Button>
          <NavLink to={isLoggedIn ? "/games" : "/login"}>Play Game</NavLink>
        </Button>
      </div>
      <div className={classes.imgBox}>
        <img src={homeImg} alt="home" />
      </div>
    </div>
  );
}

export default Home;
