import React, { useState, useEffect } from 'react';

const ChangeColor = () => {
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('themeColor') || 'White');

  useEffect(() => {
    document.body.className = selectedColor.toLowerCase();
    localStorage.setItem('themeColor', selectedColor);
  }, [selectedColor]);

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <>
      <h3>Color Change Website</h3>
      <select value={selectedColor} onChange={handleChange}>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
      </select>
    </>
  );
};

export default ChangeColor;
