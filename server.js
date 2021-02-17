// Require and create instance of express app and mongoose
const EXPRESS = require('express');
const APP = EXPRESS();
const MONGOOSE = require('mongoose');

// declare Middleware
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());

MONGOOSE.connect('mongodb://localhost/synthLibrary', {useNewUrlParser: true, useUnifiedTopology: true});
const DB = MONGOOSE.connection;

// connection methods
DB.once('open', () => {
  console.log(`🔗 Connected to MongoDB at ${DB.host}:${DB.port}`)
});

DB.on('error', err => {
  console.error(`🤬 Database Error:\n${err}`)
});

// Routes as json

APP.get('/', (req, res) => {
  res.json({ message: '🎹 👻 🎛 '})
});

// app.use /synths

//listen on port
app.listen (3000 || process.env.PORT, () => console.log(`You're listening to the smooth sounds of port ${ 3000 || process.env.PORT}`));