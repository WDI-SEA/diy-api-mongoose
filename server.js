const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect('mongodb://localhost/pets', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db= mongoose.connection

db.once('open', () =>{
    console.log(`🔗 connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error', (err) =>{
    console.error(`🔥 Database error:\n${err}`)
})

app.get('/', (req, res) =>{
    res.json({message: '🐈 🐶'})
})

app.listen(3000 || process.env.PORT, () => console.log(`👻 You are listening to the smooth sounds of port ${3000 || process.env.PORT}`))