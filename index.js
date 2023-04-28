// required packages
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
require("./models");

// middleware
app.use(cors())
app.use(express.json());

// controllers
app.use("/blogs", require("./controllers/blog"))

// routes
app.get("/", (req, res) => {
    res.json({result: "Welcome to the blog API"})
})

app.listen(PORT, console.log(`We are live on port ${PORT} 🔥`))