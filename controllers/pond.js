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
//POST /pond/:id/fish - add a fish to the pond
router.post('/:id/fish', async (req,res)=>{
    console.log(`trying to add a new fish to a pond`)
    try {
        const foundPond = await db.Pond.findById(req.params.id)
        const newFish = await db.Fish.create(req.body)
        newFish.pond = foundPond
        foundPond.fish.push(newFish)
        await newFish.save()
        await foundPond.save()
        res.json({message: `successfully added ${newFish} to ${foundPond}`})
    } catch (error) {
        console.log(error)
    }
    res.json({message: `trying to add a fish to the pond`})
})
//GET /pond/:id show one pond 
/**
 * TODO - and all fish in it
 */
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