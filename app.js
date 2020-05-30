import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./routes/index";

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

app.use("/", indexRouter);
app.get("/", (req, res) =>
  res.status(200).send({ message: "Welcome to Cars" })
);
app.use("*", (req, res) =>
  res.status(404).send({ message: "route not found" })
);

export default app;
