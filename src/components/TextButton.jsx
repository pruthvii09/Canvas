import { CaseSensitive } from "lucide-react";
import React from "react";

const TextButton = ({ tool, setTool }) => {
  return (
    <div>
      <input
        type="radio"
        id="text"
        checked={tool === "text"}
        onChange={() => setTool("text")}
        style={{ display: "none" }}
      />
      <label
        htmlFor="text"
        style={{
          fontSize: "14px",
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
        <CaseSensitive size={19} className="lucide-icon" /> Text
      </label>
    </div>
  );
};

export default TextButton;
