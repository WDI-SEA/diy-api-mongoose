const router = require('express').Router()
const { comment } = require('../models')
const db = require('../models')

// GET /blogs --list all blog posts
router.get('/', async (req, res) => {
    try {
        // find all blogs
        const blogs = await db.blog.find({})
        // send them to the user
        res.json(blogs)

        console.log("Here's all the blog posts")
    } catch (error) {
        console.warn('🔥🔥🔥🔥🔥🔥 OH NO!', error)
        res.status(500).json({msg: 'server error'})
    }
})

// POST /blogs --add a new blog post
router.post('/', async (req, res) => {
    try {
        // create a new blog post
        const newBlog = await db.blog.create(req.body)
        // show it to user
        res.status(201).json(newBlog)

        console.log('you\'ve created a new blog post')
    } catch (error) {
        console.warn('🔥🔥🔥🔥🔥🔥 OH NO!', error)
        if(error.name === "ValidationError"){
            res.status(400).json({msg: error.message})
        }else{
            res.status(500).json({msg: 'server error'})
        }
    }
})

// GET /blogs/:id --show one blog post
router.get('/:id', async (req, res) => {
    try {
        // get id of specific blog from url params
        console.log(req.params.id)
        const id = req.params.id
        // find specific blog using that id & all comments on it
        const blog = await db.blog.findById(id).populate({
            path: 'comments'
        })
        // send blog back to user
        res.json(blog)

        console.log(`heres the blog with the id of ${id}`)
    } catch (error) {
        console.warn('🔥🔥🔥🔥🔥🔥 OH NO!', error)
        if(error.name === "ValidationError"){
            res.status(400).json({msg: error.message})
        }else{
            res.status(500).json({msg: 'server error'})
        }
    }
})

// POST /blogs/:id/comment -- add comment to blogpost
router.post('/:id/comment', async (req, res) => {
    try {
        // get id of specific blog from url params
        const id = req.params.id
        // find specific blog using that id
        const blog = await db.blog.findById(id).populate({path: "comments"})
        // create new comment from req.body
        // console.log(req.body)
        const newComment = await db.comment.create(req.body)
        newComment.blog = blog.id
        console.log(newComment)
        // add the blog to the comment
        // push it into specific blog's array of comments (not async)
        // console.log(blog.comments)
        blog.comments.push(newComment)
        // save the both documents (async)
        await blog.save()
        await newComment.save()
        // send back blog with comment added
        res.status(201).json({newComment})
        console.log('you have added a comment to the blog')
    } catch (error) {
        console.warn('🔥🔥🔥🔥🔥🔥 OH NO!', error)
        if(error.name === "ValidationError"){
            res.status(400).json({msg: error.message})
        }else{
            res.status(500).json({msg: 'server error'})
        }
    }
})

// PUT /blogs/:id --update one blog post
router.put('/:id', async (req, res) => {
    try {
        // get id of specific blog from url params
        const id = req.params.id
        // tell it to return the updated blog to us
        const options = {new: true}
        // find specific blog using that id & update using the req.body
        const updatedBlog = await db.blog.findByIdAndUpdate(id, req.body, options)
        // send updated blog back to the user
        res.json(updatedBlog)

        console.log('you have updated the blog')
    } catch (error) {
        console.warn('🔥🔥🔥🔥🔥🔥 OH NO!', error)
        res.status(500).json({msg: 'server error'})
    }
})

// DELETE /blogs/:id -- delete one blog post
router.delete('/:id', async (req, res) => {
    try {
        // get id of specific blog from url params
        const id = req.params.id
        // delete that blog from the db
        await db.blog.findByIdAndDelete(id)
        // send no content status
        res.sendStatus(204)
        
        console.log('you deleted this blog successfully')
    } catch (error) {
        console.warn('🔥🔥🔥🔥🔥🔥 OH NO!', error)
        res.status(500).json({msg: 'server error'})
    }
})

module.exports = router