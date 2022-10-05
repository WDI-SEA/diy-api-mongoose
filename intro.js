const express = require('express')
const app = express()
const PORT = 11300

app.get('/', (req,res) => {
    res.json({message: 'home reached.'})
})

app.use('/character', require('./controllers/Characters.js'))


app.listen(PORT, console.log())