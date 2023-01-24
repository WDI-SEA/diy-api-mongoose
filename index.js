// required packages
const express = require('express')
const cors = require('cors')
require('./models')

// app config
const app = express()
const PORT = 8000

// middlewares
app.use(cors())
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome, blogger 📓' })
})

// URL -- uniform resource locator
app.use('/blogs', require('./controllers/blogs'))

// listen on a port
app.listen(PORT, () => console.log(`blogging on PORT ${PORT}`))