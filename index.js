const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000
require('./models')

app.use(cors())
app.use(express.json())

app.use('/pokemon', require('./controllers/pokemon'))
app.use('/trainer', require('./controllers/trainer'))

app.get('/', (req, res)=>{
    res.json({message: 'Welcome to the PokeBox'})
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})