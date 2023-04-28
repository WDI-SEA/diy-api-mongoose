//required packes
const express = require("express")
const cors = require("cors")
// app config
const app = express()
const PORT = 8000 
require("./models") // connect to the db

// middleware
// allow cross origin resourses sharing
app.use(cors())
// enable request body parsing for json payloads
app.use(express.json())

// routes and controllers
app.get("/", (req, res) => {
 res.json({ message: "Welcome to the Blogs json API!"})
})

app.use("/blogs", require("./controllers/blogs"))

// listen on a port
app.listen(PORT, console.log(`liseting on PORT ${PORT}`))