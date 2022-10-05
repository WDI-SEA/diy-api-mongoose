const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/diy-api-mongoose';
mongoose.connect(uri);

const db = mongoose.connection;

// connection success
db.once('open', () => console.log(`mongoDB connected @ ${db.host}:${db.port}`));
// connection failure
db.on('error', err => console.warn('the datacenter is borked', err));
// export all of our mongoose models from this file
module.exports = {
    Blog: require('./Blog'),
};