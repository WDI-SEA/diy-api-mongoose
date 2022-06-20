const express = require("express")
const cors = require("cors")
const chalk = require("chalk")

const app = express()
const PORT = 8000

const isProduction = process.env.NODE_ENV === "production"

app.use(express.json())
app.use(cors())
app.set("etag", isProduction)
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By")
  next()
})

app.use(require("./helpers/requestLogger"))

// ROUTES
app.use("/", (req, res) => {
  res.json("Welcome to the Library")
})

app.listen(PORT, handleListen)

function handleListen() {
  console.log(chalk.magenta(`🎧 Server running on http://localhost:${PORT}`))
}
