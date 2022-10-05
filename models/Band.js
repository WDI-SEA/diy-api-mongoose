const mongoose = require('mongoose')

const bandSchema = new mongoose.Schema({
    name: {
        type: String
    },
    members: {
        type: String
    },
    genre: {
        type: String
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Band', bandSchema)