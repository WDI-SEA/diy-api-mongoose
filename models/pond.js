const mongoose = require('mongoose')

const pondSchema = new mongoose.Schema({
    name: String,
    size: String,
    type: String,
    fish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fish'
    }
})

module.exports = mongoose.model('Pond',pondSchema)