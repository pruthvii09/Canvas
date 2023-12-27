import React from "react";
import "../App.css";
import { RectangleHorizontal } from "lucide-react";
const RectangleButton = ({ tool, setTool }) => {
  return (
    <div>
      <input
        type="radio"
        id="rectangle"
        checked={tool === "rectangle"}
        onChange={() => setTool("rectangle")}
        style={{ display: "none" }} // hide the radio button
      />

      <label
        htmlFor="rectangle"
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
        onClick={() => setTool("rectangle")} // handle click on the label
      >
        <RectangleHorizontal className="lucide-icon" /> Rectangle
      </label>
    </div>
  );
};

export default RectangleButton;
