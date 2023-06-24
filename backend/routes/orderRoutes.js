const express = require('express')
const router = express.Router()
const getOrders = require("../controllers/orderController")

// router.get("/",(req,res)=>{                                                 // only '/' indicates there is ntg more after '/api/products'..
    // res.send("Handling product routes e.g. search for products")            // finally this message would be displayed on the server..
// })

router.get("/",getOrders)

module.exports=router