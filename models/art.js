// import mongoose
const mongoose = require('mongoose')

const artSchema = new mongoose.Schema({
    name: {
        type: String, require: true, minlength: 2, maxlength: 100
    },
    favoriteArtist: {
        type: String, require: true
    },
    favoritePainting: {
        type: String, require: true
    },
    favoriteArtMovement: {
        type: String, require: true
    },
   favoriteMuseum: {
        type: String, require: true
    }
})

module.exports = mongoose.model('art', artSchema)