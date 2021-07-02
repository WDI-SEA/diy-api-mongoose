const express = require('express')
require('dotenv').config()

// config app
const app = express()
const PORT = process.env.PORT || 3000

// controllers
app.use('/blog', require('./controllers/blog'))

// routes
app.get('*', (req,res) => {
    res.status(404).send('Not Found')
})


app.listen(PORT, () => console.log(`express listening on :${PORT}`))