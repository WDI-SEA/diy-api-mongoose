const db = require('../models')
const express = require('express')
const router = express.Router()

// GET /blog (index)
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})
// GET /blog (index)-- using .then
// router.get('/', (req, res) => {
//     db.Blog.find({})
//       .then(blogs => res.json(blogs))
//       .catch(console.log)
// })

// POST /blog (create a blog)
router.post('/', async (req, res) => {
    try {
        const createdBlog = await db.Blog.create(req.body)
        res.status(201).json(createdBlog)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})
// POST /blog (create a blog) using .then
// router.post('/', (req, res) => {
//     // create blog with req.body
//     db.Blog.create(req.body)
//       .then(newBlog => {
//         // send the newloy created blog back/redirect
//         res.json(newBlog)
//       })
//       // handle an error
//       .catch(console.log)
//   })

// GET /blog/:id (show- read a single blog @ id)
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        // const { id } = req.params
        const foundBlog = await db.Blog.findById(id)
        if (!foundBlog) {
            return res.status(404).json({ message: 'blog not found' })
        } else {
            res.json(foundBlog)
        }
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})
// // GET /blog/:id (show- read a single blog @ id) using.then
// router.get('/:id', (req, res) => {
//     db.Blog.findById(req.params.id)
//         .then(foundBlog => {
//             if (!foundBlog) return res.status(404).json({ message: 'blog not found' })
//             res.json(foundBlog)
//         })
//         .catch(error => {
//             if (err.name === 'CastError') return res.status(404).json({ message: 'I cant find that blog, bc the id was malformed' })
//             res.status(503).json({ message: 'server burned down' })
//         })
// })

// PUT /blog/:id (update a single blog @ :id)
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = {
            new: true
        }
        const updatedBlog = await db.Blog.findOneAndUpdate({
            _id: id
        },
        req.body,
        options
        )
        if (!updatedBlog) {
            return res.status(404).json({ message: 'that id is incorrect' })
        } else {
            res.json(updatedBlog)
        }
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})
// PUT /blog/:id (update a single blog @ :id) using .then
// router.put.('/:id', (req, res) => {
//     db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then(updatedBlog => res.json(updatedBlog))
//         .catch(error => {
//             console.log(error)
//             res.status(503).json({ message: 'whoops' })
//         })
// })

// DELETE /blog/:id (delete a blog @ :id)
router.delete('/:id', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: 'it worked! blog has been deleted' })
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})
// DELETE /blog/:id (delete a blog @ :id) using .then
// router.delete('/:id', (req, res) => {
//     db.Blog.findByIdAndDelete(req.params.id)
//     .then(() => res.statusMessage(204))
//     .catch(error => {
//         console.log(error)
//         res.status(503).json({ message: 'database or server room is on fire' })
//     })
// })

// POST /blog/:id/comment (create)
// this needs to be here bc we need the blog id
router.post('/:id/comment', async (req, res) => {
    try {
        const id = req.params.id
        const comment = req.body.content
        const foundBlog = await db.Blog.findById(id)
        foundBlog.comments.push({
            content: comment
        })
        await foundBlog.save()
        res.status(201).json(foundBlog)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

// POST /blog/:id/comment (create) -- codealong solution
// router.post('/:id/comment', async (req, res) => {
//     try {
//         // findtheblog at :id
//         const blog = await db.Blog.findById(req.params.id)
//         // push it to the blog's comment array
//         blog.comments.push(req.body) //push to req.body bc thats where the comment lives
//         // save the blog since its the parent of the comment
//         await blog.save()
//         // send the blog back in the response
//         res.status(201).json(blog)
//     } catch (error) {
//         console.log(error)
//         res.status(503).json({ message: 'error' })
//     }
// })

module.exports = router