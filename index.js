const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/weapons', require('./controllers/weapons'))

app.get('*', (req, res) => {
    res.status(404).send({message: 'This page does not exist'})
})

app.listen(3000, () => {console.log('App listening on port 3k ❤')})