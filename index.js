const express = require('express')
const app = express()
// import cors
const cors = require('cors')

// body parser middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) // if (process.env.NODE_ENV != 'production')

// controller
app.use('/blog', require('./controllers/blog'))
app.use('/comment', require('./controllers/comment'))

app.listen(8080, () => {
    console.log('DIY API is running')
})