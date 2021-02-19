const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/genshinCharacters')

// What to listen to, then what to do once it hears that it's been connected (only do this once).
mongoose.connection.once('connected', () => {
    console.log('MongoDB Connected!')
})

mongoose.connection.on('error', (err) => {
    console.log(`Database Error: ${err}`)
})

const Character = require('./models/character')

// Create multiple documents:
// https://stackoverflow.com/questions/15400029/mongoose-create-multiple-documents
const chars = [
    { 
        name: 'Tartaglia',
        vision: 'Hydro',
        ATK: 1703,
        DEF: 1156,
        HP: 21670,
        EM: 44,
        critRate: '52.8%',
        critDamage: '80.35%'
    },
    {
        name: 'Xiao',
        vision: 'Anemo'
    },
    {
        name: 'Mona',
        ATK: 1738,
        DEF: 774,
        HP: 17716,
        EM: 180,
        critRate: '66.5%',
        critDamage: '132.4%'
    },
    {
        name: 'Sucrose',
        ATK: 893,
        DEF: 814,
        HP: 10545,
        EM: 720,
        critRate: '22.9%',
        critDamage: '50.0%'
    }
]

Character.insertMany(chars)
.then( insertedChars => {
    console.log("Data inserted", insertedChars)
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