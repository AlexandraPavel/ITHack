const express = require ("express")
const {issuesModel}=require("../issues/db")
const {tenantsModel}=require("../auth/tenants/db")
const db = require("../auth/tenants/db")
const router = express.Router()
console.log("sunt in issue")
// router.get('', (req,res)=>{

  
//     
// })
// const allissuesModule=require('./issueshome/allissues')
// router.use("/issuehome/allissues",allissuesModule)
// const newissueModule = require('./issueshome/newissue')
// router.use('/newissue', newissueModule)


router.get('/issueshome/allissues',async (req,res,next)=>{
//primesc id ul
 const allIssues= issuesModel.find()
 res.send(allIssues)
})
router.post('/issueshome/newissue', async (req,res,next)=>{
    console.log("baaaai")
    let user=await tenantsModel.findOne({
        username:req.body.username
    })
    if (user==null)
        {
            next(new Error("userul cu aces email nu exista"))
        }
        console.log("baaaai2")
    const newIssue=new issuesModel({
        title:req.body.title,
        description:req.body.description,
        isSolved:false,
        price:0,
        tenantId:user._id,
        workerId:null
    })
    try {
        await newIssue.save()
        console.log("baaaai3")
    } catch (error) {
        next(error)
    }console.log("baaaai4")
    const preissue=await issuesModel.findOne({
        title:req.body.title
    })
    //issuesIdList=user.listIssues
    user.listIssues.push(preissue._id)
    console.log(`baaaai5`)
    // tenantsModel.update({
    //     "_id":user._id,
    //     $set:{
    //         "listIssues":issuesIdList
    //     }
    // })
    console.log(`${user}`)
    //await tenantsModel.deleteOne({_id:user._id})
    console.log(`${user}`)
    await user.save()
    console.log(`baaaai6 ${user.listIssue}`)
    console.log("baaaai7")
    res.send("am bagat o noua issue")
})
router.get("/issueshome", async (req,res)=>{
    //primesc id ul userului si 
    console.log("sunt in issue2")
    
    // console.log("sunt in issue3")
 
  
    res.send("ai o noua problema? :./newissue sau vrei sa vezi toate problemele si statusul? :/allissues")
    const user=await issuesModel.findOne({
        _id:req.body.userId
    })
    if (user==null)
        {
            next(new Error("userul cu aces email nu exista"))
        }
    app.use('/tenants', tenantsModule)
    res.send("ai o noua problema? :./newissue sau vrei sa vezi toate problemele si statusul? :/allissues")
})

module.exports=router