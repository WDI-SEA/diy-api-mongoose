require('dotenv').config()
const express = require('express')
const app = express()


//Middleware
app.use('/', require('./controllers/routes'))

app.listen(process.env.PORT || 8000, () => {
    console.log('Listening on port ', process.env.PORT)
})