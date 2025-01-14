import React, { useEffect, useState } from "react";
import "../index.css";
import "../App.css";

import image from "../assets/Capstone images/lucas.png";
import image1 from "../assets/Capstone images/laura.png";
import image2 from "../assets/Capstone images/rikki.png";
import image3 from "../assets/Capstone images/elrani.png";
import image4 from "../assets/Capstone images/tomaska.png";

import fallback from "../assets/Capstone images/profile.png";

export default function FollowSection({ username = "mediamodifier", darkMode }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${username}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data.data);
        setSuggestions([
          { username: "lucas", followers: "mark + 2 more", avatar: image },
          { username: "laura", followers: "brandon + 6 more", avatar: image1 },
          { username: "rikki", followers: "mik + 1 more", avatar: image2 },
          { username: "elrani", followers: "ednamanz + 1 more", avatar: image3 },
          { username: "tomaska", followers: "katarinasterling + 2 more", avatar: image4 },
        ]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!userData) return <div>No user data available.</div>;

  return (
    <div className={`profile-section ${darkMode ? "dark-mode-text" : ""}`}>
      <div className="user-profile">
        <img 
          src={userData.profile_pic_url_hd || fallback} 
          alt={`${username}'s profile`} 
          className="avatar" 
        />
        <div>
          <h1 className="username">{userData.username}</h1>
          <p className="full-name">{userData.full_name || "No name available"}</p>
        </div>
        <a href="#" className="switch">Switch</a>
      </div>

      <div className="suggestions">
        <div>
          <p className="header">Suggestions For You<span><a href="#" className="see-all">See All</a></span></p>
        </div>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              <img src={suggestion.avatar} alt={suggestion.username} className="avatar" />
              <div>
                <p className="username">{suggestion.username}</p>
                <p className="followers">Followed by {suggestion.followers}</p>
              </div>
              <button className="follow-button">Follow</button>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer">
        <p>About • Press • API • Jobs • Privacy • Terms • Locations</p>
        <p>Top Accounts • Hashtags • Language</p>
        <p>© 2021 INSTAGRAM FROM META</p>
      </footer>
    </div>
  );
}
