import "./App.css";
import NavBar from "./components/NavBar";
import StorySection from "./components/StorySection";
import PostSection from "./components/PostSection";
import FollowSection from "./components/FollowSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <div className="storyboard-container">
          <StorySection />
          <PostSection />
        </div>
        <FollowSection />
      </div>
    </div>
  );
}

export default App;
