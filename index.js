const express = require('express')
const cors = require('cors')

// app config
const app = express()
const PORT = 8000
require('./models')

// middlewares
app.use(cors())
app.use(express.json())

// routes and controllers
app.get("/", (req, res) => {
    res.json({ message: "Welcome"})
})

app.use("/reviews", require("./controllers/reviews.js"))

// listen on a port
app.listen(PORT, console.log(`gimme dat PORT ${PORT}`))