const mongoose = require("mongoose")

const dbName = "projectsDb"

const uri = `mongodb://127.0.0.1/${dbName}`
console.log("URI:\n", uri)
mongoose.connect(uri)


const db = mongoose.connection
db.once("open", () => {
    console.log(`mongoDB connected @ ${db.host}:${db.port}`)
})
db.on("error", (err) => {
    console.warn('ERROR WITH MONGOOSE\n', err)
})

module.exports = {
    Project: require("./Project")
}

/**
 * WESTONS WHICH WORKED IMMEDIATELY
db.once('open', () => console.log(`mongoDB connected @ ${db.host}:${db.port} ⛓`))
// connection failure
db.on('error', err => console.warn('🔥 the data center has burned down', err))


 * WHAT ABSOLUTELY WOULD NOT WORK
db.once("once", () => {
    console.log(`mongodb connected @ ${db.host}:${db.port}`)
})
db.on("error", (err) => {
    console.warn("ERROR WITH MONGOOSE \n", err)
})
 */