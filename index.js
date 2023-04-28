const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 8000
require("./models")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        response: "lobbing law bombs"
    })
})

app.use("/blog", require("./controllers/blog"))

app.listen(PORT, console.log(`bloggin it on port ${PORT}`))