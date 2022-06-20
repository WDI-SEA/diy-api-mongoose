const chalk = require("chalk")
const mongoose = require("mongoose")

const uri = "mongodb://localhost/libraryApi"
mongoose.connect(uri)

const db = mongoose.connection

db.once("open", () =>
  console.log(
    chalk.bgCyan.bold(` 🥭 MongoDB connected: ${db.host}:${db.port} `)
  )
)
db.on("error", (error) =>
  console.log(chalk.bgRed.bold(` Mongo Error: `), error)
)

module.exports = {
  Member: require("./member"),
}
