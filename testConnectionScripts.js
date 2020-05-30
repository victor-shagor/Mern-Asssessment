import mongoose from "mongoose";

export async function connect() {
  mongoose.connect("mongodb://localhost:27017/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose.connection.on("connected", () => console.log("DB connected"));
}

export async function disconnect() {
  mongoose.disconnect();
}
