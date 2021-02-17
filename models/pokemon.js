const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    firstType: {
        type: String,
        required: true
    },
    secondType: {
        type: String,
        required: false
    },
    numberCaught: {
        type: Number,
        required: true
    }
});

pokeSchema.methods.sayHello = function() {
    return `Hello! This is a ${this.name}!`
};

const Pokemon = mongoose.model('Pokemon', pokeSchema);

module.exports = Pokemon;