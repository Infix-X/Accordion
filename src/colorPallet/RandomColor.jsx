
import React, { useState } from 'react';

import './style.css';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('Hex');
  const [color, setColor] = useState('');

  const randomColorUtility = (length) => Math.floor(Math.random() * length);

  const handleRandomHexColor = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += arr[randomColorUtility(arr.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  };

  const handleRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
    console.log(rgbColor);
  };

  return (
    <div className="container" style={{ background: color }}>
      <div className='Options'>
        <select onChange={(e) => setTypeOfColor(e.target.value)}>
        <option value="Hex">Hex Color</option>
        <option value="Rgb">RGB Color</option>
      </select>
      </div>
      <button onClick={typeOfColor === 'Hex' ? handleRandomHexColor : handleRandomRgbColor}>
        Generate {typeOfColor} Color
      </button>
      <RandomColor />
    </div>
  );
};

export default RandomColor;
