import React from "react";
import "../css/lesson.css";
import { Routes, Route, Link } from "react-router-dom";
import BasicsofJavaScript from "./BasicsofJavaScript.jsx";
import FunctionsandLoops from "./FunctionsandLoops.jsx";
import ObjectsandDOMManipulation from "./ObjectsandDOMManipulation.jsx";
import EventsandForms from "./EventsandForms.jsx";
import AdvancedTopics from "./AdvancedTopics.jsx";
import ProjectsandPractice from "./ProjectsandPractice";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="li">
        <li>
        <Link  to="/lesson/BasicsofJavaScript" className="link" >
            <h1>Basics of JavaScript</h1>
            <p>
              ✔️ What is JavaScript?
              <br />
              ✔️ Variables (var, let, const) <br />
              ✔️ Data Types (string, number, boolean, null, undefined,
              object,array) <br />
              ✔️ Operators (+, -, *, /, %, ==, ===, &&, ||, !) <br />
              ✔️ Conditional Statements (if, else, switch)
            </p>
          </Link>
        </li> <br />
        <li>
          <Link to="/lesson/FunctionsandLoops" className="link" >
            <h1>Functions and Loops</h1>
            <p>
              ✔️ Declaring and Calling Functions <br />
              ✔️ Function Parameters and Return Values <br />
              ✔️ Loops (for, while, do-while) <br />
              ✔️ Array Methods (map, filter, forEach, reduce)
            </p>
          </Link>
        </li>
        <li>
          <Link to="/lesson/ObjectsandDOMManipulation" className="link">
            <h1> Objects and DOM Manipulation </h1>
            <p>
              ✔️ JavaScript Objects (key: value pairs) <br />
              ✔️ Object Methods (this, constructor) <br />
              ✔️ DOM Manipulation (document.querySelector, getElementById,
              innerHTML, addEventListener) <br />
            </p>
          </Link>
        </li>
        <li>
          <Link to="/lesson/EventsandForms" className="link">
            <h1>Events and Forms </h1>
            <p>
              ✔️ Handling Click Events <br />
              ✔️ Handling Keyboard Events <br />
              ✔️ Working with Forms (submit, input, change) <br />
            </p>
          </Link>
        </li>
        <li>
          <Link to="/lesson/AdvancedTopics" className="link">
            <h1>Advanced Topics</h1>
            <p>
              ES6+ Features (Arrow Functions, Spread/Rest Operators,
              Destructuring) <br />
              ✔️ Promises and Async/Await <br />
              ✔️ Fetch API (Making HTTP Requests) <br />
              ✔️ Local Storage and Session Storage <br />
            </p>
          </Link>
        </li>
        <li>
          <Link to="/lesson/ProjectsandPractice" className="link">
            <h1>Projects and Practice</h1>
            <p>
              ✔️ Build Small Projects (To-Do List, Calculator, Weather App){" "}
              <br />
              ✔️ Explore JavaScript Frameworks (React, Vue, or Angular) <br />
              ✔️ Learn about APIs and Backend (Node.js, Express) <br />
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default function Lesson() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Routes>
        <Route index element={<BasicsofJavaScript />} />
          <Route path="BasicsofJavaScript" element={<BasicsofJavaScript />} />
          <Route path="FunctionsandLoops" element={<FunctionsandLoops />} />
          <Route
            path="ObjectsandDOMManipulation"
            element={<ObjectsandDOMManipulation />}
          />
          <Route path="EventsandForms" element={<EventsandForms />} />
          <Route path="AdvancedTopics" element={<AdvancedTopics />} />
          <Route path="ProjectsandPractice" element={<ProjectsandPractice />} />
        </Routes>
      </div>
    </div>
  );
}
