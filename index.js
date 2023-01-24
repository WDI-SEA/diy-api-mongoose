//required packages
const express = require('express')
const cors = require('cors')

//app config
const app = express()
const PORT = 8000

//connect to db
require('./models') 

//middlewares
//allow 'cross origin resource sharing'
app.use(cors())
//enable json request body parsing
app.use(express.json())


//routes/controllers
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the blogs API '})
})

app.use('/blogs', require('./controllers/blogs'))

//listen on a port for incoming requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`))