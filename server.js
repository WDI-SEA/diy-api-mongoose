const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect(
    'mongodb://localhost/allStarlineup',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
const db = mongoose.connection;

db.once('open', ()=>{
    console.log(`Connected to mongoDB at ${db.host}:${db.port} 🧃 `)
})

db.on('error', err => {
    console.log(`🧨 Database error:\n${err}`)
})

app.get('/', (req, res) => {
    res.json({message: '⚡️ API Connections firing - home route'})
})

app.use('player', require('./controllers/players'))

app.listen(3001, () => console.log ('🎧 listening to port 3001'))