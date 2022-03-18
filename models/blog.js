const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2
  },
  title: {
    type: String,
    required: true,
    minLength: 2
  },
  content: {
    type: String,
    required: true
  },
  date: Date
})

module.exports = mongoose.model('Blog', blogSchema)