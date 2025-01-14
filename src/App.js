import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import StorySection from "./components/StorySection";
import PostSection from "./components/PostSection";
import FollowSection from "./components/FollowSection";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode state
  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Update theme attribute on body
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="App">


      <Nav />

      <NavBar darkMode={darkMode} />
      <button className="dark-mode-toggle" onClick={handleToggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="body">
        <div className="storyboard-container">
          <StorySection />
          {/* Pass darkMode prop to PostSection for icon updates */}
          <PostSection darkMode={darkMode} />
        </div>
        <FollowSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
