import React from "react";
import "../App.css";
import Home from "../assets/Menu-Button-Item (1).png";
import Messenger from "../assets/Menu-Button-Item (2).png";
import AddNew from "../assets/Menu-Button-Item (3).png";
import Navigation from "../assets/Menu-Button-Item (4).png";
import Liked from "../assets/Menu-Button-Item (5).png";
import ProfilePic from "../assets/Profile-Pic-S.png";
import Logo from "../assets/Logo.png";

export default function NavBar({ darkMode }) {
  return (
    <div className={`nav-bar ${darkMode ? "dark-mode" : ""}`}>
      <div className="nav">
        <div className="nav_logo">
          <img src={Logo} alt="Logo" className={`logo-icon ${darkMode ? "dark-logo" : ""}`} />
        </div>
        <div className="nav_input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav_buttons">
          <img src={Home} alt="Home" className="nav-icon" />
          <img src={Messenger} alt="Messenger" className="nav-icon" />
          <img src={AddNew} alt="Add New" className="nav-icon" />
          <img src={Navigation} alt="Navigation" className="nav-icon" />
          <img src={Liked} alt="Liked" className="nav-icon" />
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}
