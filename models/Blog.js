const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

const BlogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    comments: [CommentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model("Blog", BlogSchema)

