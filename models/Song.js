const mongoose = require("mongoose")

const SongSchema = new mongoose.Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    rating: {
        type: Number
    },
    notes: {
        type: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("Song", SongSchema)

