const router = require('express').Router()
const comment = require('../models')
const db = require('../models')

// GET /blog - all blogposts
router.get('/', async(req, res) => {
    try {
        // find all blogposts
        const allBlogs = await db.blog.find({})
        // send all blogposts back to client
        res.json(allBlogs)

        // console.log('all blogs go to heaven', allBlogs)

    } catch(error) {
        console.warn('somethings not working right', error)
        res.status(500).json({ message: 'server error 😢' })
    }
})

// POST /blog - new blogpost
router.post('/', async(req, res) => {
    try {
        // create a new blogpost
        const newPost = await db.blog.create(req.body)
        // success status & return to clients
        res.status(201).json(newPost)

        // console.log('new new new', newPost)

    } catch(error) {
        console.warn('POST ERROR 📄', error)
        if(error.name === "ValidationError"){
            res.status(400).json({ message: error.message })
        }
        res.status(500).json({ msg: 'server error' })
    }
})

// GET /blog/:id - show specific blogpost
router.get('/:id', async(req, res) => {
    try {
        console.log(req.params.id)
        // get the id
        const id = req.params.id
        // get blogpost by id
        const blog = await db.blog.findById(id).populate({ path: 'comments' })
        // send back to client
        res.json(blog)
        console.log(`heres the blogpost with the id ${id}`)

    } catch(error) {
        if(error.name === "ValidationError"){
            res.status(400).json({ message: error.message })
        }
        console.warn('BLOG ERROR 📝', error)
    }
})

// POST /blog/:id/comment - post new comment to specific blog post
router.post('/:id/comment', async(req, res) => {
    try {
        // get id of blogpost from url params & find by id
        const id = req.params.id
        const blog = await db.blog.findById(id)
        // create new comment
        const newComment = await db.comment.create(req.body)
        newComment.blog = blog
        // console.log('new comment', newComment)
        // push new comment into the blogposts' array of comments
        blog.comments.push(newComment)
        // save new comment
        await blog.save()
        await newComment.save()
        // send blog post back to client with comment
        req.json(blog)
        // console.log('comment successful')

    } catch(error) {
        if(error.name === "ValidationError"){
            res.status(400).json({ message: error.message })
        }
        console.warn('COMMENT ERROR 🔇', error)
    }
})

// PUT /blog/:id - update specific blog post
router.put('/:id', async(req, res) => {
    try {
        // get id of blogpost to update
        const id = req.params.id
        // find blogpost and update
        const options = { new: true }
        const updatedBlog = await db.blog.findByIdAndUpdate(id, req.body, options)
        // send updated blogpost back to client
        res.json(updatedBlog)

        // console.log('BLOG update SUCCESS ✅')

    } catch(error) {
        console.warn('UPDATE ERROR ⬆️', error)
        res.status(500).json({ message: 'server error' })
    }
})

// DELETE /blog/:id - delete specific blogpost
router.delete('/:id', async(req, res) => {
    try {
        // get id of blogpost from url params
        const id = req.params.id
        // delete blogpost from the db
        await db.blog.findByIdAndDelete(id)
        // no content status after destruction
        res.sendStatus(204)
        console.log('destruction complete ␡')

    } catch(error) {
        console.warn('DELETE ERROR 🗑', error)
        res.status(500).json({ message: 'Server Error' })
    }
})


module.exports = router