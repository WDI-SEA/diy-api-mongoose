const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/diyApi");
const db = mongoose.connection;

db.once("open", () => {
  console.log(`mongoose connected @ ${db.host}:${db.port} ⛓`);
});

db.on("error", (error) => {
  console.log(`oh no! something has happened to the db ${error}`);
});

console.log("hello from the models folder!");

module.exports.Blog = require("./blog");
