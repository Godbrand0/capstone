import React from "react";
import Home from "../assets/Vector.png";
import Search from "../assets/Group (1).png";
import Video from "../assets/Video.png";
import Shop from "../assets/Vector (1).png";
import Like from "../assets/Vector (2).png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_section">
        <img src={Home} alt="" />
        <img src={Search} alt="" />
        <img src={Video} alt="" />
        <img src={Shop} alt="" />
        <img src={Like} alt="" />
      </div>
    </div>
  );
}
