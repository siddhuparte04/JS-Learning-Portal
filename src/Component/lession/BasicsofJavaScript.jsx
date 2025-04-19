import React from "react";

export default function BasicsofJavaScript() {
  return (
    <>
      <div className="block">
        <h1>What is JavaScript?</h1>
        <p>
          JavaScript (JS) is a high-level, interpreted programming language used
          primarily for making web pages interactive. It is one of the core
          technologies of web development, along with HTML and CSS.
        </p>
        <h1>🔹 Key Features of JavaScript:</h1>
        <p>
          Client-Side & Server-Side – Runs in web browsers (client-side) and on
          servers (Node.js). <br />
          Dynamically Typed – No need to define variable types explicitly.{" "}
          <br />
          Event-Driven & Asynchronous – Supports event handling and asynchronous
          operations. <br />
          Object-Oriented – Uses objects and prototypes instead of traditional
          classes. <br />
          Interpreted Language – No compilation required, runs directly in the
          browser. <br />
        </p>
        <h1>🔹 What Can JavaScript Do?</h1>
        <p>
          ✔️ Enhance Web Pages – Add animations, form validations, and dynamic
          content. <br />
          ✔️ Manipulate HTML & CSS – Modify elements, styles, and attributes
          dynamically. <br />
          ✔️ Handle Events – Respond to user actions like clicks, scrolls, or
          keypresses. <br />
          ✔️ Work with APIs – Fetch data from servers using AJAX or Fetch API.{" "}
          <br />
          ✔️ Build Full-Stack Apps – With Node.js, JS can also run on servers.{" "}
          <br />
        </p>
        <h1>🔹 JavaScript in Action</h1>
        <p>
          JavaScript code is usually written inside <code>{`<script>`}</code>{" "}
          tags in an HTML file:
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <h1 id="demo">Hello, JavaScript!</h1>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById("demo").innerText = "You clicked the button!";
        }
    </script>
</body>
</html>
          `}</code>
            </pre>
          </div>
          <h1>🔹 JavaScript and its Ecosystem</h1>
          <p>
            Frontend Frameworks: React.js, Vue.js, Angular <br />
            Backend Runtime: Node.js <br />
            Package Manager: npm (Node Package Manager) <br />
            Databases: MongoDB (NoSQL), Firebase, PostgreSQL
          </p>
        </div>
      </div>
    </>
  );
}
