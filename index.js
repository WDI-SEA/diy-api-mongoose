const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/blog", require("./controllers/blog"));
app.use("/comment", require("./controllers/blog"));

app.get("/", (req, res) => {
  res.json({ msg: "you are here" });
});

app.listen(8000, () => {
  console.log("DIY 8000");
});
