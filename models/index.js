const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/confections', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

module.exports.Candy = require('./candy')