const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie = require('./models/movie');

//Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

mongoose.connect(
    'mongodb://localhost/diy_api',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true  
    }
);
const db = mongoose.connection;

// Connection methods
db.once('open', () => {
    console.log(`🔗 Connected to MongoDB at ${db.host}:${db.port}`)
})
db.on('error', err => {
    console.error(`🔥 Database Error:\n${err}`)
})
// Method 2
// Movie.create({
//   title: 'titanic',
//   year: 1995,
//   producer: Steven,
//   img: ksjhs
// }, (err, movie) => {
//   if (err) return console.error(`💩 Trouble in Create:\n${err}`);
//   console.log(`${movie.name} hath been created`);
// })



// index - get /movie
app.get ('/movies', (req, res) => {
    Movie.find({},(err, movies) => {
        if (err) {
            console.error(`⛑ Error in movies Index route:\n${err}`)
            return res.status(500).json({ error: 'Error in movies Index route' });
        }
        res.json({movies})
    })
})
app.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id, (err, movie) => {
      if (err) {
        console.error(`🔥 Error in movies Detail route:\n${err}`);
        return res.status(500).json({ error: 'Error in movies Detail route' });
      }
      res.json({ movie });
    });
  });


// Create Post/movie
app.post('/movies', (req, res) => {
  Movie.create(req.body, (err, movie) => {
    if (err) {
      console.error(`🔥 Error in movies Create route:\n${err}`);
      return res.status(500).json({ error: 'Error in movies Create route' });
    }
    res.json({ movie });
  });
});


// update
app.put('/movies/:id', (req, res) => {
    Movie.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true },
        (err, movie) => {
          if (err) {
            console.error(`🔥 Error in movies Update route:\n${err}`);
            return res.status(500).json({ error: 'Error in movies Update route' });
          }
          res.json({ movie });
        });
    });


    app.delete('/movies/:id', (req, res) => {
        Movie.findByIdAndDelete(req.params.id, (err, movie) => {
          if (err) {
            console.error(`🔥 Error in movies Delete route:\n${err}`);
            return res.status(500).json({ error: 'Error in movies Delete route' });
          }
          res.json({ deletedMovie: movie });
        })
      })
      


app.listen(3000 || process.env.PORT, () => console.log(`🎧 You're listening to the smooth sounds of port ${3000 || process.env.PORT} 🎧`))