const db = require('../model');
const router = require('express').Router();

// GET - Action -> index, URL -> /blog - list all blogs
router.get('/', async (req, res) => {
	try {
		const blogs = await db.Blog.find({});
		res.json(blogs);
	} catch (error) {
		console.log(error);
	}
});

// POST - Action -> create, URL -> /blog - add a new blog post
router.post('/', async (req, res) => {
	try {
		const createdBlog = await db.Blog.create(req.body);
		res.status(201).json(createdBlog);
	} catch (error) {
		console.log(error);
		if (error.name === 'ValidationError') {
			res.status(406).json({ message: 'Validation Error' });
		} else {
			res.status(503).json({ message: 'Database or server error!' });
		}
	}
});

// GET - Action -> detail/show, URL -> /blog/:id - show one blog post
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const blog = await db.Blog.findById(id);
		res.json(blog);
	} catch (error) {
		console.log(error);
		res.status(503).json({ message: 'blog not found' });
	}
});

// PUT - Action -> update, URL -> /blog/:id - update one blog post
router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const options = { new: true };
		const updatedBlog = await db.Blog.findOneAndUpdate(
			{
				_id: id
			},
			req.body,
			options
		);
		if (!updatedBlog) return res.status(404).json({ message: 'incorrect id' });
		res.json(updatedBlog);
	} catch (error) {
		console.log(error);
	}
});

// DELETE - Action -> delete, URL -> /blog/:id - delete one blog post
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await db.Blog.findByIdAndDelete(id);
		res.send(deleted);
	} catch (error) {
		console.log(error);
		res.status(503).json({ message: 'Something went wrong' });
	}
});

module.exports = router;
