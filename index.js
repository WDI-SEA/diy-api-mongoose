const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

//controller middleware
//controller middleware
app.use('/blog',require('./controllers/blog'))
app.use('/comment',require('./controllers/comment'))

app.listen(port,()=>{
    console.log(`yall making dem blogs on ${port}`)
})
