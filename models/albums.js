const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    title: String,
    tracklistCount: Number,
    released: Number,
    artist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Musician'
    }]
})

module.exports = mongoose.model('Album', albumSchema)