import React from "react";

const ColorDiv = (props) => {
  const { color } = props;
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        height: "10px",
        width: "10px",
      }}
      className="p-2 m-2"
    ></div>
  );
};

export default ColorDiv;
