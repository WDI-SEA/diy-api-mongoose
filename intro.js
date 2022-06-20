// Require packages
const express = require("express")
const cors = require("cors")

// App config / middlewares
const app = express()
const PORT = 8000

// Parse json request bodies
app.use(express.json())
app.use(cors())

// Routes / controllers
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the blog API" })
})

app.use("/blog", require("./models/blog"))

// Listening on a port
app.listen(PORT, () => console.log("Listening on port 8000"))
