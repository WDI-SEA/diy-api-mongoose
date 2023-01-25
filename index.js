// required packages
const express = require('express')
const cors = require('cors')

// app config
const app = express()
const PORT = 8000

// connect to db
require('./models') // requiring models to connect

// middlewares
// allow 'cross origin resource sharing'
app.use(cors())
// enable json request body parsing
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to the houseware API 😁"})
})

app.use('/houseware', require('./controllers/housewares'))

// listen on a port for incoming requests
app.listen(PORT, () => console.log(`Hunting Bounties on ${PORT}`))