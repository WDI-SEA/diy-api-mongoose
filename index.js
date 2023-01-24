// require packages
const express = require('express');
const cors = require('cors');

// app config
const app = express();
const port = process.env.PORT || 8000

// connect to db
require('./models')

// middleware
    // allow 'cross origin resource sharing
app.use(cors());
// enable json data parsing
app.use(express.json());

// routes/controllers
app.get('/', (res, req) => {
    res.json({message: 'Welcome to the bounties API 👋'})
})

// require the bounties controller
app.use('/cobblog', require('./controllers/blogCRUD'))

// listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
