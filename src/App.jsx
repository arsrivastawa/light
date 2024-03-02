import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from "./pages/members/Members";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Events from "./pages/events/Events";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<Members />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
