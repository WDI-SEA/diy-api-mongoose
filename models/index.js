const mongoose = require ('mongoose')

// connect to the db
mongoose.connect('mongodb://127.0.0.1/diyApiMongoose')

// grab the db connection
const db = mongoose.connection

// messages for open 
db.once('open', ()=> {
    console.log(`mongoose connection @ ${db.host}:${db.port}🔘`)
})

// messages for on errors
db.on('error', (err) => {
    console.log(`bd connection error:\n ${err}😢`)
})

console.log('hey it is model folder here!👋')

// export all the models or collections
module.exports.Blog = require('./blog')
module.exports.Comment = require('./comment')