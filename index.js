const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false}))

// Mongoose Stuff
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/faveCharacters')

//shorcut to mongoose.connection object
const db = mongoose.connection

db.once('open', function(){
    console.log(`Connected to MongoDB at ${port}`)
})

db.on('error', function(err){
    console.log(`Database error:${err}`)
})

app.get('/', function(req, res) {
    res.send('Hi')
})

app.listen(3000)