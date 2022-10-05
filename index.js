// required packages
const express = require('express')
const cors = require('cors')

// app configs
const app = express()
const PORT = 8000
// connect to db
require('./models')

// middlewares
// allow cross origin resource sharing (cors)
app.use(cors())
// enable json request body parsing
app.use(express.json())

// controllers/routes
app.use('/expenses', require('./controllers/expenses'))

app.get('/', (req, res) => {
    res.json({ message: 'diy api mongoose'})
})
// listen on PORT

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})
