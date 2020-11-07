const express = require ("express")
const { Mongoose } = require("mongoose")
const router = express.Router()

router.get("/newissue",(req,res)=>{
    //primim toate detaliile legate de problema
    res.send(`am inregistrat problema cu numele:${req.body.title}`)   

    const newIssue=new issuesModel({
        title:req.body.title,
        description:req.body.description,
        isSolved:false,
        price:0
    })
    try {
        await newIssue.save()
        res.send(`am inregistrat problema cu numele:${req.body.title}`)   

    } catch (error) {
        next(error)
    }
})
module.exports=router