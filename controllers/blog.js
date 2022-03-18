const db = require('../models')
const router = require('express').Router()


//  GET
router.get('/', async (req, res) => {
    try {
        // Find All Blogs
        const showAllBlogs = await db.Blog.find({})
        // Respond with json with all of the found blogs
        res.json(showAllBlogs)
    } catch (err) {
        console.log(err)
        res.status(503).json({message: `Database or Server Error at ${err}`})

    }
})

// GET
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
       await db.Blog.findById(id)
            .then(blogPost => {
                if (!blogPost) return res.status(404).json({message: "Bro can't find the blog"})
                res.json(blogPost)
            })
    } catch (err) {
        console.log(err)
        res.status(503).json({message: 'Database or Server Error!'})
    }
})


// POST
router.post('/', async (req, res) => {
    try {
        const createBlog = await db.Blog.create(req.body);
        res.status(201).json(createBlog)
    } catch (err) {
        if (err.name === 'ValidationError'){
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or Server Error!'})
        }
    }
})


// POST COMMENTS
router.post('/:id/comments', async (req, res) => {
    try {
        const createComment = await db.Blog.findById(req.params.id)
        createComment.comments.push(req.body)
        await createComment.save()
        res.status(201).json(createComment)
    } catch (err) {
        if (err.name === 'ValidationError'){
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or Server Error trying to post comments!'})
        }
    }
})

// PUT
router.put('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const options = {new: true}

        const updatedBlog = await db.Blog.findOneAndUpdate({_id: id}, req.body,options)
        if(!updatedBlog) return res.status(404).json({message: 'Incorrect ID'})
        res.json(updatedBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({message: "Computer's fault!"})
    }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.Blog.findByIdAndDelete(id)
        res.status(204).json({message: "Da Blog haz been deleted"})
    } catch (err) {
        console.log(err)
        res.status(503).json({message: 'Something is wrong!'})
    }
})





module.exports = router