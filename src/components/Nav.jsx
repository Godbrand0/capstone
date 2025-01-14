import React from "react";
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu-Button-Item (3).png";
import Heart from "../assets/Vector (2).png";
import Message from "../assets/Menu-Button-Item (2).png";
import "../App.css";

export default function Nav() {
  return (
    <div className="header">
      <img className="nav-icon" src={Logo} alt="Logo" />
      <div className="header_right">
        <img className="nav-icon" src={Menu} alt="Menu" />
        <img className="nav-icon" src={Heart} alt="Heart" />
        <img className="nav-icon" src={Message} alt="Message" />
      </div>
    </div>
  );
}
