//req mongoose
const mongoose=require("mongoose")

// define child sub documents schema - in this case will be comments, parent is blog
const CommentSchema = new mongoose.Schema({
    header:{
        type:String
    },
    content:{
        type:String
    },
}, 
    {timestamps:true}
)
// define parent schema: blog
const BlogSchema = new mongoose.Schema({
    header:{
        type:String
    },
    content:{
        type:String
    },
    // imbed sub document
    comments: [CommentSchema],

    blogger:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},
    {timestamps:true}
)


// create and export model from the parent schema
module.exports= mongoose.model("Blog", BlogSchema)