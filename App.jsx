import { useState } from "react";
import "./App.css";
import Category_card from "./Components/Category_card";
import Selective_card from "./Components/Selective_card";
import Data from "./Dataset/Content_category.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Video_resource from "./Pages/Video_resource";
import Course_content from "./Pages/Course_Content";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to={"/Home"}>Content</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Video_resource"}>Video Player</Link>
          <Link to={"/Course_content"}>Course Content</Link>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Video_resource" element={<Video_resource />} />
          <Route path="/Course_content" element={<Course_content />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
