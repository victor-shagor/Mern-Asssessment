import React from "react";

const CountryDiv = (props) => {
  const { country } = props;

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "50rem",
        fontSize: "16px",
        paddingLeft: "7px",
        paddingRight: "7px",
        textAlign: "center",
        paddingTop: "2px",
        paddingBottom: "2px",
        fontSize: "12px",
      }}
      className="m-2"
    >
      {country}
    </div>
  );
};

export default CountryDiv;
