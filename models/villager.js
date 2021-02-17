const mongoose = require('mongoose');

const villagerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		personality: {
			type: String,
		},
		birthday: {
			type: String,
		},
		species: {
			type: String,
		},
		gender: {
			type: String,
		},
		image_uri: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Villager = mongoose.model('Villager', villagerSchema);

module.exports = Villager;
