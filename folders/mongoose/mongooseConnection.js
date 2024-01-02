import mongoose from "mongoose"


const mongooseConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connect successfully!");
        
    } catch (error) {
        console.log(error);
    }
  
}

export default mongooseConnection
