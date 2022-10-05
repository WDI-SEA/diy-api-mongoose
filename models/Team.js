const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name: {
        type: String
    },
    createdOn: {
        type: Date
    },
    region: {
        type: String
    },
    winnings: {
        type: Number
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Team", TeamSchema);
