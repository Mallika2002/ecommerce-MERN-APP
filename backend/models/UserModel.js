const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        reuiqred:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:String
    },
    address:{
        type:String,
    },
    country:{
        type:String,
    },
    zipcode:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:String,
        required:true,
        default:false,
    },
},{
    timestamps:true,
})

const User = mongoose.model("User",userSchema)

module.exports=User