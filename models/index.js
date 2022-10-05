const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1/esports-api-mongoose";
mongoose.connect(uri);

const db = mongoose.connection;
db.once("open", () => console.log(`mongoDB connected on ${db.host}:${db.port}`));
db.on("error", error => console.warn(error));

module.exports = {
    Team: require("./Team")
}
