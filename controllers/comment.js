const db = require('../models')
const router = require('express').Router()

// POST /blog/:id/comment (create)
// already have

// GET /blog/:id (show)
// already have

// PUT /comment/:id (update)
router.put('/id', async (req, res) => {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findOne({
            'comment._id': id
        })
        const updatedComment = foundBlog.comments.id(id)
        if (updatedComment) {
            updatedComment.set(req.body)
            await blog.save()
            res.json(updatedComment)
        } else {
            return res.status(404).json({ message: 'that id is incorrect' })
        }
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

// DELETE /comment/:id (delete)
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findOne({
            'comment._id': id
        })
        const deleteComment = foundBlog.comments.id(id)
        if (deleteComment) {
            deleteComment.remove()
            await blog.save()
            res.json(deleteComment)
        } else {
            return res.status(404).json({ message: 'that id is incorrect' })
        }
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

module.exports = router