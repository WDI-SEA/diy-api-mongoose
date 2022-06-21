const mongoose = require('mongoose')

const superHeroType = new mongoose.Schema({
    type: {
        villain: false,  
    },
    superhero: {
        type: mongoose.Schema.Types.ObjectId
    }
},{
    timestamps: true
})

module.exports = mongoose.model('SuperheroType', superHeroType)