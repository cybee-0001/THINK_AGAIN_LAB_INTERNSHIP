import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Dark/Light Mode Toggle</h1>
      <button onClick={toggleMode}>Toggle Dark/Light Mode</button>
    </div>
  );
}

export default App;
