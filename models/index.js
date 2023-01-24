const mongoose = require('mongoose')

const dbName = 'diy-api'
const uri = 'mongodb://localhost/' + dbName

mongoose.connect(uri, {
  useNewUrlParser: true
})

mongoose.connection.once('open', () => {
  console.log(`Connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}`)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected')
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error: ', err)
})

// Export the models
module.exports = {
  Post: require('./Post')
}
