const express = require('express');
const Villager = require('../models/villager');
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
	Villager.find({}, (err, villagers) => {
		if (err) {
			console.error(`Error in villagers Index route: ${err}`);
			return res.status(500).json({ error: 'Error in villagers Index route' });
		}
		res.json({ villagers });
	});
});

router.get('/:id', (req, res) => {
	Villager.findById(req.params.id, (err, villager) => {
		if (err) {
			console.error(`Error in villager Detail route: ${err}`);
			return res.status(500).json({ error: 'Error in villager Detail route' });
		}
		res.json({ villager });
	});
});

router.post('/', (req, res) => {
	Villager.create(req.body, (err, villager) => {
		if (err) {
			console.error(`Error in villager Create route: ${err}`);
			return res.status(500).json({ error: 'Error in villager Create route' });
		}
		res.json({ villager });
	});
});

router.put('/:id', (req, res) => {
	Villager.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, villager) => {
			if (err) {
				console.error(`Error in villager Update route: ${err}`);
				return res
					.status(500)
					.json({ error: 'Error in villager Update route' });
			}
			res.json({ villager });
		}
	);
});

router.delete('/:id', (req, res) => {
	Villager.findByIdAndDelete(req.params.id, (err, villager) => {
		if (err) {
			console.error(`Error in villager Delete route: ${err}`);
			return res.status(500).json({ error: 'Error in villager Delete route' });
		}
		res.json({ deletedVillager: villager });
	});
});

module.exports = router;
