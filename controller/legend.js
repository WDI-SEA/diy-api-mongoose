const express = require ('express')
const router = express.Router()
const db = require('../models')

// GET Route for all legends in db
router.get('/',async(req,res)=>{

    try{
        const allLegend = await db.Legend.find({})
        res.json(allLegend)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'internal server error'})
    }
})

//POST Route add a Legend to the db
router.post('/',async(req,res)=>{
    
    try{
        const newLegend = await db.Legend.create(req.body)
        res.status(201).json(newLegend)
    }
    catch{
        console.log(err)
        res.status(500).json({message:'internal server error'})
    }
})

// GET Route for a specific legends in db
router.get('/:id',async(req,res)=>{

    try{
        const legend = await db.Legend.findById(req.params.id)
        res.json(legend)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'internal server error'})
    }
})

// PUT Route to update a specific legends in db
router.put('/:id',async(req,res)=>{

    try{
        const options = {new: true}
        const updatedLegend = await db.Legend.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedLegend)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'internal server error'})
    }
})

// DELETE Route to remove a specific legends in db
router.delete('/:id',async(req,res)=>{

    try{
        await db.Legend.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'internal server error'})
    }
})

module.exports = router