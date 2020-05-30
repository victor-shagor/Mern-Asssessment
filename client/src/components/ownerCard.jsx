import React from "react";
import carImage from "../assests/288c2a5efb5c2626f5e9f792f0dd6a9b.png";
import ColorDiv from "./colorDiv";
import Truncate from "react-truncate";

const OwnerCard = (props) => {
  const {
    first_name,
    last_name,
    gender,
    bio,
    car_model,
    car_model_year,
    car_color,
    email,
    country,
    job_title,
  } = props;
  return (
    <div
      className="bg-white shadow p-md-2 p-1 mb-3"
      style={{ borderRadius: "10px", maxWidth: "600px" }}
    >
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        <div className="d-md-flex">
          <div className="ml-3 mr-5">
            <img
              src={carImage}
              alt="car"
              style={{ width: "80px", height: "300px" }}
            />
          </div>
          <div className="">
            <div className="font-weight-bold mb-1">{`${first_name} ${last_name}`}</div>
            <div className="d-flex mb-1">
              <div
                className="mr-2 pr-1"
                style={{ borderRight: "solid 1px black" }}
              >
                <p style={{ color: "#717171" }}>Brand</p>
                <p className="mt-n3 font-weight-bold">{car_model}</p>
              </div>
              <div
                className="mr-2 pr-1"
                style={{ borderRight: "solid 1px black" }}
              >
                <p style={{ color: "#717171" }}>Year</p>
                <p className="mt-n3 font-weight-bold">{car_model_year}</p>
              </div>
              <div>
                <p style={{ color: "#717171" }}>Color</p>
                <div className="mt-n2">
                  <ColorDiv color={car_color} />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="mr-3">
                <p style={{ color: "#717171" }}>Country</p>
                <p className="mt-n3 font-weight-bold">{country}</p>
              </div>
              <div className="mr-3">
                <p style={{ color: "#717171" }}>Gender</p>
                <p className="mt-n3 font-weight-bold">{gender}</p>
              </div>
              <div>
                <p style={{ color: "#717171" }}>Job</p>
                <p className="mt-n3 font-weight-bold">{job_title}</p>
              </div>
            </div>
            <div>
              <span style={{ color: "#717171" }}>Email: </span>
              {email}
            </div>
            <div>
              <span style={{ color: "#717171" }}>Bio: </span>
              <Truncate lines={1} ellipsis={<span>...</span>}>
                {bio}
              </Truncate>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;
