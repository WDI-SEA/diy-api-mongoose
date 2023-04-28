const mongoose = require("mongoose");

const dbName = "Blog";
const uri = "mongodb://127.0.0.1/" + dbName;
mongoose.connect(uri);

const db = mongoose.connection;

db.once("open", () => console.log(`mongo is connected on ${db.host}:${db.port} 🤠`));

db.on("error", err => console.log("datacenter failure 🤔", err));

module.exports = {
    Blog: require("./Blog")
}