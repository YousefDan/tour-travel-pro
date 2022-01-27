import { useState } from "react";
import TravelContext from "./context";

const TravelProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLoginForm, setToggleLoginForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchBox, setSearchBox] = useState(false);

  // Toggle Menu Handler
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
    setToggleLoginForm(false);
    setSearchBox(false);
  };
  // Toggle Login Form Handler
  const toggleLoginFormHandler = () => {
    setToggleLoginForm(!toggleLoginForm);
    setToggleMenu(false);
    setSearchBox(false);
  };
  // Show Hide Search Box Handler
  const showHideSearchBoxHandler = () => {
    setSearchBox(!searchBox);
    setToggleLoginForm(false);
    setToggleMenu(false);
  };

  return (
    <TravelContext.Provider
      value={{
        toggleMenu,
        toggleLoginForm,
        darkMode,
        searchBox,
        toggleMenuHandler,
        toggleLoginFormHandler,
        showHideSearchBoxHandler,
        setDarkMode,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelProvider;
