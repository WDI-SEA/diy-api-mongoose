// required packages
const express = require('express')
const cors = require('cors')

// app config
const app = express()
const PORT = 8000
require("./models") // connect to the db

// middlewares
// allow cross origin reesource sharing
app.use(cors())
// enable request body parsing - for json payloads
app.use(express.json())

// routes and controllers
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Blog json API! 🧠" })
})

app.use("/blog", require("./controllers/blog.js"))

// listen on a port
app.listen(PORT, console.log(` 👂 listening on PORT ${PORT}`))