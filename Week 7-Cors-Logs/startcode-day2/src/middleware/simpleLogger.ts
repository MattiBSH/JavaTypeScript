import express from "express";
import dotenv from "dotenv";
import path from "path"
dotenv.config()

const debug = require("debug")("app")
import { Request, Response, NextFunction } from "express"

const app = express()

let logger = app.use((req, res, next) => {
        debug(new Date().toLocaleDateString(), req.method, req.originalUrl, req.ip)
        next()
      })    



  export default logger;