const db = require('../models')
const router = require('express').Router()

//GET /blogs
router.get('/', async (req,res)=>{
    try{
        const allMusicians = await db.Musician.find()
        res.json(allMusicians)
    }catch (error){
        console.log(err)
        res.status(503).json({message:'nothing in the db with that search'})
    }
}) 

router.get('/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const foundMusician = await db.Musician.findById(id)
        res.json(foundMusician)
    } catch (err){
        console.log(err)
        res.status(503).json({message:'search blog post not found'})
    }
})

// POST
router.post('/', async (req,res)=>{
    try{    
        const createdMusician = await db.Musician.create(req.body)
        res.status(201).json(createdMusician)    
    }catch(err){
        console.log(err)
        res.status(503).json({message: 'did not post to db'})
    }
})

router.post('/:id/albums', async (req,res)=>{
    try{  
        const foundMusician = await db.Musician.findById(req.params.id)
        foundMusician.albums.push(req.body)
        await foundMusician.save()
        res.status(201).json(foundMusician)    
    }catch(err){
        console.log(err)
        res.status(503).json({message: 'did not post to db'})
    }
})


//PUT
router.put('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const options = {new:true}
        const foundMusician = await db.Musician.findOneAndUpdate({
            _id: id
        },req.body,options)
        res.json(foundMusician)
    }catch (err){
        console.log(err)
        res.status(503).json({message:'what youre trying to update did not update'})
    }
})

//DELETE
router.delete('/:id', async (req,res)=>{
    try {
        await db.Musician.findByIdAndDelete(req.params.id)
        res.status(204).json({message: 'musician deleted'})
    }catch(err){
        console.log(err)
        res.status(503).json({message:'the musician did not delete'})
    }
})



module.exports = router