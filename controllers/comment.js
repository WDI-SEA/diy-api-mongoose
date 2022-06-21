const router = require('express').Router()
const db=require('../models')

router.put('/:id', async (req,res) => {
    try {
        const blog = await db.Blog.findOne({
            "comments.id": req.params.id
        })
        let comment = await blog.comments.id(req.params.id)
        console.log(req.body.content)
        comment.content = req.body.content
        await blog.save()
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: 'server error'})
    }
})
router.delete('/:id', async (req,res) => {
    try {
        const blog = await db.Blog.findOne({
            "comments.id": req.params.id
        })
        const comment = blog.comments.id(req.params.id)
        comment.remove()
        blog.save()
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: 'server error'})
    }
})

module.exports = router