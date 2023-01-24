const mongoose = require('mongoose');

const dbName = 'cobBlog';
const uri = `mongodb://localhost:27017/${dbName}`;
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`Connected to MongoDB at ${db.host}:${db.port}`))
db.on('error', (error) => console.log(`Database error\n${error}`))

module.exports = {
    Blog: require('./Blog')
}