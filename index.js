const express = require('express')
const app = express()
const db = require ('./models')

//body parser middleware
app.use(express.urlencoded({extended:false}))

//controller middleware
app.use('/dinosaur', require('./controllers/dinosaur'))

app.get('/', (req, res)=>{
    res.json({message: 'dinosaurs home route'})
})

app.listen(process.env.PORT || 8000, ()=>{
    console.log('it is thursday my dudes')
}) 