const mongoose = require('mongodb');

const cretureSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	availability_northern: {
		type: String,
	},
	availability_southern: {
		type: String,
	},
	time: {
		type: String,
	},
	isAllDay: {
		type: Boolean,
	},
	isAllYear: {
		type: Boolean,
	},
	location: {
		type: String,
	},
	rarity: {
		type: String,
	},
});
