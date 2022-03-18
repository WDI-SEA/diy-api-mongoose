const express = require('express')
const app = express()
const PORT = 8000


// body parser middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/blog', require('./controllers/blog'))

app.listen(PORT, ()=> {
    console.log(`Server listening at port : ${PORT}`)
})