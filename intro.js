const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 11300
require('./models')

// important middleware.
app.use(cors())
app.use(express.json())

app.use('/character', require('./controllers/Characters.js'))

app.get('/', (req,res) => {
    res.json({message: 'home reached.'})
})



app.listen(PORT, () => console.log(`welcome to the party @ ${PORT}`))