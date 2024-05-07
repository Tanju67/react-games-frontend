import { createContext, useEffect, useReducer, useState } from "react";

export const GuessContext = createContext({
  highscore: 0,
  guessGameState: {},
  onGuess: () => {},
  newGame: () => {},
});

const initialState = {
  secretNumber: Math.trunc(Math.random() * 20 + 1),
  guess: 2,
  lastGuess: 2,
  score: 20,
  message: "start",
  isGameOver: false,
  status: "playing",
};

const guessReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_GUESS":
      return {
        ...state,
        guess: action.payload,
        lastGuess: state.guess,
      };

    case "UPDATE_MSG":
      let msg;
      if (state.score > 1) {
        if (action.payload > state.secretNumber) {
          msg = "🔼 Too high!";
        } else if (action.payload < state.secretNumber) {
          msg = "🔻 Too low";
        } else {
          msg = "🎉 Correct!";
        }
      } else {
        msg = "💣 YOU LOST!";
      }

      return { ...state, message: msg };

    case "UPDATE_SCORE":
      if (action.payload === state.secretNumber) {
        return { ...state };
      }
      return { ...state, score: state.score > 0 ? state.score - 1 : 0 };

    case "UPDATE_ISGAMEOVER":
      if (action.payload === state.secretNumber) {
        return {
          ...state,
          isGameOver: true,
          status: "win",
        };
      }

      if (state.score === 0) {
        return {
          ...state,
          isGameOver: true,
          status: "lost",
        };
      }
      return state;

    case "NEW_GAME":
      return {
        ...initialState,
        secretNumber: Math.trunc(Math.random() * 20 + 1),
        status: "playing",
        isGameOver: false,
      };

    default:
      break;
  }
};

export const Provider = ({ children }) => {
  const [guessGameState, dispatch] = useReducer(guessReducer, initialState);
  const [highscore, setHighscore] = useState(0);

  const updateHighscore = async () => {
    if (guessGameState.score > highscore) {
      try {
        const token = localStorage.getItem("token");
        await fetch(process.env.REACT_APP_URL + "/api/v1/user/highscore", {
          method: "POST",
          body: JSON.stringify({ highscore: guessGameState.score }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getHighscore = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        process.env.REACT_APP_URL + "/api/v1/user/highscore",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setHighscore(data.score.highscore);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHighscore();
  }, []);

  const guessHandler = (input) => {
    if (+input < 1 || +input > 20) return;
    dispatch({ type: "UPDATE_GUESS", payload: +input });
    dispatch({ type: "UPDATE_MSG", payload: +input });
    dispatch({ type: "UPDATE_SCORE", payload: +input });
    dispatch({ type: "UPDATE_ISGAMEOVER", payload: +input });
    if (guessGameState.score === 20) {
      getHighscore();
    }
  };

  const newGame = () => {
    updateHighscore();
    dispatch({ type: "NEW_GAME" });
  };

  return (
    <GuessContext.Provider
      value={{
        guessGameState: guessGameState,
        onGuess: guessHandler,
        newGame: newGame,
        highscore: highscore,
      }}
    >
      {children}
    </GuessContext.Provider>
  );
};
