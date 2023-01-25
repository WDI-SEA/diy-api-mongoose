const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000
require('./models')
app.use(express.json())
app.use(cors())

app.get('/',function(req,res){
    res.json({message: `Blog API`})
})
app.use('/blogs',require('./controllers/blogs'))
app.listen(PORT, function(req,res){
    console.log('running')
})