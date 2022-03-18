const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use('/blog', require('./controllers/blog'))

mongoose.connect('mongodb://localhost/diyApi')

const db = mongoose.connection

db.once('open', () => {
    console.log(`mongoose connected @ ${db.host}:${db.port}`)
})
db.on('error', error => {
    console.log(`oh no! something has happened to the db!`)
    console.log(error)
})

app.use('/blog', require('./controllers/blog'));

app.get('/', (req,res) => {
    res.json({message: 'You made it to the homepage'})
})

app.listen(8000, () => {
    console.log('Now docking at port 8000')
})