const express = require ("express")
const cors = require ("cors")
const volleyball = require ("volleyball")
// const bodyParser=require("body-parser")

const app=express()
app.use(express.json())
app.use(cors())
app.use(volleyball)

const issuesModule = require('./routes/issues')
app.use('/issues', issuesModule)
const tenantsModule = require('./routes/tenants')
app.use('/tenants', tenantsModule)
const authModule = require('./routes/auth')
app.use('/auth', authModule)


app.get("/home", (req,res) => {

    res.send("Bunaaa")

})
app.post('/home', (req,res)=>{
    
    res.send("suntem in home req ")
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

