import React, { useState, useEffect, useMemo } from "react";
import useFetch from "../Api/useFetch";
import "../App.css";

// Import icons
import Dots from "../assets/Frame 36.png";
import Post from "../assets/Rectangle 55.png";
import Like from "../assets/Vector - Copy.png";
import Comment from "../assets/Vector (1) - Copy.png";
import Share from "../assets/Vector (Stroke).png";
import Bookmark from "../assets/Group 33.png";
import Emoji from "../assets/Group 34.png";

// Dark Mode Icons
import DotsDark from "../assets/Frame 36 white (1).png";
import LikeDark from "../assets/like_white.png";
import CommentDark from "../assets/comment_white.png";
import ShareDark from "../assets/share_white.png";
import BookmarkDark from "../assets/bookmark_white.png";
import EmojiDark from "../assets/Group 34 white.png";

export default function Posts({ darkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  const fetchOptions = useMemo(
    () => ({
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
      params: {
        username_or_id_or_url: "mediamodifier",
        url_embed_safe: "true",
      },
      headers: {
        "x-rapidapi-key": "64728cf656msh1775344a295e74dp1dd74ajsne3557ca01283",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    }),
    []
  );

  const { data, loading, error } = useFetch(fetchOptions);
  const fetchedData = data?.data?.items || [];
  const sortedPosts = Array.isArray(fetchedData)
    ? fetchedData.sort((a, b) => new Date(b.taken_at) - new Date(a.taken_at))
    : [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="feeds">
      {sortedPosts.map((post, index) => (
        <div className="feed_board" key={index}>
          <div className="feed_header">
            <div className="feed_header_left">
              <img src={post.user.profile_pic_url} alt="User Avatar" />
              <p>{post.user.username}</p>
            </div>
            <img src={isDarkMode ? DotsDark : Dots} alt="Dots Icon" />
          </div>

          <div className="feed_image">
            {post.is_video ? (
              <video controls autoPlay className="media">
                <source src={post.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={post.thumbnail_url} alt="Media" className="media" />
            )}
          </div>

          <div className="feed_icons">
            <div className="feed_icons_left">
              <img src={isDarkMode ? LikeDark : Like} alt="Like Icon" />
              <img src={isDarkMode ? CommentDark : Comment} alt="Comment Icon" />
              <img src={isDarkMode ? BookmarkDark : Bookmark} alt="Bookmark Icon" />
            </div>
            <img src={isDarkMode ? ShareDark : Share} alt="Share Icon" />
          </div>

          <div className="feed_infos">
            <p className="likes">
              Liked by <span>{post.like_count} others</span>
            </p>
            <p className="caption">{post.caption?.text}</p>
            <p className="comments">
              View all {post.comment_count} comments
            </p>
            <p className="time">
              {new Date(post.taken_at * 1000).toLocaleString()}
            </p>
          </div>

          <div className="comment_section">
            <div className="input">
              <img src={isDarkMode ? EmojiDark : Emoji} alt="Emoji Icon" />
              <input type="text" placeholder="Add a comment ..." />
            </div>
            <p>Publish</p>
          </div>
        </div>
      ))}
    </div>
  );
}
