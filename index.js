// required packages
const express = require('express')
const db = require('./models')
const cors = require('cors')

// app config
const app = express()
const PORT = 8000

// middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/',(req,res)=>{
    console.log('inside ')
    res.json({
        message:'home page 👀'
    })
})
// controllers
app.use('/legend',require('./controller/legend'))

// listen to port
app.listen(PORT,()=>{
    console.log(`port deported ${PORT} 👻`)
})
