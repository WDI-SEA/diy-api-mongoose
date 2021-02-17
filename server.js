const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Mongoose
mongoose.connect('mongodb://localhost/acnhWidgets', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

// Connection methods
db.once('open', () => {
	console.log(`🔗 Connected to MongoDb at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
	console.error(`Database error : ${err}`);
});

// Route
app.get('/', (req, res) => {
	res.send('landing');
});

// controllers
app.use('/villagers', require('./controllers/villagers'));
app.use('/catchableCretures', require('./controllers/catchableCretures'));

app.listen(3000 || process.env.PORT, () =>
	console.log(
		`You're listening to the smooth sounds of port ${
			3000 || process.env.PORT
		} 💲`
	)
);
