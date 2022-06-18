// connect to the mongo db
const mongoose = require("mongoose")

const uri = "mongodb://127.0.0.1/pokemon"
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', ()=>{
    console.log(`mongo db connection @ ${db.host}:${db.port} `)
})

db.on("error", error => {
    console.warn("ERROR 🔥", error)
})

module.exports = {
    Pokemon: require("./pokemon"),
    PokeType: require("./poketype")
}
// export models