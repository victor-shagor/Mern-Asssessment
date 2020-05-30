import React from "react";

const CountryDiv = (props) => {
  const { country } = props;

  return (
    <div
      style={{
        backgroundColor: "#E1E1E1",
        borderRadius: "13px",
        fontSize: "16px",
        paddingLeft: "7px",
        paddingRight: "7px",
        paddingTop: "2px",
        paddingBottom: "2px",
      }}
      className="m-2"
    >
      {country}
    </div>
  );
};

export default CountryDiv;
