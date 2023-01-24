// require packages
const express = require('express');
const cors = require('cors');

// app config
const app = express();
const PORT = 8000;

// connect to db
require('./models') // requiring models to connectt to the db

// middleware
// allow 'cross-origin resource sharing' requests
app.use(cors());
// enable json request body parsing
app.use(express.json());

// routes/ controllers
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to the blog API"})
})
app.use('/blog', require('./controllers/blogs'))

// listen on a port for incoming requests
app.listen(PORT, () => console.log(`Look at my blogs ${PORT}`))