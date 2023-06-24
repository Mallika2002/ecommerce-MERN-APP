const mongoose = require("mongoose")
const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        default:"default category description",
    },
    image:{
        type:String,
        default:'/images/tablets-category.png',
    },
    attrs:[{key:{type:String},value:[{type:String}]}]
})

categorySchema.index({description:1}) //mongodb will organise categories in ascening order A to Z
const Category = mongoose.model("Category",categorySchema)

module.exports = Category