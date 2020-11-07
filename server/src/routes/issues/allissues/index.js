const express = require ("express")
const { Mongoose } = require("mongoose")
const router = express.Router()

router.get("/allissues", async (req,res)=>{
    //primesc id ul
    const user=await tenantsModel.findOne({
        _id:req.body.userId
    })
    if (user==null)
        {
            next(new Error("userul cu aces email nu exista"))
        }
    res.send("o sa trimit lista problemelor")
    for(const undeSuntem in user.listIssue)
    {
        res.json({
            title:undeSuntem.title,
            description:undeSuntem.description,
            isSolved:undeSuntem.isSolved,
            priceIfIsSolved:undeSuntem.price
        })
    }
})