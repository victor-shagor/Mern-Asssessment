import React from "react";
import carImage from "../assests/288c2a5efb5c2626f5e9f792f0dd6a9b.png";
import ColorDiv from "./colorDiv";
import Truncate from "react-truncate";
import { Cardiv } from "./filterCard";

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
    <Cardiv>
      <div
        className="bg-white p-md-3 p-1 mb-3 hover"
        style={{ borderRadius: "10px", maxWidth: "580px" }}
      >
        <div>
          <div className="d-md-flex">
            <div className="ml-3 mr-5">
              <img
                src={carImage}
                alt="car"
                style={{ width: "130px", height: "200px" }}
              />
            </div>
            <div className="">
              <div className="font-weight-bold mb-1">{`${first_name} ${last_name}`}</div>
              <div className="d-flex mb-1">
                <div className="mr-2 pr-3 border-right">
                  <p className="text-muted">Brand</p>
                  <p className="mt-n3">{car_model}</p>
                </div>
                <div className="mr-2 pr-3 pl-3 border-right">
                  <p className="text-muted">Year</p>
                  <p className="mt-n3">{car_model_year}</p>
                </div>
                <div className="pl-2">
                  <p className="text-muted">Color</p>
                  <div className="mt-n2">
                    <ColorDiv color={car_color} />
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="mr-3">
                  <p className="text-muted">Country</p>
                  <p className="mt-n3">{country}</p>
                </div>
                <div className="mr-3">
                  <p className="text-muted">Gender</p>
                  <p className="mt-n3">{gender}</p>
                </div>
                <div>
                  <p className="text-muted">Job</p>
                  <p className="mt-n3">{job_title}</p>
                </div>
              </div>
              <div className="text-muted">
                <span className="text-muted">Email:&nbsp; </span>
                {email}
              </div>
              <div className="text-muted">
                <Truncate ellipsis={<span>...</span>}>
                  <span className="text-muted">Bio: &nbsp;</span> {bio}
                </Truncate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cardiv>
  );
};

export default OwnerCard;
