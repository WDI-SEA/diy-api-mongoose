const mongoose = require('mongoose')

const candySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  isChocolate: {
    type: Boolean,
    required: true
  },
  hasNuts: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 100
  },
  price: {
    type: String
  },
  isHealthy: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Candy', candySchema)