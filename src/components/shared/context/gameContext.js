import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DiceRollContext } from "./diceRollContext";

export const GameContext = createContext({
  gameState: {},
  isModalVisible: true,
  onRollHandler: () => {},
  onHoldHandler: () => {},
  onSelectPlayer: () => {},
  onStartGame: () => {},
  onCloseModal: () => {},
  onNewGame: () => {},
});

const initialState = {
  playerCount: 0,
  diceNumber: 0,
  activePlayer: 7,
  scoreOfPlayers: [],
  listOfPlayer: [],
  winnerList: [],
  isGameOver: false,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      let scores = [];
      let playerList = [];
      for (let i = 0; i < +action.payload; i++) {
        scores.push({
          player: i + 1,
          id: i,
          currentScore: 0,
          score: 0,
          rank: 0,
        });
        playerList.push(i);
      }

      return {
        ...state,
        playerCount: +action.payload,
        scoreOfPlayers: scores,
        listOfPlayer: playerList,
      };

    case "UPDATE_CURRENT_SCORE":
      return {
        ...state,
        scoreOfPlayers: state.scoreOfPlayers.map((item) => {
          return item.id === action.payload.playerId
            ? {
                ...item,
                currentScore:
                  action.payload.diceNumber === 1
                    ? 0
                    : item.currentScore + action.payload.diceNumber,
              }
            : { ...item };
        }),
      };

    case "NEXT_PLAYER":
      return {
        ...state,
        activePlayer:
          state.activePlayer === state.listOfPlayer.length - 1
            ? 0
            : state.activePlayer + 1,
      };

    case "UPDATE_SCORE":
      return {
        ...state,
        scoreOfPlayers: state.scoreOfPlayers.map((item) => {
          return item.id === action.payload.playerId
            ? {
                ...item,
                currentScore: 0,
                score: item.score + item.currentScore,
              }
            : { ...item };
        }),
      };

    case "UPDATE_ACTIVE_PLAYER":
      return {
        ...state,
        activePlayer: action.payload,
      };

    case "UPDATE_PLAYER_LIST":
      const newPlayerList = state.scoreOfPlayers
        .filter((item) => item.score < 20)
        .map((item) => item.id);

      return {
        ...state,
        listOfPlayer: newPlayerList,
      };

    case "UPDATE_RANK":
      const filteredItem = state.scoreOfPlayers.filter(
        (item) => item.score >= 20 && item.rank === 0
      );
      if (filteredItem.length > 0) {
        filteredItem[0].rank = state.winnerList.length;
      }

      const copyScoreOfPlayers = [...state.scoreOfPlayers];
      copyScoreOfPlayers[filteredItem[0]?.id] = filteredItem[0];
      return {
        ...state,
        scoreOfPlayers: copyScoreOfPlayers,
      };

    case "UPDATE_WINNER_LIST":
      const newWinnerList = state.scoreOfPlayers.filter(
        (item) => item.score >= 20
      );

      return {
        ...state,
        winnerList: newWinnerList,
      };

    case "GAME_OVER":
      if (state.playerCount === 2 || state.playerCount === 3) {
        if (state.winnerList.length === 1) {
          return { ...state, isGameOver: true };
        }
      } else {
        if (state.winnerList.length === 3) {
          console.log(state.winnerList);
          return { ...state, isGameOver: true };
        }
      }
      return state;

    case "NEW_GAME":
      return initialState;

    default:
      break;
  }
};

export const Provider = ({ children }) => {
  const rollCtx = useContext(DiceRollContext);
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isRolling, setIsRolling] = useState(false);

  const onStartGame = (plrCount) => {
    dispatch({ type: "START_GAME", payload: plrCount });
  };

  const rollHandler = (e) => {
    const playerId = +e.target.id;
    if (gameState.listOfPlayer[gameState.activePlayer] !== playerId) return;
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    setIsRolling(true);
    setTimeout(() => {
      dispatch({
        type: "UPDATE_CURRENT_SCORE",
        payload: { diceNumber, playerId },
      });
      if (diceNumber === 1) {
        dispatch({ type: "NEXT_PLAYER" });
      }
      setIsRolling(false);
    }, 4030);

    rollCtx.random(diceNumber);
  };

  const holdHandler = (e) => {
    const playerId = +e.target.id;
    if (
      gameState.listOfPlayer[gameState.activePlayer] !== playerId ||
      isRolling
    )
      return;

    if (gameState.playerCount === 2) {
      dispatch({ type: "NEXT_PLAYER" });
      dispatch({ type: "UPDATE_SCORE", payload: { playerId } });
      dispatch({ type: "UPDATE_PLAYER_LIST" });
      dispatch({ type: "UPDATE_WINNER_LIST" });
      dispatch({ type: "GAME_OVER" });
    } else {
      dispatch({ type: "UPDATE_ACTIVE_PLAYER", payload: 7 });
      dispatch({ type: "UPDATE_SCORE", payload: { playerId } });
      dispatch({ type: "UPDATE_PLAYER_LIST" });
      dispatch({ type: "UPDATE_RANK" });
      dispatch({ type: "UPDATE_WINNER_LIST" });
      dispatch({ type: "GAME_OVER" });
      console.log(gameState);
    }
  };

  const selectPlayerHandler = (e) => {
    if (gameState.activePlayer !== 7 || isRolling) return;
    const diceNumber = Math.floor(
      Math.random() * gameState.listOfPlayer.length
    );
    setIsRolling(true);
    setTimeout(() => {
      dispatch({
        type: "UPDATE_ACTIVE_PLAYER",
        payload: diceNumber,
      });
      setIsRolling(false);
    }, 4500);

    rollCtx.random(gameState.listOfPlayer[diceNumber] + 1);
  };

  const onCloseModal = (e) => {
    setIsModalVisible(false);
    onStartGame(e.target.textContent);
  };

  const newGameHandler = () => {
    dispatch({ type: "NEW_GAME" });
    setIsModalVisible(true);
  };

  const { isGameOver } = gameState;

  useEffect(() => {
    if (isGameOver) {
      setIsModalVisible(true);
    }
  }, [isGameOver]);

  return (
    <GameContext.Provider
      value={{
        onHoldHandler: holdHandler,
        onRollHandler: rollHandler,
        onSelectPlayer: selectPlayerHandler,
        onStartGame: onStartGame,
        gameState: gameState,
        onCloseModal: onCloseModal,
        isModalVisible: isModalVisible,
        onNewGame: newGameHandler,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
