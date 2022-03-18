const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    title: String,
    tracklistCount: Number,
    released: Number
})

const jazzMusicianSchema = new mongoose.Schema({
    name: String,
    born: String,
    died: String,
    instrument: String,
    albums: [albumSchema]

})

module.exports = mongoose.model('Musician', jazzMusicianSchema)