import { Pencil } from "lucide-react";
import React from "react";

const PencilButton = ({ tool, setTool }) => {
  return (
    <div>
      <input
        type="radio"
        id="pencil"
        checked={tool === "pencil"}
        onChange={() => setTool("pencil")}
        style={{ display: "none" }} // hide the radio button
      />

      <label
        htmlFor="pencil"
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
        <Pencil size={19} className="lucide-icon" /> Pencil
      </label>
    </div>
  );
};

export default PencilButton;
