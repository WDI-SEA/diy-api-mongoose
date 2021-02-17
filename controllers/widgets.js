const express = require('express');
const Widget = require('../models/widget');
const router = express.Router();


router.get('/', (req, res) => {
    Widget.find({}, (err, widgets) => {
        if (err) {
            console.error(`Error in widgets Index route: ${err}`);
            return res.status(500).json({ error: 'Error in widgets Index route'});
        }
        res.json({ widgets });
    });
});


module.exports = router;