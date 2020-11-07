const express = require ("express")

const router = express.Router()

const allissuesModule = require('./allissues')
router.use('/allissues', allissuesModule)
const newissueModule = require('./newissue')
router.use('/newissue', newissueModule)

 
// router.get("/issues", async (req,res)=>{
//     //primesc id ul userului si 
//     const user=await issuesModel.findOne({
//         _id:req.body.userId
//     })
//     if (user==null)
//         {
//             next(new Error("userul cu aces email nu exista"))
//         }
//     app.use('/tenants', tenantsModule)
//     res.send("ai o noua problema? :./newissue sau vrei sa vezi toate problemele si statusul? :/allissues")
// })

module.exports=router