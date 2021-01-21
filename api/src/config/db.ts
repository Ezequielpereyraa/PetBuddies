import moongose from "mongoose";
require("dotenv").config();

const db = process.env.DB_URL as string;

const connectDb = async () => {
  try {
    await moongose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("DB Connect");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
