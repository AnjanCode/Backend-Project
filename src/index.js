// require('dotenv').config();
import dotenv from "dotenv";
import DBconnect from "./db/index.js";

dotenv.config({
  path: './env'
});


DBconnect();




/*import express from "express";
const app = express();

( async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is listening port ${process.env.PORT}`);
    })
  } catch(err) {
    console.error("Error : ", err);
    throw err;
  }
}) ()*/