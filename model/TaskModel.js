
const mongoose=require("mongoose")

const taskschema=mongoose.Schema({
    name:String,
    title : String,
	description : String,
	status :String,
    boardID:String

})

const taskmodel=mongoose.model("task",taskschema)

module.exports={
    taskmodel
}