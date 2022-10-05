const mongoose = require('mongoose')

const TrainerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    pokemon: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }]
},{timestamps: true})

module.exports = mongoose.model('Trainer', TrainerSchema)