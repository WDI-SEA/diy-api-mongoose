const mongoose = require('mongoose')

const CrushSchema = new mongoose.Schema({
    name: String,
    crushName: String,
    content: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Crush', CrushSchema)