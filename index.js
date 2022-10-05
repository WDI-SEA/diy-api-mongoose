const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("./models")

const PORT = 8000

app.use(express.json())

app.use("/projects", require("./controllers/projects"))

app.get("/", (req, res) => {
    res.json({message: "API WORKING"})
})

app.listen(PORT, () => {
    console.log(`Broadcasting on port ${PORT}`)
})