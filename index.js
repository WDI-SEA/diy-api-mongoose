const express = require('express')
const app = express()
const db = require('./models')

app.use(express.urlencoded({extended: false}))

app.use('/blogs', require('./controllers/blog'))

app.get('/', (req,res)=>{
    res.json({message: 'This is my server home route'})
})

app.listen(process.env.Port || 8000, ()=>{
    console.log('My first mongoose listening')
})