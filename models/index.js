const mongoose = require('mongoose')

const dbName = 'projectDB'

const uri = `mongodb://127.0.0.1/${dbName}`
mongoose.connect(uri)

const db = mongoose.connection
db.once('open', () => {
    console.log(`mongodb connected @ ${db.host}: ${db.port}`)
})
db.on('error', (err) => {
    console.warn('ERROR with MONGOOSE\n', err)
})

module.exports = {
    Project: require('./Project')
}