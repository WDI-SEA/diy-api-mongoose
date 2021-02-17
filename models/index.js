const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/', {
    useUnifiedTopology:true,
    useNewUrlParser:true
})

module.exports.Widget=require('./widget')