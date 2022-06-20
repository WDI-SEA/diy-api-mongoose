// required packages
const express = require('express')
const cors = require('cors')
// connect to mongo
require('./models')
// app config/middlewares
const app = express()
const PORT = 8000
// parse json request bodies
app.use(express.json())
app.use(cors())

// routes/controllers
app.get('/',(req, res) => {
    res.json({ msg: 'DIY API'})
})

app.use('/cars', require('./controllers/car'))
app.use('/history', require('./controllers/history'))

// listening on a port
app.listen(PORT, () => console.log('Listening on port', PORT))