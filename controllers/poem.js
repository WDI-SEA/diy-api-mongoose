const router = require('express').Router()
const db = require('../models')

//  index
router.get('/', (req,res)=>{
    db.Poem.find()
    .then(foundPoems=>{
        res.status(200).json(foundPoems)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).json({message: 'Database sleeping?'})
    })
})

//  post a new poem
router.post('/', (req, res)=>{
    db.Poem.create(req.body)
    .then(createdPoem=>{
        res.status(200).json(createdPoem)
    })
    .catch(err=>{
        console.log('error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or server error!'})
        }
    })
})

//  edit a single bounty
router.put('/:id', (req, res)=>{
    db.Poem.findOneAndUpdate({_id: req.params.id},
    req.body,
    {new:true})
    .then(updatedPoem=>{
        res.json(updatedPoem)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).json({messages: 'Server Error'})
    })
})

module.exports = router