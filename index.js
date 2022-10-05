// required packages
const express = require('express')
const cors = require('cors')
require('./models')

// app configuration
const app = express()
const PORT = 8000

// middleware
app.use(cors())
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my blog"
    })
})

app.use('/blogs', require('./controllers/blogs'))
app.use('/comments', require('./controllers/comments'))

// listen on port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})