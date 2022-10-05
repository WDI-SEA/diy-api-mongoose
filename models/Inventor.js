const mongoose = require('mongoose')

const InventionSchema = new mongoose.Schema({
    title: {
        type: String
    }, 
    year: {
        type: Number
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

const InventorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    inventions: [InventionSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Inventor', InventorSchema)