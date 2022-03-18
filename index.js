const express = require("express")
const app = express()
const cors = require("cors")


// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json({ msg: "Welcome to the blog API 👋🏼"})
})

// controller middleware
app.use("/blog", require("./controllers/blog"))
app.use("/comment", require("./controllers/comment"))


app.listen(8000, () => {
    console.log(`Lets Blog!! 📡`)
})