const mongoose = require('mongoose');

//connect the mangodb database 
const dnName = 'blog';
const uri = 'http://localhost:27017/${dbName}';

mongoose.connect(uri)


const db = mongoose.connection;
db.once('open', () => {
    )
