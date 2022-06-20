const express = require('express')
const cors = require('cors')
require('./models')

//middleware 
const app = express()
const PORT = 8000

// Parse Json request bodies
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ msg: "Here ye, Here ye, Welcome"})
})

// controllers

app.use('/blog', require('.controller/blog'))
app.use('/comment', require('./controllers/comment'))

app.listen(PORT, () => console.log('listening on port ${PORT}'))