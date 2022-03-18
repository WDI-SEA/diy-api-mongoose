const express = require('express')
const app = express()

// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// controller middleware
app.use('/blog', require('./controllers/blog'))
app.use('/comment', require ('./controllers/comment'))

app.listen(8000, () => {
    console.log('DIY API 8000')
})