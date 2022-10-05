const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  length: {
    type: Number
  },
  videoUrl: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Video', VideoSchema)