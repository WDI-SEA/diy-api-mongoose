const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'monbodb://localhost/shows',
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

module.exports.FaveChar = require('./faveChar')