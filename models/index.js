const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/PKDFilms',
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

const db = mongoose.connection;
db.once('open', () => console.log(`connected to mongo at ${db.host}:${db.port}`));
db.on('error', (err) => console.log(`db error: \n${err}`));

module.exports.Adaptation = require('./pkdStory')