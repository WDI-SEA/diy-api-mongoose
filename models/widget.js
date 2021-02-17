const mongoose=require('mongoose')

const widgetSchema=new  mongoose.Schema({
    name:{
        type:String,
        minlength:4,
        maxlength:32
    },
    wodgets:Number,
    purpose:{
        type:String,
        minlength:10,
        maxlength:50
    }
})

module.exports=mongoose.model('Widget',widgetSchema)