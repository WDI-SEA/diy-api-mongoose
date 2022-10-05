const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String},
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }]
})

module.exports = mongoose.model('User', UserSchema)