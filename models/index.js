const mongoose = require("mongoose");
const dbName = "blog";
const uri = "mongodb://127.0.0.1/" + dbName;
mongoose.connect(uri);

const db = mongoose.connection;

db.once("open", () => console.log(`mongo's running on ${db.host}:${db.port}`));

db.on("error", err => console.log("something went boom:", err))

module.exports = {
    Post: require("./Post")
}