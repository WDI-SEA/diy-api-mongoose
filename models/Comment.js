const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    header: {
        type: String
    },
    content: {
        type: String
    },
    songs: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song"
    }]
}, {
    timestamps: true

})

module.exports = mongoose.model("Comment", CommentSchema)