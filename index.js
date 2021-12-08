const express = require('express')
const db = require('./models')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use('/players', require('./controllers/player'))

app.get('/', (req,res) => {
    res.json({message: 'NBA players bio'})
})

app.listen(process.env.PORT || 8000, () => {
    console.log('Listening to the sweet sounds')
})