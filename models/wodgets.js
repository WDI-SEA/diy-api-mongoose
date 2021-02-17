const mongoose = require('mongoose')

const wodgetsSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    wodgets: {
        type: Number
    }, 
    purpose: {
        type: String
    },
    
})

module.exports = mongoose.model('Wodget', wodgetsSchema)