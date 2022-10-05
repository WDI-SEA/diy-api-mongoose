// require packages
const express = require('express')
const cors = require('cors')

// app.use(express.urlencoded({ extended: false }))

// app config
const app = express()
const PORT = 8000
// connect to database
require('./models')

//middlewares
// allow cross origin resource sharing
app.use(cors())
// enable json request body parsing
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Music Json API 🎸'})
})
app.use('/band', require('./controllers/band'))

// listen on a port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} `)
})

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/recordDatabase')
