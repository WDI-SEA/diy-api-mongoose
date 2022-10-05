const mongoose = require ('mongoose')

const uri = 'mongodb://127.0.0.1/diyApi'
mongoose.connect(uri)

const db = mongoose.connection 
db.once('open',()=>{console.log(`connected to mongo @ ${db.host} ${db.port} 👋🏼`)})
db.on('error',(err)=>{console.log(`error in connection ${err} 👨🏽‍🦯`)})

module.exports={
    Legend:require('./Legend')
}