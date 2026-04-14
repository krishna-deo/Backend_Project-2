const mongoose = require("mongoose");

const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database is connectd")
    }catch(error){
        console.log("Database is not connecting", error.message)
    }
}

module.exports = connectDB;