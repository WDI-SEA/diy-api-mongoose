const express = require('express')
const app = express()
const env = require('dotenv')
const db = require('./models')

app.use(express.urlencoded({extended:false}))

app.use('/projects', require('./controllers/projects'))

app.get('/', (req, res)=>{
    res.json({message: 'My Projects Server Home Route'})
})

app.listen(process.env.PORT || 8000, ()=>{
    console.log('we live')
})

