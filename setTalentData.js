const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/genshinCharacters')

mongoose.connection.once('connected', () => {
    console.log('MongoDB Connected!')
})

mongoose.connection.on('error', (err) => {
    console.log(`Database Error: ${err}`)
})

const Talent = require('./models/talent')

const talents = [
    {
        character: {
            ref: 'Tartaglia'
        },
        name: 'Cutting Torrent',
        description: 'Perform up to 6 consecutive shots with a bow.'
    },
    {
        character: {
            ref: 'Tartaglia'
        },
        name: 'Foul Legacy: Raging Tide',
        description: 'Unleashes a set of weaponry made of pure water, dealing Hydro DMG to surrounding opponents and entering Melee Stance.'
    },
    {
        character: {
            'Tartaglia'
        },
        name: 'Havoc: Obliteration',
        description: 'Performs different attacks based on what stance Tartaglia is in when casting.'
    },
    {
        character: {
            'Mona'
        },
        name: 'Ripple of Fate'
    },
    {
        character: {
            'Mona'
        },
        name: 'Mirror Reflection of Doom'
    },
    {
        character: {
            'Mona'
        },
        name: 'Illusory Torrent'
    },
    {
        character: { 'Mona'
    },
        name: 'Stellaris Phantasm'
    }
]

Talent.insertMany(talents)
.then( insertedTalents => {
    console.log("Data inserted", insertedTalents)
    process.exit()
}).catch( err => {
    console.log(err)
    process.exit()
})

// In terminal:
// brew services start mongodb-communtiy@4.4
// mongo
// show dbs
// use genshinCharacters
// show collections
// db.characters.find().pretty()