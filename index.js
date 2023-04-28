const express = require("express")
const cors = require('cors')

const app = express()
const PORT = 8000

require('./models')

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Warzone 2 loadouts API!"})
})

app.use('/loadouts', require("./controllers/loadouts.js"))

app.listen(PORT, console.log(`All cylinders 🔥 on port ${PORT}`))