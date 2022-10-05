const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 8000

require("./models")

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: "Welcome to Blog Loblaw's Law Blog!"})
})

app.use("/blog", require("./controllers/blog"))
app.use("/comment", require("./controllers/comment"))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})