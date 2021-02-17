const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/confections/candies', require('./controllers/confections/candies'))

app.get('*', (req, res) => {
  res.status(404).send({message: 'Page does not exist.' })
})

app.listen(3000, () => (console.log('You are now watching MAD TV!')))