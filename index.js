// required packages
const express = require('express')
const cors = require('cors')

// app configuration
const app = express()
const PORT = 8000
// connect to database
require('./models')

// middlewares
// allow cross origin resource sharing (cors)
app.use(cors())
// enable json request body parsing
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Martial Artist Json API 🥋' })
})

app.use('/martialartist', require('./controllers/martialArtist'))

// listen on a port!
app.listen(PORT, () => {
    console.log(`Tuned in to the smooth sounds of port ${PORT}`)
})