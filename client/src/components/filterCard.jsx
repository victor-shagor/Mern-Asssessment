import React from "react";
import ColorDiv from "./colorDiv";
import CountryDiv from "./countryDiv";

const FilterCard = (props) => {
  return (
    <div
      className="bg-white shadow row justify-content-center p-md-2 p-2 mb-3 pb-3"
      style={{ borderRadius: "10px", width: "55vw" }}
      onClick={props.onClick}
      id={props.id}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="font-weight-bold h4">{`${props.start_year} - ${props.end_year}`}</div>
        <div className="font-weight-bold">{props.gender}</div>
        <div className="row">
          {props.countries.map((res, index) => (
            <CountryDiv country={res} key={index} />
          ))}
        </div>
        <div className="row">
          {props.colors.map((res, index) => (
            <ColorDiv color={res} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
