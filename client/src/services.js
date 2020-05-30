import axios from "axios";

export const fetchFilter = async () => {
  console.log("hi");
  let url = `https://ven10.co/assessment/filter.json`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return await axios.get(proxyurl + url);
};
export const fetchOwner = (filter) => {
  return axios.post("/filter", filter);
};
