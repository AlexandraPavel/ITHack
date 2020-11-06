const mongoose = require("mongoose")
const databaseUrl="mongodb://127.0.0.1/hackathon"

const schemaWorkers=new mongoose.Schema({

    fullname:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function(value) {
                let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/
                return regex.test(value);
            }
        } 
    },
    password: { 
        type: String, 
        min: 8, 
        required: true
    },
    listIssues:[mongoose.Schema.Types.ObjectId]

})

const workersModel=mongoose.model("workers",schemaWorkers)
module.exports={

    databaseUrl,
    workersModel
}