const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Welcome to the constellations API')
})

app.use('/constellations', require('./controllers/constellations'));

app.listen(port, () => {console.log(`Showing you awesome constellations on ${port}`)})