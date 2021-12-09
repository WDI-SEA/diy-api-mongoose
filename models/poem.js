//  require mongoose
const mongoose = require('mongoose')

let poemSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    author:{
        type: String,
        required: true
    },
    content:{
        type: String,
    }
})

const Poem = mongoose.model('Poem', poemSchema)
module.exports = Poem