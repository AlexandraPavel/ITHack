const express = require ("express")
const bcrypt =require ("bcrypt")
const {tenantsModel}=require("../auth/tenants/db")
const router=express.Router()

//pagina de facturi
router.get("/conthome",async(req,res,next)=>{ ////// ERA POST INAINTE AICI
    //req primeste anul, luna, id user
    const user = await tenantsModel.findOne({
        username:req.body.username
    })
    console.log("USER EXISTS")
    if (user==null)
    {
        console.log("USER DOES NOT EXIST")
        next(new Error("acest user nu exista"))
    }
    console.log("Userul exista")
    for(const undeSuntem in user.listBills)
    {
        if(req.body.year==undeSuntem.year)
        { 
            if (req.body.month==undeSuntem.month)
            {
                res.json({
                    priceRent:undeSuntem.priceRent,
                    priceGas:undeSuntem.priceGas,
                    priceElectricity:undeSuntem.priceElectricity,
                    priceWater:undeSuntem.priceWater
                })
                return;
            }
        }
    }
    res.json({
        priceRent:0,
        priceGas:0,
        priceElectricity:0,
        priceWater:0
    })
})
router.get("/payRent",async (req,res)=>{
    //plateste chiria
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
        { 
            if (req.body.month==undeSuntem.month) 

            {
                res.send(`pretul este: ${req.price}`)
                undeSuntem.priceRent=req.price
            //poza
            }    
        }   
    }

})
module.exports=router