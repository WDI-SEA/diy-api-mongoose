const express = require('express')
const app = express()
const db = require('./models')

// body parser
app.use(express.urlencoded({extended:false}))

app.use('/arts', require('./controllers/art'))

app.get('/', (req, res)=>{
    res.json({message: 'Art Server Home Route'})
})
app.listen(process.env.PORT || 8000, ()=>{
    console.log(`On Wednesdays we do 🎨🖌`)
})