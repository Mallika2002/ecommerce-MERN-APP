const express = require('express')
const router = express.Router()
const getUsers = require("../controllers/userController")

// router.get("/",(req,res)=>{                                                 // only '/' indicates there is ntg more after '/api/products'..
    // res.send("Handling product routes e.g. search for products")            // finally this message would be displayed on the server..
// })

router.get("/",getUsers)

module.exports=router