const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/v1/characters', require('./controllers/character'))

app.get('*', (req, res) => {
    res.status(404).send({message: 'Page Not Found'})
})

app.listen(3000, () => {
    console.log('Port 3000')
})