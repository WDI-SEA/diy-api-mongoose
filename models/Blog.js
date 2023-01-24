const { default: mongoose } = require('mongoose')

 const BlogSchema = new mongoose.Schema({
    title: { type: String, required:true },
    body: { type: String, required:true },
    author: { type: String, required:true },
    tags: { type: [String], required:true }
 }, 
 { timestamps: true})

 module.exports = mongoose.model('Blogs', BlogSchema)