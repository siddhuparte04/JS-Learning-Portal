import React from 'react'

function ObjectsandDOMManipulation() {
  return (
    <>
    <div className="block">
      <h1>JavaScript Objects and DOM Manipulation</h1>
      <h2>JavaScript Objects (Key: Value Pairs)
        </h2><p>
        Objects in JavaScript are collections of key-value pairs. They allow you to store related data and functions together.
        </p>
        <h2>Creating an Object</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
                let person = {
    name: "Krishna",
    age: 25,
    city: "Vrindavan"
};

                `}
              </code>
            </pre>
          </div>
        </div>
        <h2>Accessing Object Properties</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
                console.log(person.name); // Krishna
console.log(person["age"]); // 25

                `}
              </code>
            </pre>
          </div>
        </div>
        <h2>Modifying Object Properties</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
                person.age = 26;
person["city"] = "Mathura";
                `}
              </code>
            </pre>
          </div>
        </div>
        <h2>Adding New Properties</h2>
        <div className="editor">
          <div className="editor-block">
            <pre><code>
              {`
              person.country = "India";

              `}
              </code></pre>
          </div>
        </div>
        <h2>Deleting Properties</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
                delete person.city;
                `}
              </code>
            </pre>
          </div>
        </div>
        <h1>Object Methods (this, Constructor Function)</h1>
        <p>Objects can also have methods (functions inside objects).Object Methods (this, Constructor Function)
Objects can also have methods (functions inside objects).
<b>Using this Keyword</b></p>
<p>Using this Keyword
this refers to the object it belongs to.</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        let user = {
    name: "Arjun",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

user.greet(); // Hello, Arjun

        `}
      </code>
    </pre>
  </div>
</div>
<h2>
Constructor Function</h2>
<p>
A constructor function is used to create multiple objects with similar properties.
</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let car1 = new Car("Toyota", "Corolla", 2023);
let car2 = new Car("Honda", "Civic", 2022);

console.log(car1.brand); // Toyota
console.log(car2.model); // Civic

        `}
      </code>
    </pre>
  </div>
</div>
<h2>DOM Manipulation</h2>
<p>DOM Manipulation
The Document Object Model (DOM) allows JavaScript to interact with and manipulate HTML elements.</p>
<h3>Selecting Elements</h3>
<p>
document.querySelector() – Selects the first element that matches a CSS selector. <br />

document.getElementById() – Selects an element by its id.
</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        let title = document.querySelector("h1");
let button = document.getElementById("myButton");
        `}
      </code>
    </pre>
  </div>
</div>
<h2>Changing HTML Content (innerHTML)</h2>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        document.getElementById("message").innerHTML = "Hello, Krishna!";

        `}
      </code>
    </pre>
  </div>
</div>
<h2>Handling Events (addEventListener)</h2>
<p>The addEventListener method is used to handle events like clicks.</p>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});

        `}
      </code>
    </pre>
  </div>
</div>
    </div>
    </>
  )
}

export default ObjectsandDOMManipulation