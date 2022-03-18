const mongoose = require('mongoose')

const trainerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hometown: String,
    pokemonsOwned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pokemon"
    }

})

module.exports = mongoose.model('Trainer', trainerSchema)
