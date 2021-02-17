const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/adaptations',
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

module.exports.PkdStory = require('./pkdStory')