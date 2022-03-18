const db = require('../models')
const router = require('express').Router()

// update one comment
router.get('/:id', async(req,res)=> {
    try {
        
        const foundBlog = await db.BlogPost.find({
            'id' : req.params.id
        })
        // foundBlog.comments.find(comment => comment.id == req.params.id)
        console.log(req.params.id)
        console.log(foundBlog.comments)
        // console.log(foundComment)
        // res.json(foundComment)     
    }catch(err){
        console.log(err)
        res.status(503).json({message: `Ann the Error occcured. Error details: ${err}`})
    }
})
// delete one comment


module.exports = router