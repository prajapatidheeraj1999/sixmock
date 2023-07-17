const mongoose=require("mongoose")
require("dotenv").config()
let connects=mongoose.connect(process.env.mongodbURL)

module.exports={
    connects
}