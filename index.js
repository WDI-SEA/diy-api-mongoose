const express = require('express')
const mongoose = require('mongoose')
const app = express()
// need to require this to access the models/database
const db = require('./models')

// Body Parser middleware
app.use(express.urlencoded({extended:false}))
// Middleware for controllers
app.use('/blog', require('./controllers/blog'))


app.get('/', (req, res) => {
    res.json({message: "Blog Home Route"})
})

// process.env.PORT is for Heroku to put in config
app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port 8000")
})