// importing express
const express = require('express')
const app = express()
const cors = require('cors')

// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// response 
app.use(cors())

// // controllers middleware
app.use('/blog', require('./controllers/blog'))
// app.use('/comment', require('./controllers/comment'))

// listening port
app.listen(8000, ()=>{
    console.log('blogging on 8000')
})


