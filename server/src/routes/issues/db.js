const mongoose = require("mongoose")
const databaseUrl="mongodb://127.0.0.1/hackathon"

const schemaIssues=new mongoose.Schema({
    tenantId:mongoose.Schema.Types.ObjectId,
    title:String,
    description:String,
    workerId:mongoose.Schema.Types.ObjectId,
    price:Number,
    isSolved:Boolean
})

const issuesModel=mongoose.model("issues",schemaIssues)
module.exports={

    databaseUrl,
    issuesModel
}