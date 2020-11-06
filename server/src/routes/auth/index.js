const express = require ("express")
//const bcrypt =require ("bcrypt")
//const  {usersModel,databaseUrl} = require ("./tenant/db")

// const mongoose=require("mongoose")
const router = express.Router()

//chirias
const tenantsModule = require('./tenants')
router.use('/tenants', tenantsModule)
//owner
const ownersModule = require('./owners')
router.use('/owners', ownersModule)
//meserias
const workersModule = require('./workers')
router.use('/workers', workersModule)

// // connect to database and set up the schema
// mongoose.connect(databaseUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// });

// // Get the default connection
// let db = mongoose.connection;

// // Open connection
// db.once('open', () => {
//     console.log('Connection to UsersDB open.');
// });

// // Handle potential errors
// db.on('error', console.error.bind(console, "Something went wront with UsersDB.."));

// router.get("/login", (req,res)=>{

//     res.send("suntem in login auth")
// })
// router.get("/signup", (req,res)=>{

//     res.send("suntem in signup auth")
// })
// router.post("/login", async (req,res,next)=>{
//     try {
//         const user=await usersModel.findOne({
//             email:req.body.email
//         })
//         if (user==null)
//         {
//             next(new Error("userul cu aces email nu exista"))
//         }
//         const isPasCorect= await bcrypt.compare(req.body.password, user.password)
//         if(!isPasCorect)
//         {
//             next(new Error("Parola nu este corecta"))
//         }
//         res.send(user.username)
//     } catch (error) {
//         next(error)
//     }
    
// })
// router.post("/signup", async (req,res,next)=>{
    
//     const newUser=new usersModel({
//         fullname : req.body.fullname,
//         username: req.body.username,
//         email: req.body.email,
//         password: await bcrypt.hash(req.body.password,12)
//     })

//     try {
//         await newUser.save()
//         res.send(`am inregistrat userul cu usernameul:${req.body.username}`)    
//     } catch (error) {
//         next(error)
//     }
// })

module.exports=router

