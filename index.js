const express = require('express')
const app = express()
const db = require('./models')

app.get('/', (req, res) => {
    res.json({message: 'server home route'})
})

//body parser middleware 
app.use(express.urlencoded({extended: false}))

app.use('/blog', require('./controllers/blog.js'))