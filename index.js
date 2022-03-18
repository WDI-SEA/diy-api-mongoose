const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/musician', require('./controllers/musicianController.js'))
app.use('/albums', require('./controllers/albumsController.js'))

app.listen(8000, ()=>{
    console.log('8000')
})