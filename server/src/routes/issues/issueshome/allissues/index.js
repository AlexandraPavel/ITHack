const express = require ("express")
const { Mongoose } = require("mongoose")
const router = express.Router()
console.log("sunt in issue all")

router.get('/', async (req,res)=>{
    //primesc id ul
    console.log("sunt in issue all2")
    res.send("o sa trimit lista problemelor")
    
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
module.exports=router