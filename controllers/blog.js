const express = require ('express')
const db = require('./models')
const router = express.Router()

// GET /blog -- Return all blogs
router.get('/', async (req, res) => {
    try {
        const blog = await db.blog.find({})
        res.json(blogs)
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message : 'internal server error'})
    }
})
// POST /blog/:id -- create a new blog 
router.post('/', async (req, res) => {
    try {
        const newBlog = await db.blog.create(req.body)
        res.json(oneBlog)
    } catch(err){
        console.log(err)
        res.status(500).json({ message : 'internal server error'})
    }
})
// GET /blog/:id -- get a specific blog by id
router.get ('/:id', async (req, res) => {
    try {
        const blogOne = db.blog.findById(req.params.id)
        res.json(blogOne)
    } catch(err){
        console.log(err)
        res.status(500).json({ message : 'internal server error'})
    }
})
// PUT /blog/:id -- update a specific blog by id
router.put('/:id', async (req, res) => {
    try{
        const blogUpdate = db.blog.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(blogUpdate)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message : 'internal server error'})
    }
})
// DESTROY /blog/:id -- delete a specific blog by id
router.delete('/:id', async (req, res) => {
    try{
        const deletedBlog = db.blog.findByIdAndDelete(req.params.id)
        res.json (deletedBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message : 'internal server error'})
    }
})
module.export= router
