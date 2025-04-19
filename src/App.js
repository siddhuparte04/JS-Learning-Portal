import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/home/Home.jsx";
import About from "./Component/about/About.jsx";
import Contact from "./Component/contact us/Contact.jsx";
import Lesson from "./Component/lession/Lesson.jsx"
import "./App.css";
import "./css/Style.css";
import Footer from "./Component/footer/Footer.jsx";
const App = () => {
  return (
<>
<Router>
      <nav className="nav">
        <div className="heading">
          <p>Javascript</p>
        </div>
        <ul>
          <li><Link id="li" to="/">Home</Link></li>
          <li><Link id="li" to="/lesson">Lesson</Link></li>
          <li><Link id="li" to="/about">About</Link></li>
          <li><Link id="li" to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lesson/*" element={<Lesson />} />
          </Routes>
        </div>
      </div>
    </Router>
    <Footer/>
</>
  );
};

export default App;
