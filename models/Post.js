const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    author: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Post", PostSchema)