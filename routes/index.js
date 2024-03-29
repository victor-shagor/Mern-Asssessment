import express from "express";
const router = express.Router();
import controller from "../controller/filter";
import { capitalizeFirstLetter } from "../helper";

/* GET home page. */
router.post("/filter", async (req, res, next) => {
  const { start_year, end_year, gender, countries, colors } = req.body;
  const upperCaseGender = gender ? capitalizeFirstLetter(gender) : "";
  const body = {
    start_year,
    end_year,
    gender: upperCaseGender,
    countries,
    colors,
  };
  const data = await controller.filterOwners(body);
  return res.status(200).json({
    data,
  });
});

export default router;
