import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Stories from "./pages/Stories";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import MyStories from "./components/MyStories";
import EditStory from "./pages/EditStory";
import CreateStory from "./pages/CreateStory";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Define paths where Navbar and Footer should not be displayed
  const hideLayoutPaths = ["/join", "/login"]; // Add other paths if needed

  // Check if the current path is in the list of paths to hide layout
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<SignUp />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/feeds" element={<BlogList />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/Mystories" element={<MyStories />} />
        <Route path="/edit" element={<EditStory />} />
        <Route path="/create" element={<CreateStory />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
