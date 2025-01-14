import React, { useEffect, useState } from "react";
import Home from "../assets/Vector.png";
import Search from "../assets/Group (1).png";
import Video from "../assets/Video.png";
import Shop from "../assets/Vector (1).png";
import Like from "../assets/Vector (2).png";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Monitor changes to theme attribute on <body>
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.getAttribute("data-theme") === "dark");
    });

    observer.observe(document.body, { attributes: true });

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="footer">
      <div className="footer_section">
        <img src={Home} alt="" className={darkMode ? "dark-icon" : ""} />
        <img src={Search} alt="" className={darkMode ? "dark-icon" : ""} />
        <img src={Video} alt="" className={darkMode ? "dark-icon" : ""} />
        <img src={Shop} alt="" className={darkMode ? "dark-icon" : ""} />
        <img src={Like} alt="" className={darkMode ? "dark-icon" : ""} />
      </div>
    </div>
  );
}
