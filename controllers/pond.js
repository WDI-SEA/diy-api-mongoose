const db = require('../models')
const router = require('express').Router()

//GET /pond (index) - show all ponds
router.get('/',(req,res)=>{
    //list all ponds
        res.json(ponds)
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
router.get('/:id',(req,res)=>{
    res.json({message: `you've made it to specific pond`})
})
//PUT /pond/:id update one pond
router.put('/:id',(req,res)=>{
    res.json({message: `you've made it to the update pond route`})
})
//DELETE /pond/:id (index - lists all ponds)
router.delete('/:id',(req,res)=>{
    res.json({message: `attempting a delete`})
})

module.exports = router