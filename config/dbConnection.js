const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};
module.exports= connectDb;

