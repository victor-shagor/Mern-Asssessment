import React, { useEffect, useState } from "react";
import { fetchFilter } from "../services";
import FilterCard from "../components/filterCard";

const LandingPage = () => {
  const [filterLoading, setFilterLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setFilterLoading(true);
        const filter = await fetchFilter();
        console.log(filter);
        if (filter) {
          setFilterLoading(false);
          setFilter(filter.data);
        }
      } catch (error) {
        setFilterLoading(false);
        let err = error.data
          ? error.data.message
          : "Something went wrong, try again later";
        // Swal.fire("Error", err, "error");
      }
    })();
  }, []);
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
          {filter.map((res, index) => (
            <FilterCard
              key={index}
              gender={res.gender}
              start_year={res.start_year}
              end_year={res.end_year}
              countries={res.countries}
              colors={res.colors}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
