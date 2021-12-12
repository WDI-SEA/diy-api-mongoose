const express = require('express')
const app = express()
const db = require('./models')


app.use('/blogs', require('./controllers/blog'))

app.get('/', (req,res) => {
    res.json({message: 'Hello Wally'})
})

app.listen(8000, () => {
    console.log("server is running");
})