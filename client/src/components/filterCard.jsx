import React from "react";
import ColorDiv from "./colorDiv";
import CountryDiv from "./countryDiv";
import styled from "styled-components";

export const Cardiv = styled.div`
  .input {
    border-radius: 20px;
    border: none;
    background-color: rgb(24, 136, 165);
    color: white;
    width: 100px;
    height: 50px;
  }
  .hover {
    transition: transform 0.6s;
  }

  .hover:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  .input:disabled {
    background: #dddddd;
  }
`;

const FilterCard = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Cardiv>
      <div
        className="shadow-sm row justify-content-center p-md-2 p-2 mb-3 pb-3 hover"
        style={{
          borderRadius: "10px",
          width: "39vw",
          backgroundColor: "white",
        }}
        onClick={props.onClick}
        id={props.id}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "8px",
          }}
        >
          <div className="h4">{`${props.start_year} - ${props.end_year}`}</div>
          <div className="pb-2 pt-2">
            {props.gender && capitalizeFirstLetter(props.gender)}
          </div>
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
    </Cardiv>
  );
};

export default FilterCard;
