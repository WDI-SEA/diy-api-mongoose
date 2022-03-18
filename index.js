const express = require('express')
const app = express()
const db = require('./models')
const PORT = 8000


// body parser middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(PORT, ()=> {
    console.log(`Server listening at port : ${PORT}`)
})