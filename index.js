//required packages
const express = require('express')
const cors = require('cors')


//app configs
const app = express()
const PORT = 8000
//connect to db
require('./models') //requiring models to connect to the db

//middlewares
// allow 'cross origin resouce sharing'
app.use(cors())
// enable json request body parsing
app.use(express.json())


// routes/controlers
app.get('/', (req,res) => {
    res.json({msg: 'welcome to the blog API'})
})

app.use('/blog', require('./controllers/blog'))

//listen on a port
app.listen(PORT, () => console.log(`Blogging on ${PORT}`))