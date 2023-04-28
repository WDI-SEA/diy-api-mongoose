// packages
const express = require('express')
const cors = require('cors')
require("./models")

// app config + middleware
const app = express()
const PORT = 8000
app.use(cors())
app.use(express.json())

// routes and controllers
app.get("/", (req, res) => {
    res.json({ message: "Welcome, blogger. You have reached the blog API 📓" })
})

app.use("/blogs", require("./controllers/blogs"))

app.listen(PORT, () => {
    console.log(`Bloggers are Blogging on PORT ${PORT}`)
})