const { default: mongoose } = require('mongoose')

 const BlogSchema = new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    author: { type: String },
    tags: { type: [String] }
 }, 
 { timestamps: true})

 module.exports = mongoose.model('Blogs', BlogSchema)