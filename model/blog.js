const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	content: String
});

const blogSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 100
		},
		title: {
			type: String,
			required: true
		},
		content: String,
		comments: [ commentSchema ]
	},
	{ timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
