const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb connected")
    }
    catch(error){
        console.log("Mongo Connection failed")
        console.log(error)
    }
}

module.exports = connectDB