import express from "express";
const router = express.Router();
import controller from "../controller/filter";
import { capitalizeFirstLetter } from "../helper";

/* GET home page. */
router.get("/filter", async (req, res, next) => {
  const { start_year, end_year, gender, countries, colors } = req.body;

  const body = {
    start_year,
    end_year,
    gender: capitalizeFirstLetter(gender),
    countries,
    colors,
  };
  const data = await controller.filterOwners(body);
  return res.status(200).json({
    data,
  });
});

module.exports = router;
