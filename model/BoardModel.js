
const mongoose=require("mongoose")

const baordschema=mongoose.Schema({
    name:String
})

const boardmodel=mongoose.model("board",baordschema)

module.exports={
    boardmodel
}