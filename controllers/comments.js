const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /comment/:id
// router.get('/:id', async (req,res)=> {
//     try{
//         const pokemonCardComments = await db.Comment.findById(req.params.id)

//     }catch(err){
//             console.log(err)
//             res.status(500).json({ message: 'Internal server error'})
//         }
// })

// PUT /comment
router.put('/:id', async (req,res)=> {
    try{
        const updateComment = await db.Comment.findById(req.params.id)
        updateComment.header = req.body.header
        updateComment.content = req.body.content

    }catch(err){
            console.log(err)
            res.status(500).json({ message: 'Internal server error'})
        }
})

// DELETE /comment/:id


module.exports = router