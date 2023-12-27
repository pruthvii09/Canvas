// TextOptions.js
import React from 'react';

const TextOptions = ({
  textColor,
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  onColorChange,
  onSizeChange,
  onFontChange,
  onStyleChange,
  onWeightChange,
}) => {
  return (
    <div>
      <label htmlFor="textColor">Text Color:</label>
      <input
        type="color"
        id="textColor"
        value={textColor}
        onChange={(e) => onColorChange(e.target.value)}
      />

      <label htmlFor="fontSize">Font Size:</label>
      <input
        type="number"
        id="fontSize"
        value={fontSize}
        onChange={(e) => onSizeChange(parseInt(e.target.value, 10))}
      />

      <label htmlFor="fontFamily">Font Family:</label>
      <select
        id="fontFamily"
        value={fontFamily}
        onChange={(e) => onFontChange(e.target.value)}
      >
        <option value="sans-serif">Sans-serif</option>
        <option value="serif">Serif</option>
        {/* Add more font family options as needed */}
      </select>

      <label htmlFor="fontStyle">Font Style:</label>
      <select
        id="fontStyle"
        value={fontStyle}
        onChange={(e) => onStyleChange(e.target.value)}
      >
        <option value="normal">Normal</option>
        <option value="italic">Italic</option>
        {/* Add more font style options as needed */}
      </select>

      <label htmlFor="fontWeight">Font Weight:</label>
      <select
        id="fontWeight"
        value={fontWeight}
        onChange={(e) => onWeightChange(e.target.value)}
      >
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        {/* Add more font weight options as needed */}
      </select>
    </div>
  );
};

export default TextOptions;
