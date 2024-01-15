import mongoose from "mongoose";
import { MONGODB_URI } from '../configPorts';


if(!MONGODB_URI) {
  throw new Error("MONGODB_URI no definida")
}

export const connectMongoose = async () => {
  try {
    const {connection} = await mongoose.connect(MONGODB_URI as string);
    if(connection.readyState === 1) {
      console.log("MongoDB Connected");
      return Promise.resolve(true)
    }
  } catch (error) {
    console.log('error: ', error);
    return Promise.reject(false);
  }
};
