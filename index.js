const express = require('express')
const app = express()
const cors = require('cors')

// middleware
app.use(express.urlencoded({extended: false}))
// parse json request bodies
app.use(express.json())
// if (process.env.NODE_ENV != 'production')
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the blog API 👋'})
})

// controller middleware
app.use('/blog', require('./controllers/blog'))
app.use('/comment', require ('./controllers/comment'))

app.listen(8000, () => {
    console.log('DIY API 8000')
})