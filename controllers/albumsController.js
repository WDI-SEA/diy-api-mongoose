const db = require('../models')
const router = require('express').Router()

router.put('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const options = {new:true}
        const foundAlbum = await db.Album.findOneAndUpdate({
            _id: id
        },req.body,options)
        res.json(foundAlbum)
    }catch (err){
        console.log(err)
        res.status(503).json({message:'what youre trying to update did not update'})
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        await db.Album.findByIdAndDelete(req.params.id)
        res.status(204).json({message: 'album deleted'})
    }catch(err){
        console.log(err)
        res.status(503).json({message:'the musician did not delete'})
    }
})

module.exports = router