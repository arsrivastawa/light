import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Members from "./pages/members/Members";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Events from "./pages/events/Events";

function App() {
  return (
    <>
     <Helmet>
        <title>LiGHT Sindri | Social Impact NGO</title>
        <meta
          name="description"
          content="LiGHT Sindri is a student-led NGO working in education, healthcare, AI awareness, food drives, and community welfare in Sindri and Dhanbad."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<Members />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      
    </>
  );
}

export default App;
