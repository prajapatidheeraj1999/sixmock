const express=require("express")
const { taskmodel } = require("../model/TaskModel")

const taskroutes=express.Router()

taskroutes.post("/taskcrate",async(req,res)=>{
    let org=req.body

    try{

       let data=await taskmodel(org)
       await data.save()
       res.send({"mas":"board has been ceated"})

    }catch(error){

        res.send({"mas":"something is wrong"})

    }

})

taskroutes.get("/get",async(req,res)=>{
    let data=req.body

    try{

       let data=await taskmodel.find({boardID:data.boardID})
      
       res.send({"mas":"board data",data})

    }catch(error){

        res.send({"mas":"something is wrong"})

    }

})

module.exports={taskroutes}