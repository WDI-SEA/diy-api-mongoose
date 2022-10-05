const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000
require('./models')

// allow cross origin resource sharing
app.use(cors())

// enable json request body parsing
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ message: "Recipe Journal API"})
})

app.use('/recipe', require('./controllers/recipe') )
app.use('/comment', require('./controllers/comment') )

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
})