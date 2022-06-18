const express = require("express")
const cors = require("cors")

require("./models")

const app = express()
const PORT = 9000

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("HOME PAGE")
})

app.use("/pokemon", require("./controllers/pokemon"))
app.use("/poketype", require("./controllers/poketype"))

app.listen(PORT, ()=>{
    console.log(`VEGETA: ITS OVER ${PORT}!?!?!?! 🔥🔥🔥 `)
})