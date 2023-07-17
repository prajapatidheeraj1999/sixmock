const express=require("express")
const { boardmodel } = require("../model/BoardModel")

const boardroutes=express.Router()

boardroutes.post("/create",async(req,res)=>{
    let org=req.body

    try{

       let data=await boardmodel(org)
       await data.save()
       res.send({"mas":"board has been ceated"})

    }catch(error){

        res.send({"mas":"something is wrong"})

    }

})

boardroutes.get("/get",async(req,res)=>{
    

    try{

       let data=await boardmodel.find()
      
       res.send({"mas":"board data",data})

    }catch(error){

        res.send({"mas":"something is wrong"})

    }

})

module.exports={boardroutes}