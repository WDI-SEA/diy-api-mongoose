const mongoose = require('mongoose')

const LegendSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    description:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model('Legend',LegendSchema)
