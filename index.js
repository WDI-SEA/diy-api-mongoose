const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/v1/FaveChars', require('./controllers/v1/characters'))

app.get('*', (req, res) => {
    res.status(404).send({message: 'NOT FOUND!'})
})

app.listen(3000, () =>{console.log('App is listening on Port 3K')})