//required packages
const express = require('express')
const cors = require('cors')

//app config
const app = express()
const PORT = 8000
//connect to db
require('./models')

//middlewares
//allow 'cross origin resource sharing'
app.use(cors())
//enable json request body parsing
app.use(express.json())

//routes/controllers
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to the blog API" })
})

app.use('/blog', require('./controllers/blogs'))

//PORT
app.listen(PORT, () => console.log(`Posting blogs on ${PORT}`))