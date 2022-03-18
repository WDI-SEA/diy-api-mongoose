const express = require("express")
const app = express()
const cors = require("cors")


// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// controller middleware
app.use("/blog", require("./controllers/blog"))

app.listen(8000, () => {
    console.log(`Lets Blog!! 📡`)
})