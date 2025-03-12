import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected succufully: ", conn.connection.host)
    } catch(err){
        console.log("error in db connection: ",err)
    }
}