const express = require('express')
const cors = require('cors')

// app configuration
const app = express();
const PORT = 8000
require('./models');

// middlewares
app.use(cors());
// enable json request body parsing
app.use(express.json());

// routes/controllers
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Blog API'})
});

app.use('/blog', require('./controllers/blog'));

// listen on a port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT})
})