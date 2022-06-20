const express = require("express")
const chalk = require("chalk")

const app = express()
const PORT = 3000

const isProduction = process.env.NODE_ENV === "production"

app.set("etag", isProduction)
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By")
  next()
})

// ROUTES
app.use("/", (req, res) => {
  res.json("Welcome")
})

app.listen(PORT, handleListen)

function handleListen() {
  console.log(chalk.magenta(`🎧 Server running on http://localhost/${PORT}`))
}
