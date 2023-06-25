const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const port = 5000

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: 'E-commerce Application',
      version: '1.0.0',
      description: 'E-commerce Application API Documentation',
      termsOfService: 'http://example.com/terms/',
      contact: {
        name: 'Mallika Swetha B',
        Number: '+91 8374133625',
        url: "https://www.mallikaswetha.com",
        email: "mallikaswetha2002@gmail.com",
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Local server',
      },
      {
        url: 'http://43.204.171.45:5000/api/',
        description: 'Production server',
      }
    ],
  },
  // ['.routes/*.js']
  apis: ["./controllers/*.js"],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json()) //middleware to parse json data from req.body

const apiRoutes = require('./routes/apiRoutes')

app.get('/', async (req, res, next) => {
    res.json({ message: 'API Running..' })
  })


//mongoDB connection

const connectDB = require("./config/db")
connectDB();

app.use('/api', apiRoutes)                          //if URL starts with /api regardless of post,put,get etc.. it is handled by apiRoutes as defined...
//it is good programming practice to sepearet different routes in different files..

app.use((error, req, res, next) => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
    next(error);
  });

  app.use((error, req, res, next) => {
    if (process.env.NODE_ENV === "development") {
      res.status(500).json({
        message: error.message,
        stack: error.stack,
      });
    } else {
      res.status(500).json({
        message: error.message,
      })
    }
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })