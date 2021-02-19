// One to many notes: https://github.com/WDI-SEA/mongoose-relationships

const mongoose = require('mongoose')

const talentSchema = new mongoose.Schema({
    character: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    description: String
})

module.exports = mongoose.model('Talent', talentSchema)