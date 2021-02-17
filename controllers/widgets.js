const express = require('express');
const Widget = require('../models/widget');
const router = express.Router();

// Widget.create({
//     name: 'test2',
//     widgets: 2,
//     purpose: 'test'
// }, (err, widget) => {
//     if (err) {
//         console.error(`Trouble creating: ${err}`)
//     } else {
//         console.log(`${widget.name} has been created`)
//     }
// })


router.get('/', (req, res) => {
    Widget.find({}, (err, widgets) => {
        if (err) {
            console.error(`Error in widgets Index route: ${err}`);
            return res.status(500).json({ error: 'Error in widgets Index route'});
        }
        res.json({ widgets });
    });
});

router.get('/:id', (req, res) => {
    Widget.findById(req.params.id, (err, widget) => {
        if (err) {
            console.error(`Error in widgets Detail route: ${err}`);
            return res.status(500).json({ error: 'Error in widgets Detail route'});
        }
        res.json({ widget });
    });
});

router.post('/', (req, res) => {
    Widget.create(req.body, (err, widget) => {
        if (err) {
            console.error(`Error in widgets Create route: ${err}`);
            return res.status(500).json({ error: 'Error in widgets Create route'});
        }
        res.json({ widget });
    });
});

router.put('/:id', (req, res) => {
    Widget.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, widget) => {
            if (err) {
                console.error(`Error in widgets Update route: ${err}`);
                return res.status(500).json({ error: 'Error in widgets Update route'});
            }
            res.json({ widgets });
        }
    );
});

router.delete('/:id', (req, res) => {
    Widget.findByIdAndDelete(req.params.id, (err, widget) => {
        if (err) {
            console.error(`Error in widgets Delete route: ${err}`);
            return res.status(500).json({ error: 'Error in widgets Delete route'});
        }
        res.json({ deletedWidget: widget });
    })
})

module.exports = router;