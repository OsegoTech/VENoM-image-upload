import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";

const connectDB = expressAsyncHandler(async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);

        mongoose.connection.on("connected", () => {
            console.log("Mongoose connected to db...");
        });
    
        mongoose.connection.on("error", (err) => {
            console.log(err.message);
        });
    
        mongoose.connection.on("disconnected", () => {
            console.log("Mongoose connection is disconnected...");
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

    
});

export default connectDB;