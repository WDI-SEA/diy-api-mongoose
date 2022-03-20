const db = require('../models')
const router = require('express').Router()


// list expressoins
router.get('/', async (req,res)=> {
    try {
        const foundExpr = await db.Expr.find({})
        res.json(foundExpr)
    } catch(err) {
        console.log(err)
        res.status(503).json({message: `An error occured. Details : ${err}`})
    }
})

// add a new Expr post
router.post('/', async (req, res)=>{
    try {
        const ExprCreated = await db.Expr.create(req.body)
        ExprCreated.save()
        res.json(ExprCreated)
    } catch(err) {
        console.log(err)
        res.status(503).json({message: `An error occured. Details : ${err}`})
    }
})


// show one Expr post
router.get('/:id', async (req,res)=>{
    try{
        const foundExpr = await db.Expr.findById(req.params.id)
        res.json(foundExpr)

    }catch(err){
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})

// update one Expr post. 
router.put('/:id', async(req, res)=>{
    try{
        const updateExpr = await db.Expr.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {new: true})               
        res.json(updateExpr)
    }catch(err) {
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})

// add comment to Expr post
router.put('/:id/comment', async(req, res)=>{
    try{
        const newComment = await db.Expr.findById(req.params.id)
        newComment.comments.push(req.body)
        await newComment.save()
        res.json(newComment)
    }catch(err) {
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})

// add another meaning to Expr post
router.put('/:id/meaning', async(req, res)=>{
    try{
        const newMeaning = await db.Expr.findById(req.params.id)
        newMeaning.meanings.push(req.body)
        await newMeaning.save()
        res.json(newMeaning)
    }catch(err) {
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})


// delete one Expr post
router.delete('/:id', async(req, res)=> {
    try {
        const foundExpr = await db.Expr.findById(req.params.id)
        if(!foundExpr){
            res.json({message: 'Cannot find Expr post.'})
        }else{
            foundExpr.remove()        
            res.json({message: 'Post deleted.'})
        }        
    } catch(err){
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})


module.exports = router