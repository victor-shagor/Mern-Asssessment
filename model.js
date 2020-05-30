import mongoose from "mongoose";

const ownersSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  country: String,
  car_model: String,
  car_model_year: String,
  car_color: String,
  gender: String,
  job_title: String,
  bio: String,
});

export default mongoose.model("owners", ownersSchema);
