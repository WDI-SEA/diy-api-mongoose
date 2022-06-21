const express = require('express')
const cors = require('cors')

require('./models')

const app = express()
const PORT = 3000 

app.use(express.json())
app.use(cors())

// routes and controllers 
app.get('/', (req,res) => {
    res.json({ msg: 'Welcome to the blog API' })
})

app.use('/blog', require('./controllers/blog'))
app.use('/comment', require('./controllers/comment'))

// listening on a PORT 

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})