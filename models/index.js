//setup the mongoose collection
const mongoose = require('mongoose')

//mongo connectionstring
mongoose.connect('mongodb://127.0.0.1/kittiescollection')

//shortcut to the db
const db = mongoose.connection


//eventlisteners
db.once('open', () => {
  console.log(`connected to mongDB at ${db.host}: ${db.port}`)
})

db.on('error', (err) => {
  console.log(`database error: \n ${err}`)
})

module.exports.Kitty = require('./kitty')