// require mongoose package
const mongoose = require('mongoose');
// make a mongo uri and connect to it
const dbName = 'blog-server';
const uri = 'mongodb://127.0.0.1/' + dbName;
mongoose.connect(uri);

// define some success and failure debug logs
const db = mongoose.connection;

// connection successful
db.once('open', () => console.log('mongoDB has connected successfully @ ${db.host}:${db.port}'))

// connection failed
db.on('error', err => console.log(' the datacenter has burned to ground.  we are all doomed.  the end.')) 
// export all models from this file
module.exports = {
    Blog: require('./blog')
}
