const express = require('express')
const app = express()
const PORT = 8000
require('./models')
app.use(express.json())

app.get('/',function(req,res){
    res.json({message: `Blog API`})
})
app.use('/blogs',require('./controllers/blogs'))
app.listen(PORT, function(req,res){
    console.log('running')
})