const mongoose = require('mongoose')

let artistSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true,
    },
    topSong: {
        type: String,
        required: true
    },
    albumNums: {
        type: Number
    },
    artistLike: {
        type:String
    }
})

module.exports = mongoose.model('Arist', artistSchema)