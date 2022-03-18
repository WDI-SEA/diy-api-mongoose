const express = require('express')
const router = express.Router()
const db = require('../models')

// PUT /comment -- updates a comment @ id
router.put('/:id', async (req,res) => {
    try {
        const blog = await db.Blog.findOne({
            "comment._id":req.params.id
        })
        const comment = await blog.comments.id(req.params.id)

        comment.content = req.body.content
    
        await blog.save()

        res.json(blog)

    } catch(err) {
        console.log(err)
        res.status(503).json({msg: 'error'})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const blog = await db.Blog.findOne({
            "comment._id":req.params.id
        })
        await blog.comments.id(req.params.id).remove()

        res.json(blog)

    } catch(err) {
        console.log(err)
        res.status(503).json({msg: 'error'})
    }
})
module.exports = router