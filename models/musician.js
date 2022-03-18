const mongoose = require('mongoose')

const jazzMusicianSchema = new mongoose.Schema({
    name: String,
    album: String,
    instrument: String,
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Album'
    }]

})

module.exports = mongoose.model('Musician', jazzMusicianSchema)