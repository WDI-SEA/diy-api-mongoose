const mongoose = require('mongoose');

const ConstellationSchema = new mongoose.Schema({
    name: String,
    englishName: String,
    imageURL: String,
    hemisphere: String,
}, 
{ timestamps: true }
);

module.exports = mongoose.model('Constellation', ConstellationSchema);