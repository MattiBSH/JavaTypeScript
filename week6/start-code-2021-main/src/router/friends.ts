import { Router } from "express"
const router = Router();
 
import facade from "../facades/DummyDB-Facade";

 
import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config()
router.use(express.json());

const f = new facade();

router.use(express.static(path.join(process.cwd(), "public")))

// Something has to go in here

router.get("/demo", (req, res) => {
  let a = 124;
  console.log(a);
  res.send("Server is up");
})

router.get("/friends", async (req, res) => {
  let a = await f.getAllFriends();
 
  res.send(a);
})
router.get("/friend/:f", async (req, res) => {
  let email= req.params.f;
  let a = await f.getFriend(email);
 
  res.send(a);
})
router.delete("/delete/:f", async (req, res) => {
  let email= req.params.f;
  let a = await f.deleteFriend(email);
 
  res.send(a);
})

router.post("/add", async (req, res) => {
  const person ={
    id:req.body.id,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password
  }
  await f.addFriend(person).catch(()=>console.log("ok"));
 
  res.send(person);
  
})
router.get("/findby-username/:userid", async (req, res, next) => {
  const userId = req.params.userid;
  try {
    const friend = await f.getFriend(userId);
    if (friend == null) {
      throw new Error("user not found")
    }
    const { firstName, lastName, email } = friend;
    const friendDTO = { firstName, lastName, email }
    res.json(friendDTO);
  } catch (err) {
    next(err)
  }
})

export default router
