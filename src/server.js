const express = require('express')
const errorHandler = require( './middleware/errorHandler' )
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, function (){
    console.log("Server is running on port " + PORT)
})

/* Basic approach to declare API calls */

// app.get('/', function (req, res) {
//     res.json('Hello World!')
//     console.log(req.headers)
//     res.status(202)
// })

/* Declare API calls with help of some middleware [reference : src/routes/routes.js] */
app.use('/user', require('./routes/routes'))
app.use(errorHandler)