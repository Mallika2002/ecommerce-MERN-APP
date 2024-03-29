const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) //middleware to parse json data from req.body

const apiRoutes = require('./routes/apiRoutes')

app.get('/',async(req, res, next) => {
    res.json({message: 'API Running..'})
})


//mongoDB connection

const connectDB = require("./config/db")
connectDB();

app.use('/api',apiRoutes)                          //if URL starts with /api regardless of post,put,get etc.. it is handled by apiRoutes as defined...
                                                   //it is good programming practice to sepearet different routes in different files..

app.use((error,req,res,next) => {
    console.log(error)
    next(error)
})

app.use((error,req,res,next) => {
    res.status(500).json({
      message:error.message,
      stack:error.stack})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})