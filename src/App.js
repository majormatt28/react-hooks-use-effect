import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  function handleClicks() {
    setCount(count + 1)
  }

  function handleText(e) {
    setText(e.target.value)
  }

  return (
    <div>
    <button onClick={handleClicks}>
      I've been clicked {count} times
    </button>
  <input 
    type="text"
    placeholder="Type away..."
    value={text}
    onChange={handleText}
    />
    </div>
  );
}

export default App;
