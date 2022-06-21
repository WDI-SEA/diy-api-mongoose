// required packages
const express = require('express')
const cors = require('cors')


//app config/middlewares
const app = express()
const PORT = 8000

// require mongo
require('./models')

//parse json request bodies
    //html form : app.use(express.urlencoded({ extended:false}))
app.use(express.json())
app.use(cors())

// routes/controllers
app.get('/', (req,res)=>{
    res.json({ msg: 'welcome to cars api'})
})

app.use('/cars', require('./controllers/cars'))

//listeen on a port
app.listen(PORT, ()=> console.log(`listeinng on port ${PORT}`))