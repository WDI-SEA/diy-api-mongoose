const mongoose = require('mongoose');

const widgetSchema = new mongoose.Schema({
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

const Widget = mongoose.model('Widget', widgetSchema);

module.exports = Widget;