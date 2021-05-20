import { Router } from "express"
const router = Router();
import { ApiError } from "../errors/errors"
import FriendFacade from "../facades/friendFacade"
const debug = require("debug")("friend-routes")

let facade: FriendFacade;

// Initialize facade using the database set on the application object
router.use(async (req, res, next) => {
  if (!facade) {
    const db = req.app.get("db")
    debug("Database used: " + req.app.get("db-type"))
    facade = new FriendFacade(db)
  }
  next()
})


  



router.get("/allUser", async (req: any, res) => {
  const friends = await facade.getAllFriends();
  const friendsDTO = friends.map(friend => {
    const { firstName, lastName, email } = friend
    return { firstName, lastName, email }
  })
  res.json(friendsDTO);
})

export default router