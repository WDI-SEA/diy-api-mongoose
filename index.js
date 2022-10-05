const express = require('express')

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my blog"
    })
})

app.use('/blogs', require('./controllers/blogs'))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})