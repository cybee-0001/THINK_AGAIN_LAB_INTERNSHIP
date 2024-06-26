import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the dark mode state from localStorage when the component mounts
    const savedMode = localStorage.getItem('isDarkMode');
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('isDarkMode', JSON.stringify(newMode));
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="sky">
        <div className={`sun ${isDarkMode ? 'hide' : ''}`}></div>
        <div className={`moon ${isDarkMode ? '' : 'hide'}`}></div>
        <div className={`stars ${isDarkMode ? '' : 'hide'}`}>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
      <h1>{`${isDarkMode ? 'Dark Mode' : 'Light mode'}`}</h1>
      <div className="toggle-container" onClick={toggleMode}>
        <div className={`toggle ${isDarkMode ? 'toggle-dark' : 'toggle-light'}`}></div>
      </div>
    </div>
  );
}

export default App;
