const express = require ("express")

const router = express.Router()
console.log("sunt in issue")
// router.get('', (req,res)=>{

  
//     
// })
// const allissuesModule=require('./issueshome/allissues')
// router.use("/issuehome/allissues",allissuesModule)
// const newissueModule = require('./issueshome/newissue')
// router.use('/newissue', newissueModule)
router.get('/issueshome/allissues',async (req,res)=>{
//primesc id ul
res.send("o sa trimit lista problemelor")
    const user=await tenantsModel.findOne({
        _id:req.body.userId
    })
    if (user==null)
        {
            next(new Error("userul cu aces email nu exista"))
        }
   
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
router.get('/issueshome/newissue', async (req,res)=>{
    console.log("baaaai")
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