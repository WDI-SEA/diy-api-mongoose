const express = require('express')
const app = express()
const cors = require('cors')

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// controllers
app.use('/blog', require('./controllers/blog'))
// app.use('/comment', require('./controllers/comment.js'))

app.listen(8000, ()=> {
    console.log('DIY API Mongoose')
})