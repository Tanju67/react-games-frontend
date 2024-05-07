import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  userName: "",
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const Provider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const loginHandler = (token, user) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setUserName(user);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const getCurentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        process.env.REACT_APP_URL + "/api/v1/user/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setUserName(data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      getCurentUser();
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
