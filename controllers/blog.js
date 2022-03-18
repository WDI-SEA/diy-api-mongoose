const db = require('../models')
const router = require('express').Router()

// CREATE a blog post
router.post('/', async (req, res)=> {
    try {
        const createBlog = await db.Blog.create(req.body)
        res.status(201).json(createBlog)
        // res.json({ message: 'write a blog here'})
    } catch(err) {
        if (err.name === "ValidationError"){
            res.status(406).json({ message: "Validation Error"})
        } else {
            res.status(503).json({ message: 'Db/Server Error' })
        }
    }
})

// CREATE a comment to add to blog post
router.post('/:id/comment', async (req, res)=> {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findById(id)
        foundBlog.comments.push(req.body)
        await foundBlog.save()
        res.json(foundBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Db/Server Error' })
    }
})

// READ all blog posts
router.get('/', async (req, res)=> {
    try {
        const allBlogs = await db.Blog.find({})
        res.json(allBlogs)
    } catch(err) {
        console.log(err)
        res.status(503).json({ message: "database weren't workin" })
    }
})

// READ one blog post
router.get('/:id', async (req, res)=> {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findById(id)
        res.json(foundBlog)
    } catch(err) {
        if (err.name === "CastError") return res.status(404).json({ message: "Can't find the blog because the id was malformed" })
        res.status(503).json({ message: "database weren't workin" })
    }
})

// UPDATE one blog post
router.put('/:id', async (req, res)=> {
    try {
        const id = req.params.id
        // could also use findByIdAndUpdate(req.params.id, req.body, { new: true})
        const editedBlog = await db.Blog.findOneAndUpdate({
            _id: id
        },
        req.body,
        options = {new: true}
        )
        if(!editedBlog) return res.status(404).json({ message: 'incorrect id' })
        res.json(editedBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: "database weren't workin" })
    }
})

// DELETE one blog post
router.delete('/:id', async (req, res)=> {
    try {
        const deleteBlog = await db.Blog.findByIdAndDelete(req.params.id)
        res.status(204)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: "database weren't workin" })
    }
})

module.exports = router