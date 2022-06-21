const mongoose = require('mongoose')

const superheroSchema = new mongoose.Schema ({
    name: {
        type: String,
        
    },
    power: {
        type: String
    },
    age: {
        type: Number
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SuperheroType'
    }
},{ 
    timestamps: true
})

module.exports = mongoose.model('Superhero', superheroSchema)