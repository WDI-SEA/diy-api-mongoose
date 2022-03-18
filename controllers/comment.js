const express = require('express')
const  db  = require('../models')
const router = express.Router()

//
router.put('/:id', async (req,res)=>{
    try {
        const blog = await db.Blogger.findOne({
            "comments._id":req.params.id
        })
        
    const comment = await blog.comments.id(req.params.id)

    comment.body=req.body.body
    await blog.save()

    res.json(blog)
       
        
    } catch (error) {
        console.log(error)
        res.status(503).json({message:'Something went wrong. Terribly wrong. '})
        
    }
})
//
router.delete('/:id', async (req,res)=>{
        try {
            const blog = await db.Blogger.findOne({
                "comments._id":req.params.id
            })
            await blog.comments.id(req.params.id).remove()
            blog.save()
            res.json(blog)
    } catch (error) {
        console.log(err)
        res.status(503).json({message:'Something went wrong. Terribly wrong. '})
    }
})
//


module.exports = router