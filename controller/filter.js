import Owners from "../model";

var filterOwners = async (data) => {
  const queryBy = {};
  if (data.start_year && data.end_year) {
    queryBy["car_model_year"] = { $gte: data.start_year, $lte: data.end_year };
  }
  if (data.countries?.length) {
    queryBy["country"] = { $in: data.countries };
  }
  if (data.gender) {
    queryBy["gender"] = data.gender;
  }
  if (data.colors?.length) {
    queryBy["car_color"] = { $in: data.colors };
  }
  return Owners.find(queryBy);
};

export default {
  filterOwners,
};
