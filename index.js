
const express = require('express');
const cors = require("cors")
const app = express();


app.use(cors())
app.use(express.json())
const port = process.env.PORT || 8000;
app.use(express.json());



app.get("/", (req,res) =>{
    res.json({message: "Welcome to the blog API"})
})


app.use('/blog', require('./controllers/blog'));

app.listen(port, () => console.log(`Server started on port ${port}`));
