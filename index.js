const express = require('express')
const db = require('./models')
db.connect()

// configure express app
const app = express()
const PORT = 3000
// request body middleware to fix issues with passcode characters that may be used
// app.use(express.urlencoded({ extended: false}))

// test index route '/' -- return a server message
app.get('/', (req, res) => {
//     res.json({ msg: '👋 Hello, welcome to my Blog API 👋'})
// })

app.get('/blog', (req, res) => {
    res.send({ msg: '👋 Hello, welcome to my Blog API - this is INDEX 👋'})
})

app.post('/blog', (req, res) => {
    // create post here
    res.send({ msg: '👋 Hello, welcome to my Blog API - this is INDEX 👋'})
})

app.listen(PORT, () => console.log(`🎧 Welcome to port ${PORT}! 🎧`))