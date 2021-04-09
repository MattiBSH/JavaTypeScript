import { IFriend } from '../interfaces/IFriend';
import { Db, Collection } from "mongodb";
import bcrypt from "bcryptjs";
import { ApiError } from '../errors/errors';
import Joi, { ValidationError } from "joi"

const BCRYPT_ROUNDS = 10;

const USER_INPUT_SCHEMA = Joi.object({
  firstName: Joi.string().min(2).max(40).required(),
  lastName: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(4).max(30).required(),
  email: Joi.string().email().required()
})

class FriendsFacade {
  db: Db
  friendCollection: Collection

  constructor(db: Db) {
    this.db = db;
    this.friendCollection = db.collection("friends");
  }



  //tested to here

  /**1
   * TODO
   * @param email 
   * @param friend 
   * @throws ApiError if validation fails or friend was not found
   */
  async editFriend(email: string, friend: IFriend): Promise<{ modifiedCount: number }> {
    const status = USER_INPUT_SCHEMA.validate(friend);
    if (status.error) {
      throw new ApiError(status.error.message, 400)
    }

    try {
      const hashedpw = await bcrypt.hash(friend.password, BCRYPT_ROUNDS);
      const f = { ...friend, password: hashedpw }
      var myquery = { email: email };
      var newvalues = { $set: { firstName: friend.firstName, lastName: f.lastName, password: f.password, email: f.email } };
      const s= await this.friendCollection.updateOne(myquery, newvalues);
    
    return  { modifiedCount: s.modifiedCount };
    } catch (error) {

      throw new Error(error);
    }
  }

  /**2
   * 
   * @param friendEmail 
   * @returns true if deleted otherwise false
   */
  async deleteFriend(friendEmail: string): Promise<boolean> {
    var myquery = { friendEmail: friendEmail };
    this.friendCollection.deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      return false;
    });

    return true;
  }


  //all down from here tested
  /**
    * 
    * @param friend 
    * @throws ApiError if validation fails
    */
  async addFriend(friend: IFriend): Promise<{ id: String }> {
    const status = USER_INPUT_SCHEMA.validate(friend);
    if (status.error) {
      throw new ApiError(status.error.message, 400)
    }
    const hashedpw = await bcrypt.hash(friend.password, BCRYPT_ROUNDS);
    const f = { ...friend, password: hashedpw }

    return (await this.friendCollection.insertOne(f)).insertedId;

  }

  async getAllFriends(): Promise<Array<IFriend>> {
    const users: unknown = await this.friendCollection.find({}).toArray();
    return users as Array<IFriend>
  }

  /**
   * 
   * @param friendEmail 
   * @returns 
   * @throws ApiError if not found
   */
  async getFrind(friendEmail: string): Promise<IFriend> {
    const query = { email: friendEmail };
    const user: unknown = await this.friendCollection.findOne(query);
    if (user == null) {
      throw new ApiError("not found");
    } else {
      return user as IFriend;
    }

  }

  /**
   * Use this method for authentication
   * @param friendEmail 
   * @param password 
   * @returns the user if he could be authenticated, otherwise null
   */
  async getVerifiedUser(friendEmail: string, password: string): Promise<IFriend | null> {
    const friend: IFriend = await this.friendCollection.findOne({ email: friendEmail })
    if (friend && bcrypt.compare(password, friend.password)) {
      return friend
    }
    return Promise.resolve(null)
  }

}

export default FriendsFacade;

