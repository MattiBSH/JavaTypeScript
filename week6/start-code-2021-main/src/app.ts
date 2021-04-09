import dotenv from "dotenv";

import express from "express";
import path from "path";
import FriendsFacade from './facades/DummyDB-Facade'
import friendsRoute from './router/friends'
const debug=require("Debug")("app");
dotenv.config()
const app = express();
app.use((req,res,next) =>{
  console.log(new Date().toLocaleDateString(),req.method,req.originalUrl,req.ip);

 next();
});
app.use("/api/friends",friendsRoute)


export default app;

