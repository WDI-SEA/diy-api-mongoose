const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
