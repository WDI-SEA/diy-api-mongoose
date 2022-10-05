// require mongoose
const mongoose = require("mongoose")

// define user schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    blogs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
})


// export
module.exports = mongoose.model("User", UserSchema)