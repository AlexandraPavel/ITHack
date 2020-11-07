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
router.post("/payRent",async (req,res,next)=>{
    //plateste chiria
    const user=await tenantsModel.findOne({
        username:req.body.username
    })
    if (user==null)
        {
            next(new Error("acest user nu exista"))
        }
    console.log(`${user}`)    
    for(const undeSuntem in user.listBills)
    {   console.log(`${req.body} COMPAR CU `)
        console.log(`${undeSuntem}`)
        if(req.body.year==user.listBills[undeSuntem].year)
        { 
            if (req.body.month==user.listBills[undeSuntem].month) 
            {
                user.listBills[undeSuntem].priceRent=req.body.price
                await user.save()
                res.send(`pretul este: ${req.body.price}`)
                return
            //poza
            }    
        }   
    }
    res.send("inca nu a venit luna")

})
router.post("/payGas",async (req,res,next)=>{
    //plateste chiria
    const user=await tenantsModel.findOne({
        username:req.body.username
    })
    if (user==null)
        {
            next(new Error("acest user nu exista"))
        }
    console.log(`${user}`)    
    for(const undeSuntem in user.listBills)
    {   console.log(`${req.body} COMPAR CU `)
        console.log(`${undeSuntem}`)
        if(req.body.year==user.listBills[undeSuntem].year)
        { 
            if (req.body.month==user.listBills[undeSuntem].month) 
            {
                user.listBills[undeSuntem].priceGas=req.body.price
                await user.save()
                res.send(`pretul este: ${req.body.price}`)
                return
            //poza
            }    
        }   
    }
    res.send("inca nu a venit luna")

})
router.post("/payWater",async (req,res,next)=>{
    //plateste chiria
    const user=await tenantsModel.findOne({
        username:req.body.username
    })
    if (user==null)
        {
            next(new Error("acest user nu exista"))
        }
    console.log(`${user}`)    
    for(const undeSuntem in user.listBills)
    {   console.log(`${req.body} COMPAR CU `)
        console.log(`${undeSuntem}`)
        if(req.body.year==user.listBills[undeSuntem].year)
        { 
            if (req.body.month==user.listBills[undeSuntem].month) 
            {
                user.listBills[undeSuntem].priceWater=req.body.price
                await user.save()
                res.send(`pretul este: ${req.body.price}`)
                return
            //poza
            }    
        }   
    }
    res.send("inca nu a venit luna")

})
router.post("/payElectricity",async (req,res,next)=>{
    //plateste chiria
    const user=await tenantsModel.findOne({
        username:req.body.username
    })
    if (user==null)
        {
            next(new Error("acest user nu exista"))
        }
    console.log(`${user}`)    
    for(const undeSuntem in user.listBills)
    {   console.log(`${req.body} COMPAR CU `)
        console.log(`${undeSuntem}`)
        if(req.body.year==user.listBills[undeSuntem].year)
        { 
            if (req.body.month==user.listBills[undeSuntem].month) 
            {
                user.listBills[undeSuntem].priceElectricity=req.body.price
                await user.save()
                res.send(`pretul este: ${req.body.price}`)
                return
            //poza
            }    
        }   
    }
    res.send("inca nu a venit luna")

})
router.post("/addMonth",async (req,res,next)=>{
    const user=await tenantsModel.findOne({
        username:req.body.username
    })
    if (user==null)
        {
            next(new Error("acest user nu exista"))
        }
    const newBill={
        year:req.body.year ,  
        month:req.body.month,
        deadline:req.body.year+"-"+req.body.month+"-"+"28",
        priceRent:0,
        priceGas:0,
        priceElectricity:0,
        priceWater:0,
        //url de imagini
        urlRent:" ",
        urlGas:" ",
        urlELectricity:" ",
        urlWater:" "
    }
    console.log(`${user}`)
    user.listBills.push(newBill)
    await user.save()
    console.log(`${user}`)
    res.send("am adaugat o noua luna la chiria ta, sedere placuta")
})
module.exports=router