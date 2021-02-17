const mongoose = require('mongoose')

const wodgetsSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    wodgets: {
        type: integer
    }, 
    purpose: {
        type: string
    },
    
})

module.exports = mongoose.model('People', peopleSchema)