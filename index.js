const express = require("express");
const app = express();
const db = require("./models");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/blogs", require("./controllers/blog"));

app.listen(8000, () => {
  console.log("DIY 8000");
});
