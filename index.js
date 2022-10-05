const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000

require('./models')

// middlewares
app.use(cors())
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({message: 'Welcome! 🤓'})
})

app.use('/inventors', require('./controllers/inventor'))

// listen on port
app.listen(PORT, () => {
    console.log(`listen on port ${PORT} 🥳`)
})