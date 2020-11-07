const mongoose = require("mongoose")
const databaseUrl="mongodb://127.0.0.1/hackathon"

const schemaTenants=new mongoose.Schema({

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
    //dif
    ownerID:{
        type: mongoose.Schema.Types.ObjectId
    },
    listIssues:[mongoose.Schema.Types.ObjectId],
    listBills:[{
        year:Number ,  
        month:Number,
        deadline:String,
        priceRent:Number,
        priceGas:Number,
        priceElectricity:Number,
        priceWater:Number,
        //url de imagini
        urlRent:String,
        urlGas:String,
        urlELectricity:String,
        urlWater:String
    }]

})

const tenantsModel=mongoose.model("tenants",schemaTenants)
module.exports={
    databaseUrl,
    tenantsModel
}