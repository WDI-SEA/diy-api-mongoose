const mongoose = require('mongoose');

//connect the mangodb database 
const dnName = 'blog';
const uri = `mongodb://127.0.0/${dbName}`;

mongoose.connect(uri)


const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to the database')
});
db.on('error', err => console.log('Error', err));


//export the database
module.exports = db;
