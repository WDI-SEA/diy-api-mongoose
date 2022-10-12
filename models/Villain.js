const mongoose = require('mongoose')

const VillainSchema = new mongoose.Schema({
    img_url: { type: String},
    name: { type: String },
    wantedFor: { type: String},
    client: { type: String},
    reward: { type: Number },
    captured: { type: Boolean},
    lastSeen: { type: String },
    alive: { type: Boolean },
}, {
    timestamps: true
})

// exports
module.exports = mongoose.model('Villain', VillainSchema)