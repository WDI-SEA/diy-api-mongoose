const mongoose = require("mongoose")
const BlogSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous"
  },
  title:{
    type: String,
    required: true
  },
  updoots: {
    type: Number,
    default: 1
  },
  content: {
    type: String,
    required: true,
    minlength: 2
  }
  
}, {
    timestamps: true
  })

  module.exports = mongoose.model("Blog", BlogSchema)