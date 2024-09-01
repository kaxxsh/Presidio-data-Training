import mongoose from "mongoose";

// making connection to Database
const dbconnection = (URL) => {
  try {
    mongoose.connect(URL);
  } catch (error) {
    console.log(error);
  }
};

export default dbconnection;
