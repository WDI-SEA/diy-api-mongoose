const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = {
  Blog: require('./Blog'),
};
