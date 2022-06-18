// create schema
const mongoose = require("mongoose")

const pokeTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true, // mongoose will throw an error if field not present
    },
    pokemon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pokemon"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PokeType", pokeTypeSchema)

// export a bounty model