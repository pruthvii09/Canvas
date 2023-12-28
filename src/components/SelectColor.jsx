import React from "react";

const SelectColor = ({ color, setColor }) => {
  return (
    <div>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="defaultFont">Default Font</option>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="green">Green</option>
        {/* Add more font options as needed */}
      </select>
    </div>
  );
};

export default SelectColor;
