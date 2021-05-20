import express from "express";
import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv";
import path from "path"
dotenv.config()
import Cors from "cors";



import { ApiError } from "./errors/errors"
import friendsRoutes from "./routes/friendRoutes";
const debug = require("debug")("app")
//import Logger from './middleware/simpleLogger';
const app = express()
app.use(Cors());


//Logging
import logger, { stream } from "./middleware/Logger";
import authMiddleware from "./middleware/basic-auth";
const morganFormat = process.env.NODE_ENV == "production" ? "combined" : "dev"
app.use(require("morgan")(morganFormat, { stream }));
logger.log("info", "Server started");
//app.use(Logger);
//________________

app.use(express.static(path.join(process.cwd(), "public")))
app.use("/api/friends", authMiddleware,friendsRoutes)
app.use("/demo",authMiddleware);
app.get("/demo", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*" );
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept" );
  res.send("Server is up");
})

//Our own default 404-handler for api-requests
app.use("/api", (req: any, res: any, next) => {
  res.status(404).json({ errorCode: 404, msg: "not found" })
})

//Makes JSON error-response for ApiErrors, otherwise pass on to default error handleer
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof (ApiError)) {
    res.status(err.errorCode).json({ errorCode: 404, msg: err.message })
  } else {
    next(err)
  }
})

export default app;

