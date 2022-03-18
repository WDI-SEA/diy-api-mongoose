const express = require('express');
const app = express();
require('./model');
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/blog', require('./controllers/blogController'));
app.use('/comment', require('./controllers/commentController'));

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(8000, () => {
	console.log('Mongoose is running');
});
