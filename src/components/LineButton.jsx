import { Tally2 } from "lucide-react";
import React from "react";

const LineButton = ({ tool, setTool }) => {
  return (
    <div>
      <input
        type="radio"
        id="line"
        checked={tool === "line"}
        onChange={() => setTool("line")}
        style={{ display: "none" }}
      />
      <label
        htmlFor="line"
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
        <Tally2 className="lucide-icon" /> Line
      </label>
    </div>
  );
};

export default LineButton;
