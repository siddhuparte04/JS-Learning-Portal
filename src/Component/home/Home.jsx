import React from "react";
import js_logo from "../assets/pngwing.com.png";
import "./HomeStyle.css";

export default function home() {
  return (
    <>
      <div className="home_container">
        <div className="home-block">
          <div className="info">
            <p className="title">
              Welcome <br /> to the <br /> JavaScript Portal
            </p>
            <p>
              JavaScript is a powerful scripting language used to create dynamic{" "}
              <br />
              and interactive web pages. It works alongside HTML and CSS to
              bring websites to life.
            </p>
          </div> 
          <div className="img">
            <img src={js_logo} alt="" />
          </div>
        </div>
        <div className="js_info">
          <div className="home-block">
            <div className="b">
              <h1>🚀 What is JavaScript?</h1>
            JavaScript is a powerful scripting language used to create dynamic and interactive web pages. It works alongside HTML and CSS to bring websites to life.
            </div>
            <div className="b">
              <h1>🔥 Why Learn JavaScript?</h1>
              <br />
              🧠 Easy to get started – beginner-friendly! <br />
              🌐 Runs in every browser – no setup needed! <br />
              💡 Makes websites interactive – like sliders, popups, forms,
              games. <br />
              📱 Used in web apps, mobile apps (with frameworks like React
              Native), and even desktop apps.
            </div>
          <div className="b">
              <h1> ✨ What Can You Do With JavaScript?</h1>
              -Validate form inputs 📝 <br />
              -Show or hide elements 🔀
              <br />
              -Fetch and display data from APIs 🌐 <br />
              -Create animations 🎞️ <br />
              -Build full-stack applications with Node.js ⚙️
            </div>
            <div className="b">
              <h1>💼 Career Opportunities</h1>
              JavaScript is in high demand! Learning it opens doors to roles
              like: <br />
              -Front-End Developer <br />
              -Full-Stack Developer <br />
              -Web App Developer <br />
              -JavaScript Enginee <br />
            </div>
            </div>
          </div>
        </div>
    </>
  );
}
