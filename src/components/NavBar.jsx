import React from "react";
import "../App.css";
import Home from "../assets/Menu-Button-Item (1).png";
import Messenger from "../assets/Menu-Button-Item (2).png";
import AddNew from "../assets/Menu-Button-Item (3).png";
import Navigation from "../assets/Menu-Button-Item (4).png";
import Liked from "../assets/Menu-Button-Item (5).png";
import ProfilePic from "../assets/Profile-Pic-S.png";
import Logo from "../assets/Logo.png";




export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="nav_input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav_buttons">
          <img src={Home} alt="" />
          <img src={Messenger} alt="" />
          <img src={AddNew} alt="" />
          <img src={Navigation} alt="" />
          <img src={Liked} alt="" />
          <img src={ProfilePic} alt="" />
        </div>
      </div>
    </div>
  );
}
