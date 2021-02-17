const express = require('express')
const cors = require('cors')

const app = express()

// Middleware
app.use(express.urlencoded( {extended: false})) // Body parser middleware (doesn't take nested objects btw)
app.use(express.json()) // Converts objects into JSON objects.
app.use(cors()) // Allows requests from other origins.

app.use('/v1/characters', require('./controllers/v1/characters'))

app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' }) // Send an object with a 'message' key that gets converted into JSON by express.json()
})

app.listen(3000, () => { console.log('App is listening on Port 3k')})