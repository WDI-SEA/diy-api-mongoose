const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    name: {
        type: String
    },
    img_url: {
        type: String
    }, 
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'God'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Child', childSchema)