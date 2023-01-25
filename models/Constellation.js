const mongoose = require('mongoose');

const ConstellationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
    englishName: {
        type: String,
        required: true},
    imageURL: {
        type: String,
        required: true},
    hemisphere: {
        type: String,
        required: true}
}, 
{ timestamps: true }
);

module.exports = mongoose.model('Constellation', ConstellationSchema);