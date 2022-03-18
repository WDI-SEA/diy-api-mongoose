const db = require('../models')
const router = require('express').Router()

// update one comment
router.put('/:id', async(req,res)=> {
    try {
        
        const foundComment = await db.BlogPost.comments.id(req.params.id)
        if(!foundBlogPost) {
            res.json({message : `Blog not fouuund.`})
        }else{
            foundComment.comment = req.body
        }
    }catch(err){
        console.log(err)
        res.status(503).json({message: `Ann the Error occcured. Error details: ${err}`})
    }
})
// delete one comment


module.exports = router