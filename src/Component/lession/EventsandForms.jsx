import React from 'react';

export default function EventsandForms() {
  console.log("✅ EventsandForms component is rendering!");

  return (
  <>
  <div className="block">
    <h1>Handling Click Events
    </h1>
    <p>Click events allow you to execute JavaScript code when a user clicks an element (e.g., button, div, link).</p>
    <h2>Example: Changing Text on Click</h2>
    <div className="editor">
      <div className="editor-block">
        <pre>
          <code>
            {`
            <button id="clickBtn">Click Me</button>
<p id="output">Original Text</p>

<script>
    document.getElementById("clickBtn").addEventListener("click", function() {
        document.getElementById("output").innerHTML = "Button Clicked!";
    });
</script>
            `}
          </code>
        </pre>
      </div>
    </div>
    <h2>Handling Keyboard Events</h2>
    <p>You can listen for key events (keydown, keyup, keypress) to perform actions based on user input.</p>
    <h2>Example: Detecting Key Press</h2>
    <div className="editor">
      <div className="editor-block">
        <pre>
          <code>
            {`
            <input type="text" id="textInput" placeholder="Type something">
<p id="keyOutput"></p>

<script>
    document.getElementById("textInput").addEventListener("keydown", function(event) {
        document.getElementById("keyOutput").innerHTML = "Key Pressed: " + event.key;
    });
</script>

            `}
          </code>
        </pre>
      </div>
    </div>
    <p>
    <b>keydown</b> – Fires when a key is pressed down. <br />

<b>keyup</b> – Fires when a key is released. <br />

<b>keypress</b> – (Deprecated) Similar to keydown but doesn't detect special keys like Shift, Ctrl.

    </p>
    <h2>Working with Forms (submit, input, change)</h2>
    <b>1. Handling Form Submission (submit)</b>
    <p>The submit event triggers when a form is submitted. You usually prevent the default behavior to process data manually.</p>
   <div className="editor">
    <div className="editor-block">
    <pre>
      <code>
        {`
        <form id="myForm">
    <input type="text" id="username" placeholder="Enter name">
    <button type="submit">Submit</button>
</form>

<p id="formOutput"></p>

<script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form from refreshing the page
        let name = document.getElementById("username").value;
        document.getElementById("formOutput").innerHTML = "Hello, " + name + "!";
    });
</script>

        `}
      </code>
    </pre>
    </div>
   </div>
   <h2>2. Handling Input (input)</h2>
   <p>The input event triggers when a user types in an input field.</p>
   <div className="editor">
    <div className="editor-block">
      <pre>
        <code>
          {`
          <input type="text" id="liveInput" placeholder="Start typing...">
<p id="liveOutput"></p>

<script>
    document.getElementById("liveInput").addEventListener("input", function() {
        document.getElementById("liveOutput").innerHTML = "You typed: " + this.value;
    });
</script>

          `}
        </code>
      </pre>
    </div>
   </div>
   <h2>3. Handling Change (change)</h2>
   <p>The change event fires when an input field loses focus after being edited.</p>
   <div className="editor">
    <div className="editor-block">
      <pre>
        <code>
          {`
          <select id="colorSelect">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
</select>
<p id="colorOutput"></p>

<script>
    document.getElementById("colorSelect").addEventListener("change", function() {
        document.getElementById("colorOutput").innerHTML = "Selected Color: " + this.value;
    });
</script>

          `}
        </code>
      </pre>
    </div>
   </div>
  </div>
  </>
  );
}
