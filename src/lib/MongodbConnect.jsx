import mongoose from "mongoose";
export default async function MongoDBConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection Successful");
  } catch (error) {
    console.log(error);
  }
}
