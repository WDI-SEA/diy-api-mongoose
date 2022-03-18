const db = require('../models')
const router = require('express').Router()

// update one comment
router.put('/:id', async(req,res)=> {
    try {        
        const foundBlog = await db.BlogPost.findOne({
            'comments._id' : req.params.id
        })
        console.log(foundBlog)
        const foundComment = foundBlog.comments.id(req.params.id)
        foundComment.set(req.body)
        await foundBlog.save()
        if(!foundBlog) return res.status(404).json({message: `An error occured. Details : ${err}`})
        res.json(foundBlog)
    }catch(err){
        console.log(err)
        res.status(503).json({message: `Ann the Error occcured. Error details: ${err}`})
    }
})
// delete one comment
router.delete('/:id', async (req, res) => {
    try {
        const foundBlog = await db.BlogPost.findOne({
            'comments._id': req.params.id
        })
        foundBlog.comments.id(req.params.id).remove()
        await foundBlog.save()
        if(!foundBlog) return res.status(404).json({message: `An error occured. Details : ${err}`})
        res.json(foundBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({message: `An error occured. Details : ${err}`})
    }
})


module.exports = router