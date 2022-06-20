// require packages
const express = require('express')
const cors = require('cors')

// connect to mongo db
require('./models')

// app config & middleware
const app = express()
const PORT = 7000

app.use(express.json())
app.use(cors())

// routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Bloggin Noggin' })
})

app.use('/blog', require('./controllers/blog'))
app.use('/comment', require('./controllers/comment'))

app.listen(PORT, () => console.log(`Bloggin and loggin on port ${PORT}`))