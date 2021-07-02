require('dotenv').config()
// require express
const express = require('express')

// require database
const db = require('./models/')

// connect to database
db.connect()

// configure express
const app = express()
const PORT = process.env.PORT

// configure middlewares
app.use(express.urlencoded({ extended: false }))

// create routes

// app listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})