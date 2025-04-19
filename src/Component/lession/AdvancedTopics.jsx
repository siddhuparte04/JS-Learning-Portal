import React from 'react'

function AdvancedTopics() {
  return (
   <>
   <div className="block">
   <h1>ES6+ Features</h1>
<h2>1. Arrow Functions</h2>
<p>Arrow functions provide a shorter syntax for writing functions.</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        // Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8

        `}
      </code>
    </pre>
  </div>
</div>
<h2>2. Spread and Rest Operators (...)</h2>
<p>
<b>Spread Operator</b> (...) expands an array or object. <br />

<b>Rest Operator </b>(...) collects multiple arguments into an array.
</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        // Spread Operator (Expanding an array)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]

// Rest Operator (Collecting arguments)
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10
`}
      </code>
    </pre>
  </div>
</div>
<h2>3. Destructuring</h2>
<p>Extract values from arrays or objects easily</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        // Array Destructuring
const [first, second] = [10, 20];
console.log(first, second); // 10 20

// Object Destructuring
const user = { name: "Krishna", age: 25 };
const { name, age } = user;
console.log(name, age); // Krishna 25

        `}
      </code>
    </pre>
  </div>
</div>
<h2>Promises and Async/Await</h2>
<p>Promises handle asynchronous operations.</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data Fetched!"), 2000);
    });
};

fetchData().then(data => console.log(data));

        `}
      </code>
    </pre>
  </div>
</div>
<p>Using async/await (Better readability)</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        const fetchData = async () => {
    let data = await new Promise((resolve) => setTimeout(() => resolve("Data Loaded!"), 2000));
    console.log(data);
};
fetchData();

        `}
      </code>
    </pre>
  </div>
</div>
<h1>Fetch API (Making HTTP Requests)</h1>
<p>Fetch API allows fetching data from a server.</p>
<b>Example: Fetching JSON Data</b>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

        `}
      </code>
    </pre>
  </div>
</div>
<h2>Using Async/Await</h2>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        const getData = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
};
getData();

        `}
      </code>
    </pre>
  </div>
</div>
<h1>Local Storage & Session Storage</h1>
<p>These store data in the browser</p>
<b>Local Storage (Data persists even after closing the tab)</b>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        localStorage.setItem("username", "Krishna");
console.log(localStorage.getItem("username")); // Krishna
localStorage.removeItem("username");

        `}
      </code>
    </pre>
  </div>
</div>
<b>Session Storage (Data is cleared when the session ends)</b>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        sessionStorage.setItem("sessionID", "12345");
console.log(sessionStorage.getItem("sessionID")); // 12345
sessionStorage.clear();

        `}
      </code>
    </pre>
  </div>
</div>
   </div>
   </>
  )
}

export default AdvancedTopics