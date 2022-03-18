const db = require('../models')
const router = require('express').Router()

// PUT
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = {new: true}
        // Find the Post ID
        const blog = await db.Blog.findOne({'comments._id': id})
        // console.log(updatedComment)
        const updatedComment = blog.comments.id(id)
        if(updatedComment)  {
            updatedComment.set(req.body)
            await blog.save()
            res.json(updatedComment)
        } else {
            return res.status(404).json({message: "Wrong id buddy"})
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({message: "Fail to update the comments!"})
    }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findOne({'comment._id': id})
        const deleteComment = foundBlog.comments.id(id)
        if(deleteComment) {
            deleteComment.remove()
            await foundBlog.save()
            res.json(deleteComment)
        } else {
            return res.status(404).json({message: 'Wrong id buddy'})
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({message: "The comment did not delete!"})
    }
})
module.exports = router