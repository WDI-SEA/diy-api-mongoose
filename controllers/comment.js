const db = require('../models')
const router = require('express').Router()

// PUT
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findOne({
            'comment._id': id
        })
        console.log(foundBlog)
        const foundComment = foundBlog.comments.id(id)
        if (!foundComment) {
            return res.status(404).json({ message: 'incorrect id'})
        } else {
            foundComment.content = req.body.content
            await foundBlog.save()
            res.json(foundComment)
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findOne({
            'comment._id': id
        })
        const foundComment = foundBlog.comments.id(id)
        if (!foundComment) {
            return res.status(404).json({ message: 'incorrect id'})
        } else {
            foundComment.remove()
            await foundBlog.save()
            res.json(foundComment)
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

module.exports = router