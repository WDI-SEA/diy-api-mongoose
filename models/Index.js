// SETS UP MONGOOSE

// req mongoose
const mongoose=require("mongoose")

// connect to uri
const uri= "mongodb://127.0.0.1/blogserver"
mongoose.connect(uri)

// validate db connection
const db = mongoose.connection
db.once("open", ()=>{console.log("mongodb connected @${db.host}:${db.port}🐝")})
db.on("error", err=> console.warn("things have gone wrong", err))

// export models
module.exports={
    Blog: require("./Blog")
}