const db = require('../models')
// const express = require('express')
// const router = express.Router()
// these two steps combined to become
const router = require('express').Router()

// GET
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})
// // GET - .then version
// router.get('/', (req, res) => {
//     db.Blog.find({})
//         .then(blogs => res.json(blogs))
//         .catch(console.log)
// })

// POST
router.post('/', async (req, res) => {
    try {
        const createdBlog = await db.Blog.create(req.body)
        res.status(201).json(createdBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})
// // POST - .then version
// router.post('/', (req, res) => {
//     db.Blog.create(req.body)
//     .then(createdBlog => {
//         // send the newly created blog back/redirect
//         res.json(createdBlog)
//     })
//     // handle an error
//     .catch(console.log)
// })

// GET
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findById(id)
        if (!foundBlog) {
            return res.status(404).json({ message: 'blog not found 😢'})
        } else {
            res.json(foundBlog)
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})
// // GET - .then version
// router.get('/:id', (req, res) => {
//     db.Blog.findById(req.params.id)
//         .then(foundBlog => {
//             if (!foundBlog) return res.status(404).json({ message: 'blog not found'})
//             res.json(foundBlog)
//         })
//         .catch(err => {
//             if (err.name === 'CastError') return res.status(404).json({ message: 'I cannot find that blog because the id was malfored' })
//             res.status(503).json({ message: 'server burned down' })
//         })
// })


// PUT
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = {
            new: true
        }
        const updatedBlog = await db.Blog.findOneAndUpdate({
            _id: id
        }, req.body, options)
        if (!updatedBlog) {
            return res.status(404).json({ message: 'incorrect id'})
        } else {
            res.json(updatedBlog)
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})
// // PUT - .then version
// router.put('/:id', (req, res) => {
//     db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then(updatedBlog => res.json(updatedBlog))
//         .catch(err => {
//             console.log(err)
//             res.status(503).json({ message: "whoops "})
//         })
// })

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: "Blog Deleted"})
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})
// // DELETE - .then version
// router.delete('/:id', (req, res) => {
//     db.Blog.findByIdAndDelete(req.params.id)
//         .then(() => res.status(204))
//         .catch(err => {
//             console.log(err)
//             res.status(503).json({ message: 'Database or Server Error'})
//         })
// })


// POST
router.post('/:id/comment', async (req, res) => {
    try {
        const id = req.params.id
        const comment = req.body.content
        // console.log(comment)
        // find the blog at :id
        // const foundBlog = await db.Blog.findById(req.params.id) - same as lone below
        const foundBlog = await db.Blog.findById(id)
        // push it to the blog's comment array
        // foundBlog.comments.push(req.body) - this is the same as 3 lines below
        foundBlog.comments.push({
            content: comment
        })
        await foundBlog.save()
        // send the blog back to the response
        res.status(201).json(foundBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

module.exports = router