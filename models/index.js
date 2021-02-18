const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/weapons',
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.once('open', () => {
    console.log('connected')
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})

module.exports.Weapon = require('./weapon')