// required packages
const express = require('express')

// connect to mongo
require('./models')
// app config/middlewares
const app = express()
const PORT = 8000
// parse json request bodies
app.use(express.json())

// routes/controllers
app.get('.',(req, res) => {
    res.json({ msg: 'DIY API'})
})

// app.use('/bounties', require('./controllers/'))

// listening on a port
app.listen(PORT, () => console.log('Listening on port', PORT))