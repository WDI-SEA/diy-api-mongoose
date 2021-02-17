
const mongoose = require('mongoose')

mongoose.connect(  'mongodb://localhost/Wodgets',

{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

module.exports.Wodgets = require('./wodgets')

// process.env.MONGODB_URI ||