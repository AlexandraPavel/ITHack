const express = require ("express")
const  {usersModel,databaseUrl} = require ("./db")

const mongoose=require("mongoose")
const router = express.Router()

// connect to database and set up the schema
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Get the default connection
let db = mongoose.connection;

// Open connection
db.once('open', () => {
    console.log('Connection to UsersDB open.');
});

// Handle potential errors
db.on('error', console.error.bind(console, "Something went wront with UsersDB.."));

router.get("/login", (req,res)=>{

    res.send("suntem in login auth")
})
router.get("/signup", (req,res)=>{

    res.send("suntem in signup auth")
})
router.post("/login", (req,res,next)=>{

    //ati reusit sa va conectati, functie
    res.send("v ati conectat")
})
router.post("/signup", async (req,res,next)=>{
    
    console.log("suntem in signup post")
    console.log(`suntem pe userul ${req.body.username}`)   
    const newUser=new usersModel({
        fullname : req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
        
    })
    try {
        console.log("suntem in try")
        await newUser.save()
        console.log("suntem in try")
        
        res.send(`am inregistrat userul cu usernameul:${req.body.username}`)    
    } catch (error) {
        next(error)
    }
})

module.exports=router

