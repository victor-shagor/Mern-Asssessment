import React, { useEffect } from "react";
import FilterCard from "../components/filterCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilters } from "../state/action";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const filter = useSelector((state) => state.filter);
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
  return (
    <>
      <div className="row mt-2 ml-n5">
        <div className="row mx-auto">
          <i className="material-icons">filter_list</i>
          <p className="font-weight-bold">Filter</p>
        </div>
      </div>
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
