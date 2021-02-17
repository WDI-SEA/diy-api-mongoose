const mongoose = require('mongoose');

const widgetSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    widgets: {
        type: Number
    },
    purpose: {
        type: String
    }
}, {
    timestamps: true
});

const Widget = mongoose.model('Widget', userSchema);

module.exports = Widget;