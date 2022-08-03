import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const initialLogin = JSON.parse(localStorage.getItem("stateLogin"));
  const [login, setLogin] = useState(initialLogin || false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleLogin = (dataUser) => {
    localStorage.setItem("dataUser", JSON.stringify(dataUser));
    setLogin(true);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("stateLogin");
    localStorage.removeItem("dataUser");
    setLogin(false);
    window.location.reload();
  };

  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
  };

  const Data = {
    handleClickOpen,
    handleClose,
    openLogin,
    handleLogin,
    handleLogout,
    login,
    dataUser,
  };
  return <ThemeContext.Provider value={Data}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
