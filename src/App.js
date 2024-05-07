import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiceGamePage from "./Pages/DiceGamePage";
import HomePage from "./Pages/HomePage";
import GamesListPage from "./Pages/GamesListPage";
import Index from "./Pages/Index";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import GuessGamePage from "./Pages/GuessGamePage";
import { useContext } from "react";
import { AuthContext } from "./components/shared/context/authContext";

function App() {
  const authCtx = useContext(AuthContext);
  const content = authCtx.isLoggedIn ? (
    <>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesListPage />} />
      </Route>
      <Route path="/dice-game" element={<DiceGamePage />} />
      <Route path="/guess-game" element={<GuessGamePage />} />
    </>
  ) : (
    <>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </>
  );
  return (
    <BrowserRouter>
      <Routes>{content}</Routes>
    </BrowserRouter>
  );
}

export default App;
