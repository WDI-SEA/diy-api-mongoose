const mongoose = require('mongoose');

dbName = "blogs"
const uri = "mongodb://127.0.0.1/" + dbName
mongoose.connect(uri)

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = {
    Blog: require("./Blog")
}