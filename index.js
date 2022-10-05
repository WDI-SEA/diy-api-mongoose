//  import the required packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// create an instance of an express app
const app = express()
const PORT = 8000
// connect to database
require('./models/Index')

// middlewares
// allow cross origin resource sharing
app.use(cors())
// enable json request body parsing
app.use(express.json())

//  define express routes???
app.get ('/', (req, res) => {
    res.json({ message: 'Welcome to DIY API '})
})

app.use('/blog', require('./controllers/blog'))

// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})