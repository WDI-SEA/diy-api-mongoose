const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/pokemon', require('./controllers/pokes.js'));

mongoose.connect(
    'mongodb://localhost/pokemonTree' ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection

db.once('open', () => {
    console.log(`CONNECTED to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', err => {
    console.error(`🔥Database error :\n${err}`);
});

app.get('/', (req, res) => {
    res.json({message: '🏄🏻‍♂️'})
});

app.listen(3000 || process.env.PORT, () => console.log(`You're listening to the smooth sounds of port ${3000 || process.env.PORT}👾`));
