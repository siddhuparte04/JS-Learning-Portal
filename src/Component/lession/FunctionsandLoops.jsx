import React from "react";

function FunctionsandLoops() {
  return (
    <>
      <div className="block">
        <h1>✅ Declaring and Calling Functions in JavaScript</h1>
        <p>
          In JavaScript, functions are reusable blocks of code that perform
          specific tasks. You can define them in multiple ways and call them to
          execute their logic.
        </p>
        <h1>1️⃣ Function Declaration</h1>
        <p>
          A function declaration is defined using the function keyword and can
          be called before it is declared due to hoisting.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              // Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Calling the function
console.log(greet("John")); // Output: Hello, John!

              `}
              </code>
            </pre>
          </div>
        </div>
        <p>
          ✔️ Function declarations are hoisted, meaning you can call the
          function before its declaration.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              console.log(greet("Alice")); // Works even before declaration

function greet(name) {
  return \`Hello, \${name}!\`;
}

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>2️⃣ Function Expression</h1>
        <p>
          A function expression stores a function inside a variable. Unlike
          function declarations, it is not hoisted.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              // Function Expression
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!

              `}
              </code>
            </pre>
          </div>
        </div>
        <p>
          ❌ If you try to call it before its definition, it will give an error.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              console.log(greet("Bob")); // ❌ Error: Cannot access 'greet' before initialization

const greet = function(name) {
  return \`Hello, \${name}!\`;
};

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>3️⃣ Arrow Function (ES6)</h1>
        <p>Arrow functions provide a shorter syntax for writing functions.</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              // Arrow Function
const greet = (name) => \`Hello, \${name}!\`;

// Calling the function
console.log(greet("Bob")); // Output: Hello, Bob!

              `}
              </code>
            </pre>
          </div>
        </div>
        <p>🔹 If there is only one parameter, parentheses are optional:</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              const square = num => num * num;
console.log(square(4)); // Output: 16
              `}
              </code>
            </pre>
          </div>
        </div>
        <p>
          🔹 If there are no parameters, you must include empty parentheses:
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              const sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!

              `}
              </code>
            </pre>
          </div>
        </div>
        <p>🔹 If there are multiple lines of code, you need {} and return:</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              const add = (a, b) => {
  let sum = a + b;
  return sum;
};
console.log(add(5, 3)); // Output: 8

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>4️⃣ Function with Default Parameters</h1>
        <p>
          You can assign default values to parameters in case no argument is
          provided.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet());       // Output: Hello, Guest!
console.log(greet("Emma")); // Output: Hello, Emma!

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>5️⃣ Function with Multiple Parameters</h1>
        <p>Functions can take multiple parameters separated by commas.</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5)); // Output: 20

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>6️⃣ Function Returning a Value</h1>
        <p>6️⃣ Function Returning a Value.</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function square(num) {
  return num * num;
}

console.log(square(6)); // Output: 36

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>7️⃣ Function Without Return (Void Function)</h1>
        <p>If a function doesn’t use return, it outputs undefined.</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
                function sayHello(name) {
  console.log(\`Hello, \${name}!\`);
}

const result = sayHello("Charlie"); // Output: Hello, Charlie!
console.log(result); // Output: undefined
`}
              </code>
            </pre>
          </div>
        </div>
        <h1>8️⃣ Anonymous Function</h1>
        <p>
          A function without a name is called an anonymous function. It is often
          used as a callback function.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              setTimeout(function() {
  console.log("This runs after 2 seconds!");
}, 2000);

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>9️⃣ Immediately Invoked Function Expression (IIFE)</h1>
        <p>An IIFE runs immediately after it's defined.</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              (function() {
  console.log("This runs immediately!");
})();
              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>✅ Function Parameters and Return Values in JavaScript</h1>
        <p>
          In JavaScript, functions can accept parameters (inputs) and return
          values (outputs). This makes them reusable and dynamic.
        </p>
        <h1>1️⃣ Function with Parameters</h1>
        <p>
          A function can accept one or more parameters inside parentheses
          (param1, param2, ...).
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

// Calling the function with an argument
greet("John"); // Output: Hello, John!
greet("Alice"); // Output: Hello, Alice!

              `}
              </code>
            </pre>
          </div>
        </div>
        <p>🔹 You can pass multiple parameters:</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
            function add(a, b) {
  console.log(a + b);
}

add(5, 3); // Output: 8
add(10, 20); // Output: 30

            `}
              </code>
            </pre>
          </div>
        </div>
        <h1>2️⃣ Function with Return Value</h1>
        <p>A function can return a value using the return keyword.</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function multiply(a, b) {
  return a * b; // Returns the result
}

let result = multiply(4, 5);
console.log(result); // Output: 20

              `}
              </code>
            </pre>
          </div>
        </div>
        <p>🔹 A function stops executing after return:</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function example() {
  return "This is returned";
  console.log("This will never run"); // ❌ Unreachable code
}

console.log(example()); // Output: This is returned

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>3️⃣ Function with Default Parameters (ES6)</h1>
        <p>If a parameter is not provided, it takes a default value.</p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Emma")); // Output: Hello, Emma!

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>4️⃣ Function with Multiple Parameters</h1>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function divide(a, b) {
  return a / b;
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(9, 3));  // Output: 3

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>5️⃣ Function Without Return (Void Function)</h1>
        <p>
          A function without return does not produce a result—it only performs
          an action.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function printMessage(message) {
  console.log(message);
}

printMessage("Hello, world!"); // Output: Hello, world!

// Since there is no return, the function returns \`undefined\`
console.log(printMessage("Test")); // Output: Test
                                   //         undefined

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>6️⃣ Function with Rest Parameters (...rest)</h1>
        <p>
          The ...rest operator allows functions to accept any number of
          arguments as an array.
        </p>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20));        // Output: 30

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>7️⃣ Arrow Function with Return Value</h1>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
              const square = (num) => num * num;

console.log(square(5)); // Output: 25

              `}
              </code>
            </pre>
          </div>
        </div>
        <h1>✅ Loops in JavaScript (for, while, do-while)</h1>
        <p>
          Loops help us repeat a block of code multiple times. JavaScript has
          three main types of loops: for loop – Best when the number of
          iterations is known. <br /> while loop – Best when the condition is checked
          before each iteration. do-while loop – Runs at least once before
          checking the condition.
        </p>
        <h1>1️⃣ for Loop (Fixed Iterations)</h1>
        <p>The for loop runs a block of code a specific number of times.</p>
        <h2>Syntax:</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
        for (initialization; condition; increment/decrement) {
  // Code to execute
}

        `}
              </code>
            </pre>
          </div>
        </div>
        <h2>Example:</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
      for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// Output:
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4
// Iteration: 5

      `}
              </code>
            </pre>
          </div>
        </div>
        <h1>Loop Breakdown:</h1>
        <p>
          Initialization → let i = 1; (start counter at 1). <br />
          Condition → i <code>{`<=`}</code> 5; (loop continues while i is ≤ 5).{" "}
          <br />
          Increment → i++ (increase i by 1 after each loop).
        </p>
        <h1>2️⃣ while Loop (Condition-Based)</h1>
        <p>The while loop runs as long as the condition is true.</p>
        <h2>Syntax:</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
        while (condition) {
  // Code to execute
}
        `}
              </code>
            </pre>
          </div>
        </div>
        <h2>Example:</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
            let i = 1;

while (i <= 5) {
  console.log("Iteration:", i);
  i++; // Increment inside the loop
}

            `}
              </code>
            </pre>
          </div>
        </div>
        <h1>3️⃣ do-while Loop (Runs at Least Once)</h1>
        <p>The do-while loop executes the code first, then checks the condition.</p>
        <h2>Syntax:</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
                do {
  // Code to execute
} while (condition);

                `}
              </code>
            </pre>
          </div>
        </div>
        <h2>Example:</h2>
        <div className="editor">
          <div className="editor-block">
            <pre>
              <code>
                {`
                let i = 1;

do {
  console.log("Iteration:", i);
  i++;
} while (i <= 5);

                `}
              </code>
            </pre>
          </div>
        </div>
        <h1>✅ JavaScript Array Methods: map(), filter(), forEach(), reduce()</h1>
        <p>
        JavaScript provides powerful methods to work with arrays efficiently. Let's explore these four important methods:
        </p>
        <h1>1️⃣ map() – Transform Each Element</h1>
        <p>Creates a new array by applying a function to each element. <br /> <br />

Does not modify the original array</p>
<h2>Syntax:</h2>
<div className="editor">
  <div className="editor-block">
    <pre><code>
      {`
      array.map((element, index, array) => {
  return modifiedElement;
});

      `}</code></pre>
  </div>
</div>
<h2>Example:</h2>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]

        `}
      </code>
    </pre>
  </div>
</div>
<h1>2️⃣ filter() – Select Elements Based on Condition</h1>
<p>Creates a new array with elements that pass a condition. <br />Does not modify the original array.</p>

<h2>Syntax:</h2>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        array.filter((element, index, array) => {
  return condition;
});

        `}
      </code>
    </pre>
  </div>
</div>
<h2>Example: Get Even Numbers</h2>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // Output: [2, 4, 6]

        `}
      </code>
    </pre>
  </div>
</div>
<h1>3️⃣ forEach() – Execute a Function for Each Element</h1>
<p>Iterates over an array but does not return a new array. <br />

Used for performing actions (e.g., logging values).</p>
<h2>Syntax:</h2>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        array.forEach((element, index, array) => {
  // Perform action
});
`}
      </code>
    </pre>
  </div>
</div>
<h2>Example: Print Each Element</h2>
<div className="editor">
  <div className="editor-block">
    <pre><code>
      {`
      const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
  console.log(\`\${index + 1}: \${fruit}\`);
});

// Output:
// 1: Apple
// 2: Banana
// 3: Cherry

      `}</code></pre>
  </div>
</div>
<h1>4️⃣ reduce() – Reduce Array to a Single Value</h1>
<p>Processes each element and accumulates a single result. <br />

Commonly used for sum, product, or merging data.</p>
<h2>Syntax:</h2>
<div className="editor">
  <div className="editor-block">
    <pre><code>{`
    array.reduce((accumulator, element, index, array) => {
  return updatedAccumulator;
}, initialValue);

    `}
      </code></pre>
  </div>
</div>
<h2>Example: Sum of All Numbers</h2>
<div className="editor">
  <div className="editor-block">
    <pre>
      <code>
        {`
        const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15

        `}
      </code>
    </pre>
  </div>
</div>

      </div>
    </>
  );
}

export default FunctionsandLoops;
