//require packages 
const express = require('express')
const cors= require('cors')

//app config
const app = express()
const PORT= 8000
require('./models')

//middleware
app.use(cors())//allows us to use cors
app.use(express.json())

//ROUTES AND CONTROLLERS
app.get('/', (req,res)=> {
    res.json('Welcome to the blog-API')
})

app.use('/blogs', require('./controllers/blogs'))



//export 
app.listen(PORT, console.log(`I am listening on port ${PORT} 👂🏽🕺🏾⛓️`))