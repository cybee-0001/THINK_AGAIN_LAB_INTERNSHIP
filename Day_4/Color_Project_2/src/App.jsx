import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('white'); // State for the selected theme in dropdown
  const [appliedTheme, setAppliedTheme] = useState('white'); // State for the applied theme

  const handleSelectChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const applyTheme = () => {
    setAppliedTheme(selectedTheme);
  };

  return (
    <div className={`App ${appliedTheme}`}>
      
      <h1 className='text-red-600'>Welcome to {appliedTheme} Theme</h1>
      <label htmlFor="theme-select">Choose a theme:</label>
      <select id="theme-select" value={selectedTheme} onChange={handleSelectChange}>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
        <option value="Black">Black</option>
      </select>
      <button onClick={applyTheme}>Apply Theme</button>
    </div >
  );
};

export default App;