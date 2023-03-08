import React from "react";
import MovieLogo from "../../assets/images/movie.svg";
import AppNavbarTabs from "./AppNavbarTabs";
import "./style.css";

const AppNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={MovieLogo} alt="Movie logo" />
        <div className="navbar-tabs">
          <AppNavbarTabs />
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;