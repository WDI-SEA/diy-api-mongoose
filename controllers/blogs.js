//create instance of express router
const express = require('express')
const router = express.Router()
const db = require('../models')

//mount routes onto router

//GET /blog -- respond with all blogs
router.get('/', async (req,res) => {
    try{
        //find all blogs
        const blogs = await db.Blog.find({})
        //send blogs back to database
        res.json(blogs)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: `Internal Server Error @ GET all blogs route`})
    }
})

//GET /blog/:id -- respond with details of a specific blog @ id
router.get('/:id', async (req, res) => {
    try{
        //look up a blog using id from request parameters 
        const blog = await db.Blog.findById(req.params.id)

        //if blog is not found, respond with 404
        if(!blog) {
            res.status(404).json({ msg: `Not found` })
            return //don't want to send headers twice, stop the function 
        }

        res.json(blog)
    } catch(error) {
        console.log(error)
        if(error.kind === 'ObjectId') {
            res.status(404).json({ msg: error.message })
        } else {
            res.status(500).json({ msg: `Internal Server Error @ GET specific id of a blog route`})
        }
    }
})

//POST /blog -- accept payload of data from request body and use it to make a new blog
router.post('/', async(req, res) => {
    try{
        //add a new blog to the database, based on req.body
        const blog = await db.Blog.create(req.body)
        //either redirect to where the client can find the new blog OR send back the new blog
        res.status(201).json(blog)
    } catch(error) {
        console.log(error)
        res.status(500).json({ msg: `Internal Server Error @ POST blog route`})
    }
})

//PUT /blog/:id -- accept payload of data from request body and use it to update a blog @ id
router.put('/:id', async (req, res) => {
    try{
        //get the id from the url 
        //get the data to update in the req.body
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true }) //req.params.id refers to id in the url
        if(!updatedBlog) {
            if(!blog) {
                res.status(404).json({ msg: 'Not Found' })
                return //don't want to send headers twice, stop the function 
            } 
        }
        res.json(updatedBlog)
    } catch(error) {
        console.log(error)
        if(error.kind === 'ObjectId') {
            res.status(404).json({ msg: error.message })
        } else {
            res.status(500).json({ msg: 'Internal Server Error @ PUT blog route' })
        }
    }
})

//DELETE /blog/:id -- destroy a bounty @ id
router.delete('/:id', async (req, res) => {
    try{
        //get id from url and destroy that id
        const deletedBlog = await db.Blog.findByIdAndDelete(req.params.id)
        if(!deletedBlog) {
            res.status(404).json({ msg: 'Not Found' })
                return //don't want to send headers twice, stop the function
        }
        //send status of 204 (no content) and nothing else
        res.sendStatus(204)
    } catch(error) {
        console.log(error)
        if(error.kind === 'ObjectId') {
            res.status(404).json({ msg: error.message })
        } else {
            res.status(500).json({ msg: 'Internal Server Error @ DELETE blog route' })
        }
    }
})

//export the router
module.exports = router 