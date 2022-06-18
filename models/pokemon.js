// create schema
const mongoose = require("mongoose")

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // mongoose will throw an error if field not present
    },
    color: {
        type: String
    },
    weight: {
        type: String
    },
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PokeType"
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("Pokemon", pokemonSchema)

// export a bounty model