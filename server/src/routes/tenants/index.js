const express = require ("express")
const bcrypt =require ("bcrypt")

const router=express.Router()

//pagina de facturi
router.get("/conthome",async(req,res)=>{
    //req primeste anul, luna, id user
    const user=await tenantsModel.findOne({
        _id:req.body.userId
    })
    if (user==null)
        {
            next(new Error("acest user nu exista"))
        }
    for(const undeSuntem in user.listBills)
    {
        if(req.body.year==undeSuntem.year)
            if (req.body.month==undeSuntem.month)
                res.json({
                    priceRent:undeSuntem.priceRent,
                    priceGas:undeSuntem.priceGas,
                    priceElectricity:undeSuntem.priceElectricity,
                    priceWater:undeSuntem.priceWater
                })
    }
    res.send("sunstem in pagina de home a contului")
    
      
})

module.exports=router