//require pakages 
const express = require('express')
// ???CORS
const cors = require('cors')
// connect ot mongo
require('./models')

const app = express()
//parsing html form request bodies
//app.use(express.urlencoded({extended: false}))
//parse json require bodies
app.use(express.json())
app.use(cors())

//app config/middlewares 
const PORT = 8000

//routes/controllers
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the bounty API' })
})

app.use('/blog', require('./controllers/blog.js'))
app.use('/comment', require('./controllers/comment'))

//listening on the port 
app.listen(PORT, () => console.log(`listening on the PORT, ${PORT}`))