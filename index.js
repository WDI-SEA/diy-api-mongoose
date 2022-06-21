const express = require('express')
const cors = require('cors')

require('./models')

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Home Page rawr')
})

app.use('/superhero', require('./controllers/superhero'))
app.use('/superheroType', require('./controllers/superherotype'))

app.listen(PORT, () => {
    console.log(`Listening in on PORT${PORT}`)
})