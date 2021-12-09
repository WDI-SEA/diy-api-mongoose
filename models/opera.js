const mongoose = require('mongoose')

const operaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    composer: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    premiereYear: {
        type: Number,
        required: true
    },
    seen: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Opera', operaSchema)