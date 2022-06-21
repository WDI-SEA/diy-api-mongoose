const express = require('express')
const cors = require('cors')

require('./models')

const app = express()
const PORT = 8000
//parse json request bodies
app.use(express.json())
app.use(cors())

// routes/controllers
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the blog API'})
})

app.use('/blog', require('./controllers/blog'))
app.use('/comment', require('./controllers/comment'))

// listening on a port
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))