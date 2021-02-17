const express = require('express');
const CCreture = require('../models/catchableCreture');
const router = express.Router();

router.get('/', (req, res) => {
	CCreture.find({}, (err, cretures) => {
		if (err) {
			console.error(`Error in cretures Index route: ${err}`);
			return res.status(500).json({ error: 'Error in cretures Index route' });
		}
		res.json({ cretures });
	});
});

router.get('/:id', (req, res) => {
	CCreture.findById(req.params.id, (err, creture) => {
		if (err) {
			console.error(`Error in creture Detail route: ${err}`);
			return res.status(500).json({ error: 'Error in creture Detail route' });
		}
		res.json({ creture });
	});
});

router.post('/', (req, res) => {
	CCreture.create(req.body, (err, creture) => {
		if (err) {
			console.error(`Error in creture Create route: ${err}`);
			return res.status(500).json({ error: 'Error in creture Create route' });
		}
		res.json({ creture });
	});
});

router.put('/:id', (req, res) => {
	CCreture.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, creture) => {
			if (err) {
				console.error(`Error in creture Update route: ${err}`);
				return res.status(500).json({ error: 'Error in creture Update route' });
			}
			res.json({ creture });
		}
	);
});

router.delete('/:id', (req, res) => {
	CCreture.findByIdAndDelete(req.params.id, (err, creture) => {
		if (err) {
			console.error(`Error in creture Delete route: ${err}`);
			return res.status(500).json({ error: 'Error in creture Delete route' });
		}
		res.json({ deletedCreture: creture });
	});
});

module.exports = router;
