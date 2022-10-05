// required packages
const express = require('express')
const cors = require('cors')

// app configuration
const app = express()
const PORT = 8000

// connect to database
require('./models')

// middlewares
// allow cross origin resource sharing
app.use(cors())
// enable json request body parsing
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ message: 'blog dyi api' })
})



// listen on a port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} 🌽`)
})