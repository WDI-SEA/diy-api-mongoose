// required packages
const express = require('express');
const cors = require('cors');
// app config
const app = express();
const PORT = 8000;
// connect to db
require('./models') // requiring models to connect the db

// middleware
// allow 'cross origin resource sharing'
app.use(cors());
// enable json request body parsing
app.use(express.json());

// routes/controllers
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the blog API!' });
})

app.use('/blog', require('./controllers/blogCrud'));

// listen on a port for requests
app.listen(PORT, () => console.log(`Hunting Blogs on port ${PORT}!`))