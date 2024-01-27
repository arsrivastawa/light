import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/navbar/SideBar";
import TeamPage from "./pages/members/Members";
import Members from "./pages/members/Members";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<Members />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
