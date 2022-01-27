import { useContext } from "react";
import TravelContext from "../../context/context";
import "./header.scss";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";

const Header = () => {
  const {
    toggleMenu,
    toggleMenuHandler,
    toggleLoginForm,
    toggleLoginFormHandler,
    showHideSearchBoxHandler,
    setDarkMode,
    darkMode,
    searchBox
  } = useContext(TravelContext);
  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-paper-plane"></i>
        Travel
      </div>
      <div style={{display: searchBox && "block"}} className="search-box">
        <input type="search" placeholder="search here..." />
        <i className="fas fa-search"></i>
      </div>
      <div className="icons-wrapper">
      <div onClick={showHideSearchBoxHandler} className="icon search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div onClick={() => setDarkMode(!darkMode)} className="icon">
          <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </div>
        <div onClick={toggleLoginFormHandler} className="icon">
          <i className="fas fa-user"></i>
        </div>
        <div onClick={toggleMenuHandler} className="icon">
          <i className={toggleMenu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      <Navbar toggleMenu={toggleMenu} />
      <LoginForm toggleLoginForm={toggleLoginForm} />
    </header>
  );
};

export default Header;
