const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false}))

// Mongoose Stuff
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/faveCharacters')

app.get('/', function(req, res) {
    res.send('Hi')
})

app.listen(3000)