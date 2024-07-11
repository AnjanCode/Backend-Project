import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const DBconnect = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected !! Connection Host ${connectInstance.connection.host}`);
  } catch (err) {
    console.error("Mongo Connect Error : ", err);
    process.exit(1);
  }
}

export default DBconnect;