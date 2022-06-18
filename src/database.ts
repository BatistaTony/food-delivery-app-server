import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(
      process.env.DB_STRING,
      { useNewUrlParser: true },
      (err: any) => {
        if (err) console.log("DB NOT CONNECTED");

        console.log("DB CONNECTED");
      }
    );
  }
}

const dbInstance = new database();

export { dbInstance };
