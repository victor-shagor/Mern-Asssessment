import axios from "axios";

let config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
export const fetchFilter = async () => {
  let url = `https://ven10.co/assessment/filter.json`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const data = await axios.get(proxyurl + url);
  if (data) {
    return data;
  } else {
    return null;
  }
};
