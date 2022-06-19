const router = require('express').Router()
const db = require('../models')

//READ
//GET /blog -- all blogs
router.get('/', async (req, res) => {
    try {
        //find all bounties
        const blogs = await db.Blog.find({})
        //send them to client
        res.json(blogs)
    } catch (error) {
        res.status(500).json({ msg: 'server error' })
    }
})

//GET blog/:id -- spacific blog 
router.get('/:id', async (req, res) => {
    try {
        // get the id of a spacific bounty from the url params 
        console.log(req.params.id)
        const blog = await db.Blog.findById(req.params.id).populate('comments')

        //send bounty back to the client
        res.json(blog)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ msg: 'server error' })
    }
})

//CREATES
//POST /blog -- create a blog
router.post('/', async (req, res) => {
    try {
        // const bounty = new db.Bounty() this is fine 
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch (error) {
        if (error.name === "ValidationError") {

            res.status(400).json({ msg: error.message })
        } else {
            res.status(500).json({ msg: 'server error' })
        }
    }
})

//POST /blog/:id/comment -- add comment to the blog 
router.post('/:id/comment', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        const newComment = await db.Comment.create(req.body)
        newComment.blog = blog

        blog.comments.push(newComment)

        await blog.save()
        await newComment.save()

        res.json(blog)
    } catch (error) {
        console.warn(' OH NO!', error)
        if (error.name === "ValidationError") {
            res.status(400).json({ msg: error.message })
        }
        console.warn(error)
        res.status(500).json({ msg: 'server error' })
    }

})

//UPDATE
router.put('/:id', async (req, res) => {
    try {
        // get id from the url params
        const id = req.params.id
        // search for the id in the db, and update using the req.body
        const options = { new: true } // return the updated bounty to us
        const updatedBlog = await db.Blog.findByIdAndUpdate(id, req.body, options)
        // send the updated bounty back to client
        res.json(updatedBlog)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})

//DELETE
//DELETE blog/:id
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the req.params 
        const id = req.params.id
        // delete that bounty in the db
        await db.Blog.findByIdAndDelete(id)
        // send 'no content' status
        res.sendStatus(204) // was successful -- nothing exists
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})



module.exports = router


