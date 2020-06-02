import React, { useEffect } from "react";
import FilterCard from "../components/filterCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilters } from "../state/action";
import { useHistory } from "react-router-dom";
import CardLoader from "../components/ownerCardLoading";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const filter = useSelector((state) => state.filter);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);
  const click = (start_year, end_year, gender, countries, colors) => {
    const filterObj = {
      start_year,
      end_year,
      gender,
      countries,
      colors,
    };
    localStorage.setItem("filterObj", JSON.stringify(filterObj));
    history.push("/carowner");
  };

  let placeholders = [];
  for (let i = 0; i < 5; i++) {
    placeholders.push(
      <div className="row">
        <CardLoader width="520px" height={152} widt={520} />
      </div>
    );
  }

  return (
    <>
      <div style={{ marginLeft: "15rem", marginTop: "2rem" }}>
        <div className="row mx-auto">
          <i className="material-icons" style={{ fontSize: "40px" }}>
            filter_list
          </i>
          <p className="h2">Filter</p>
        </div>
      </div>
      {loading && (
        <div className="row mt-1">
          <div className="mx-auto">{placeholders}</div>
        </div>
      )}
      <div className="row mt-1">
        <div className="mx-auto">
          {filter &&
            filter.map((res, index) => (
              <FilterCard
                key={index}
                onClick={() =>
                  click(
                    res.start_year,
                    res.end_year,
                    res.gender,
                    res.countries,
                    res.colors
                  )
                }
                gender={res.gender}
                start_year={res.start_year}
                end_year={res.end_year}
                countries={res.countries}
                colors={res.colors}
                id={res.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
