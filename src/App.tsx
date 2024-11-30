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
        <Route path="/login" element={<Login />} />
        {/* Add other routes here */}
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
