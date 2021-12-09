const express = require('express')
const app = express()
const db = require('./models')

//  body parser
app.use(express.urlencoded({extended:false}))

app.use('/poems', require('./controllers/poem'))

app.get('/', (req, res)=>{
    res.json({message: 'Poems Server Home Route'})
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Gorgeous Gorgeous Girls Love Soup')
})
