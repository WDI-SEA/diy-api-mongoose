const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    header: String,
    content: String,
    //
    blog : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Comment', commentSchema)