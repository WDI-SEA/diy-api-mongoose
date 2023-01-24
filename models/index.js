// reuqire all mongoose package
let mongoose = require('mongoose');

//make a mongo uri and connect to it
let dbName = 'blogApi';
let uri = `mongodb://127.0.0.1/`+ dbName;
mongoose.connect(uri)

// define some success and failure logs
let db = mongoose.connection;

db.once('open', () => {
    console.log(`connection to ${dbName} successful: ${db.port} `)
})

db.on('error', err => console.log('too hot in server', err))

module.exports = {
    Blog: require('./Blog')
}