// require packages
const express = require('express')
const cors = require('cors')

// app configuration
// get an instance of express back and define it
const app = express() 
const PORT = 8000

//middlewares
// allow cross origin resource sharing
app.use(cors())
// enable json request body parsing
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json( { message: 'Welcome to the blog API!'})
})

app.use('/blog', require('./controllers/blog'))

// list on a port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}, cheeyyeeahhh dawggg`)
})