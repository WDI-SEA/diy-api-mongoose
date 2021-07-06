// req mongoose package
const mongoose = require('mongoose')

// schema
BlogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: Number
    },
    content: {
        type: String
    }
}, {
    timestamp: true
})

// export the schema
module.exports = BlogSchema