const db = require('../models')
const router = require('express').Router()

//index
router.get('/', (req, res) => {
    db.Art.find()
        .then(foundTheArts => {
            res.status(200).json(foundTheArts)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'Database asleep?' })
        })
})

// Post new art
router.post('/', (req, res) => {
    db.Art.create(req.body)
        .then(createdArt => {
            res.status(200).json(createdArt)
        })
        .catch(err => {
            console.log('Error while creating', err)
            if (err.name === 'ValidationError') {
                res.status(406).json({ message: 'Validation Error' })
            } else {
                res.status(503).json({ message: 'Database or server error!' })
            }
        })
})

// Update art
router.put('/:id', (req, res) => {
    db.Art.findOneAndUpdate({_id: req.params.id},
    req.body,
        { new: true })
    .then(updatedArt => {
        res.json(updatedArt)
    })
    .catch(err => {
        res.status(503).json({ message: 'Database or server error!' })
    })
})

// Delete art by id
router.delete('/:id', (req, res)=>{
    db.Art.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(204).json({message: 'Deleted collection by id'})
      })
      .catch(err=>{
        console.log(err)
        res.status(503).json({message: 'Database or server error!'})
      })
})
module.exports = router