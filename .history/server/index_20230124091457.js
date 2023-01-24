const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000

app.use(cors());
app.use(express.json());

// Routes
app


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
