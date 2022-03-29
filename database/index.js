import mongoose from "mongoose";
import { DB_URL } from "../config";

function dbConnect() {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("MongoDB connected...");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default dbConnect;
