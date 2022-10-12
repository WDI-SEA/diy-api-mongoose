// require packages
const express = require('express')
const cors = require('cors')

// app config
const app = express()
const PORT = 8000

// connect db
require('./models')

// middleware
app.use(cors())
// enable json request body
app.use(express.json())

// routes/controllers
app.use('/villains', require('./controllers/villains'))

// listen on PORT
app.listen(PORT, () => {
    console.log(`listening to evil spels on PORT ${PORT}`)
})
