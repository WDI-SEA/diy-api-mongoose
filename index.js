// require packages
const express = require ('express')
const cors = require('cors')

// config app
const app = express()
const PORT = 8000

// connect db
require('./models')

// middlewares
app.use(cors())
app.use(express.json())

// ROUTES/Controllers

app.get('/', (req,res)=> {
    res.json({ message: 'Welcome to Pokemon TCG Lost Origin API'})
})

app.use('/pokemoncards', require ('./controllers/pokemoncards'))
app.use('/comments', require ('./controllers/comments'))
// listen on a port

app.listen(PORT, ()=> {
    console.log(`Listening to Pokemon screams on port: ${PORT}`)
})