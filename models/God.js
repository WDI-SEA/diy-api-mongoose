const mongoose = require('mongoose')

const romanVersionSchema = new mongoose.Schema ({
    romanName: {
        type: String
    }
})

const godSchema = new mongoose.Schema({
    name: {
        type: String
    },
    godOf: {
        type: String
    },
    img_url: {
        type: String
    },
    romanVersion: [romanVersionSchema],
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('God', godSchema)