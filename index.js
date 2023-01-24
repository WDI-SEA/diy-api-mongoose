// required pakages
const express = require('express')
const cors =require('cors')

// app config
const app = express()
const PORT = 8000

// connect to db

// middlewares
app.use(cors())
app.use(express.json())

// routes/controllers
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to the Daniel's diy API"})
})

app.use('/blogs', require('./controller/blogs'))

app.listen(PORT, () => console.log(`DIY is over ${PORT}`))