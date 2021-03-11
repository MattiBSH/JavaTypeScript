import express from "express";
import dotenv from "dotenv";
import path from "path";
import FriendsFacade from './facades/DummyDB-Facade'
dotenv.config()
const app = express()
app.use(express.json());


const f = new FriendsFacade();
//app.use('/static', express.static('public'))
app.use(express.static(path.join(process.cwd(), "public")))

// Something has to go in here

app.get("/demo", (req, res) => {
  let a = 124;
  console.log(a);
  res.send("Server is up");
})

 app.get("/friends", async (req, res) => {
  let a = await f.getAllFriends();
 
  res.send(a);
})
app.get("/friend/:f", async (req, res) => {
  let email= req.params.f;
  let a = await f.getFriend(email);
 
  res.send(a);
})
app.delete("/delete/:f", async (req, res) => {
  let email= req.params.f;
  let a = await f.deleteFriend(email);
 
  res.send(a);
})
app.post("/add", async (req, res) => {
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
export default app;

