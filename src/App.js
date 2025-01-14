import "./App.css";
import NavBar from "./components/NavBar";
import StorySection from "./components/StorySection";
import PostSection from "./components/PostSection";
import FollowSection from "./components/FollowSection";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Nav />
      <div className="body">
        <div className="storyboard-container">
          <StorySection />
          <PostSection />
        </div>
        <FollowSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
