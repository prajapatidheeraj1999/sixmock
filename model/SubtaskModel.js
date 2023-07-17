const mongoose=require("mongoose")

const subtaskschema=mongoose.Schema({
    name:String,
    title : String,
	description : String,
	status :String
})

const subtaskmodel=mongoose.model("subtask",subtaskschema)

module.exports={
    subtaskmodel
}