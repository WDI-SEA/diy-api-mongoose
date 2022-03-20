const db = require('../models')
const router = require('express').Router()

// update one comment
router.put('/:id', async(req,res)=> {
    try {        
        const foundExpr = await db.Expr.findOne({
            'comments._id' : req.params.id
        })        
        const foundComment = foundExpr.comments.id(req.params.id)
        foundComment.set(req.body)
        await foundExpr.save()
        if(!foundExpr) return res.status(404).json({message: `An error occured. Details : ${err}`})
        res.json(foundExpr)
    }catch(err){
        console.log(err)
        res.status(503).json({message: `Ann the Error occcured. Error details: ${err}`})
    }
})
// delete one comment
router.delete('/:id', async (req, res) => {
    try {
        const foundExpr = await db.Expr.findOne({
            'comments._id': req.params.id
        })
        foundExpr.comments.id(req.params.id).remove()
        await foundExpr.save()
        if(!foundExpr) return res.status(404).json({message: `An error occured. Details : ${err}`})
        res.json(foundExpr)
    } catch (err) {
        console.log(err)
        res.status(503).json({message: `An error occured. Details : ${err}`})
    }
})


module.exports = router