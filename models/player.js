const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    partnerships: {
        type: [brandSchema]
    }
    }, 
        {
            timestamps: true
        
})