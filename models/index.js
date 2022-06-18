const { builtinModules } = require('module')
const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/bloggers'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => {
  console.log(`mongodb connection at ${db.host}:${db.port}`)
})

db.on('error', err => {
  console.warn(err)
})

module.exports = {
  Blog: require('./blog'),
  Comment: require('./comment'),
}
