import React from 'react'
import About_img from '../assets/about-img.png'
import './aboutStyle.css'
export default function about() {
  return (
    <>
    <div className="about_container">
      <div className="about-block">
      <div className="about-info">
      <p id='title'>👋 About Me</p>
<p>Hi! I’m Siddhesh Parte, an aspiring IT Engineer, <br /> passionate about coding, web development, and creating educational content around programming. <br />

I specialize in JavaScript and love building interactive websites, exploring  <br /> new tech, and sharing my knowledge through YouTube Shorts and Instagram content.</p>
      </div>
<div className="img">
  <img src={About_img} alt="" />
</div>
      </div>
      <div className="about-block">
      <div className="about-info">
        <p id='title'>
        💻 What I Do
        </p>
        <p>🎥 Content Creation: I simplify complex coding topics into short, <br /> engaging videos to help beginners learn quickly. <br />

🧠 Learning & Exploring: Always diving deeper into JavaScript, <br /> web development, and the latest frameworks. <br />

🌐 Web Development: Building responsive, dynamic, and user-friendly websites <br /> using HTML, CSS, and JavaScript.</p>
      </div>
      <div className="about-info">
        <p id='title'>🚀 Skills Snapshot</p>
        <p>
-Languages: JavaScript, HTML, CSS <br />

-Frontend: DOM Manipulation, Events, Forms, ES6+ <br />

-Backend: Currently learning Node.js <br />

-Tools: Git, VS Code, Chrome DevTools <br />

-Platforms: YouTube, Instagram </p>
      </div>
      </div>
    </div>
    </>
  )
}
