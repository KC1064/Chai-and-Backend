// import mongoose from "mongoose"
// import DB_NAME from "./constants"

// // import express from "express"
// // const app = express();

// // ;(async ()=>{
// //     try {
// //         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

// //         app.on("error",(error)=>{
// //             console.log(error);
// //             throw error;
// //         })

// //         app.listen(process.env.PORT,()=>{
// //             console.log(`Server running on port ${
// //                 process.env.PORT
// //             }`);

// //         })
// //     } catch (error) {
// //         console.log(error);
// //     }
// // })()

import dotenv from "dotenv";

import connectDB from "./database/db.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });
