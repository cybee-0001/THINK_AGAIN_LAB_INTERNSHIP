// src/App.js
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './Components/ThemeContext';
import ThemeToggler from './Components/ThemeToggler';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <ThemeToggler />
    </div>
  );
};

export default App;



