import React from "react";

const SelectFont = ({ font, setFont }) => {
  console.log(font);
  return (
    <div>
      <select value={font} onChange={e => setFont(e.target.value)}>
        <option value="defaultFont">Default Font</option>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        {/* Add more font options as needed */}
      </select>
    </div>
  );
};

export default SelectFont;
