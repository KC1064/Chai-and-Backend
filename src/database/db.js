import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `DB Connection successsful ${ConnectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB Connection error", error);
    process.exit(1);
  }
};

export default connectDB;