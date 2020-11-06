const express = require ("express")
const cors = require ("cors")
const volleyball = require ("volleyball")
// const bodyParser=require("body-parser")
const app=express()

app.use(cors())
app.use(volleyball)
app.use(express.json())

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

const authModule = require('./routes/auth')
app.use('/auth', authModule)

app.get("/home", (req,res) => {

    res.send("Bunaaa")

})
app.post("home", (req,res)=>{
    
    res.send("suntem in home req  " + req.body.username)
})
app.use((err, req, res, next) => {
    //console.error(err.stack)
    res.status(500).send(err.message)
})
const port = process.env.PORT || 5000
app.listen(port,()=>{
    
    console.log("suntem in listen, portul 5000")
})
// Error handling

