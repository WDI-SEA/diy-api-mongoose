require('dotenv').config()
// require express
const express = require('express')
const cors = require('cors')

// require rowdy
const rowdy = require('rowdy-logger')

// require database
const db = require('./models/')

// connect to database
db.connect()

// configure express
const app = express()
const PORT = process.env.PORT
const rowdyResults = rowdy.begin(app)

// configure middlewares
app.use(cors())
app.use('/blog', require('./controllers/v1/blog'))

// app listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    rowdyResults.print()
})