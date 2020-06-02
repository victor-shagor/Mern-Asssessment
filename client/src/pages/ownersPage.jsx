import React, { useEffect, useState } from "react";
import OwnerCard from "../components/ownerCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchOwners } from "../state/action";
import Pagenation from "../components/pagination";
import { gotoPage, previous, next } from "../state/action";
import { Link } from "react-router-dom";
import CardLoader from "../components/ownerCardLoading";
import { Cardiv } from "../components/filterCard";

const OwnersPage = () => {
  const dispatch = useDispatch();
  const [pageToGo, setPageToGo] = useState();
  const owners = useSelector((state) => state.owners);
  const startIndex = useSelector((state) => state.startIndex);
  const count = useSelector((state) => state.count);
  const page = useSelector((state) => state);
  const loading = useSelector((state) => state.loading);
  const sliceIndex = localStorage.startIndex
    ? localStorage.startIndex
    : startIndex;
  useEffect(() => {
    const filterObj = localStorage.getItem("filterObj");
    dispatch(fetchOwners(JSON.parse(filterObj)));
  }, []);

  let placeholders = [];
  for (let i = 0; i < 5; i++) {
    placeholders.push(
      <div className="row">
        <CardLoader width="570px" height={240} widt={570} />
      </div>
    );
  }

  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ marginLeft: "15rem", marginTop: "2rem" }}>
          <div className="row mx-auto">
            <i className="material-icons" style={{ fontSize: "40px" }}>
              arrow_back_ios
            </i>
            <p className="h2">Home</p>
          </div>
        </div>
      </Link>
      {loading && (
        <div className="row mt-1">
          <div className="mx-auto">{placeholders}</div>
        </div>
      )}
      {!loading && owners && !owners.length && (
        <div className="row mt-1">
          <p className="mx-auto">No data</p>
        </div>
      )}
      <div className="row mt-3">
        <div className="mx-auto">
          {owners &&
            owners
              .slice(sliceIndex, sliceIndex + 10)
              .map((res, index) => (
                <OwnerCard
                  key={index}
                  first_name={res.first_name}
                  last_name={res.last_name}
                  gender={res.gender}
                  bio={res.bio}
                  car_model={res.car_model}
                  car_model_year={res.car_model_year}
                  car_color={res.car_color}
                  email={res.email}
                  country={res.country}
                  job_title={res.job_title}
                />
              ))}
        </div>
      </div>
      {/* {count && <Pagenation count={count} page={page.page} />} */}

      <Cardiv>
        <div className="row" style={{ overflowX: "hidden" }}>
          <div className="d-flex mb-1 mx-auto">
            <input
              type="button"
              value="Previous"
              disabled={page.page === 1 ? true : false}
              className="pl-3 pr-3 pt-2 pb-2 mr-3 mb-5 mt-2 input"
              onClick={() => {
                dispatch(previous());
                window.scrollTo(0, 0);
              }}
            />
            <input
              onClick={() => {
                dispatch(next());
                window.scrollTo(0, 0);
              }}
              type="button"
              value="Next"
              disabled={page.page === count ? true : false}
              className="pl-4 pr-4 pt-2 pb-2 mb-5 mt-2 input"
            />
          </div>
        </div>
        <div className="row mb-n2">
          <div className="mx-auto row">
            <input
              onChange={(e) => {
                setPageToGo(e.target.value);
              }}
              type="text"
              className="pl-4 pr-4 pt-2 pb-2 mb-5 mt-2 ml-2"
              style={{
                borderRadius: "5px",
                width: "100px",
                height: "50px",
              }}
            />
            <input
              onClick={() => {
                if (pageToGo && pageToGo <= count) {
                  dispatch(gotoPage(pageToGo));
                  window.scrollTo(0, 0);
                }
              }}
              disabled={pageToGo > count ? true : false}
              type="button"
              value="go to page"
              className="pt-2 pb-2 mb-5 mt-2 ml-1 input"
            />
          </div>
        </div>
      </Cardiv>
      <div className="row mt-n4">
        {count && <p className="mx-auto">{count} pages in total</p>}
      </div>
    </>
  );
};

export default OwnersPage;
