const express = require('express');
const cors = require('cors');
require('./models');

const app = express();
const PORT = 8000

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my blog');
});

app.use ('/blogs ', require ('./contr'))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
