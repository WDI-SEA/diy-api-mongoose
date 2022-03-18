const db = require('../models')
const router = require('express').Router()

// PUT...(/:id)
router.put('/:id', async (req, res)=> { 
    try {
        const blog = await db.Blog.findOne({
            "comments._id": req.params.id
        })
        const comment = await blog.comments.id(req.params.id)
        comment.content = req.body.content
        await blog.save()
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: "database weren't workin" })
    }
})

// DELETE...(/:id)
router.delete('/:id', async (req, res)=> {
    try {
        const blog = await db.Blog.findOne({
            "comments._id": req.params.id
        })
        await blog.comments.id(req.params.id).remove()
        blog.save()
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ msg: 'error' })
    }
})

module.exports = router