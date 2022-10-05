const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    summary: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Movie", MovieSchema) 