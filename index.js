//required packages
const express = require("express")
const cors = require("cors")

// app config
const app = express()
const PORT = 8000
require ("./models") // connect to the db

//middleswares
//allow cross origin resources sharing
app.use(cors())

//enable request body parsing
app.use(express.json())
//routes and controllers
app.get("/", (req,res) => {
    res.json({ message:"Welcome to the API! 🏴‍☠️" })
})

app.use("/Blog", require("./controllers/blog.js"))

// listen on a port
app.listen(PORT, console.log (`listening on ${PORT} 🌽`))