import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("Maximum limit reached!");
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Minimum limit reached!");
    }
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
