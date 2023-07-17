const express =require("express")
const {connects}=require("./db")
const cors=require("cors")
const {boardroutes}=require("./route/boardroute")
const { taskroutes } = require("./route/taskroute")
const app=express()
app.use(cors())
app.use(express.json())


app.use("/board",boardroutes)

app.use("/task",taskroutes)
app.listen(8080,async()=>{

    try{

        await connects
        console.log("connections is stablesh")

    }catch(errr)
    {
        console.log("something is wrong connection is not stablesh")

    }

})