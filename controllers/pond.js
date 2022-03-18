const db = require('../models')
const router = require('express').Router()

//GET /pond (index) - show all ponds
router.get('/',async (req,res)=>{
    //list all ponds
    try {
        const allPonds = await db.Pond.find({})
        res.json(allPonds)
    } catch (error) {
        console.log(error)
    }
})
//POST /pond (index) add a new pond)
router.post('/', async (req,res)=>{
    try {
        const newPond = await db.Pond.create(req.body)
        res.status(201).json(newPond)
    } catch (error) {
        console.log(error)
    }
    
    res.json({message: `you've hit the post route for the pond`})
})
//GET /pond/:id show one pond
router.get('/:id',async (req,res)=>{
    try {
        const { id } = req.params
        const foundPond = await db.Pond.findById(id)
        res.json(foundPond)
    } catch (error) {
        console.log(error)
    }
})
//PUT /pond/:id update one pond
router.put('/:id',async (req,res)=>{
    try {
        const { id } = req.params
        const options = {new: true}
        const foundPond = await db.Pond.findByIdAndUpdate(id,req.body,options)
        res.json(foundPond)
    } catch (error) {
        console.log(error)
    }

})
//DELETE /pond/:id (index - lists all ponds)
router.delete('/:id',async (req,res)=>{
    try {
        const { id } = req.params
        const foundPond = await db.Pond.findByIdAndDelete(id)
        res.status(204).json({message: 'it worked - the bounty is deleted'})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router