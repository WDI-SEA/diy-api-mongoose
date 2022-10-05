// SETS UP EXPRESS SERVER

// req packages
const express = require("express")
// cors: cross origin resource sharing
const cors = require("cors")

// app config
const app = express()
const PORT = 8000

// connect to db
require("./models")

// middleware
app.use(cors())
app.use(express.json())
// app.use("/blog", require("./controllers/blog"))

//routes/controllers
app.get ("/", (req, res)=>{
    res.json({message:"blog api"})
})

// listen on a port
app.listen(PORT, ()=>{
    console.log (`chatting on channel ${PORT} 🥳`)
})