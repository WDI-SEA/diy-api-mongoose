const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
require("./models");

app.use(cors());    // for future local dev with React app
app.use(express.json());

app.use("/teams", require("./controllers/teams"));

app.get("/", (req, res) => {
    res.json({message: "welcome to esports-api-mongoose"});
});

app.listen(PORT, () => {
    console.log(`diy-api-mongoose running on port ${PORT}`);
})
