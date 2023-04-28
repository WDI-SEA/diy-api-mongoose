const express = require("express")
const cors = require('cors')

const app = express()
const PORT = 8080
require('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json({ message: 'Welcome to the Chowder cast json API! 😶‍🌫️'})
})
app.use("/characters", require("./controllers/characters.js"))

app.listen(PORT, console.log(`listening on PORT ${PORT} 🌾`))