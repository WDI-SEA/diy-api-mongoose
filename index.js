const express = require('express')
const cors = require('cors')

const app = express()
PORT = 8000

require('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the Futbol API'})
})

app.use('/players', require('./controllers/players'))

// listen on a port for incoming requests
app.listen(PORT, () => console.log(`listening on ${PORT}`))