const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

//controller middleware
app.use('/pond', require('./controllers/pond'))

app.get('/',(req,res)=>{
    res.send('homepage, no real data here sry')
})

app.listen(8000,()=>{
    console.log(`chillin on port 8000`)
})

