const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({
    title:{type: String},
    author:{type:String},
    body:{type: String}
},{
    timestamps:true
})
module.exports = mongoose.model('Blog',BlogSchema)