import { BoxSelect } from "lucide-react";
import React from "react";

const SelectButton = ({ tool, setTool }) => {
  return (
    <div>
      <input
        type="radio"
        id="selection"
        checked={tool === "selection"}
        onChange={() => setTool("selection")}
        style={{ display: "none" }}
      />
      <label
        htmlFor="selection"
        style={{
          display: "flex",
          padding: "5px 10px",
          color: "white",
          borderRadius: "8px",
          backgroundColor: "#1a56db",
          alignItems: "center",
          marginLeft: "10px",
          gap: "10px",
          cursor: "pointer", // set cursor to pointer for better UX
        }}
      >
        <BoxSelect className="lucide-icon" /> Selection
      </label>
    </div>
  );
};

export default SelectButton;
