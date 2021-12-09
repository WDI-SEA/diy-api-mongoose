const router = require('express').Router()
const db = require('../models')

// GET display index
router.get('/', (req,res) => {
    db.Opera.find()
        .then(allOperas => {
            res.status(200).json(allOperas)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'Database asleep?' })
        })
})

// GET display a single opera
router.get('/:id', (req,res) => {
    db.Opera.findOne({_id: req.params.id})
        .then(foundOpera => {
            res.status(200).json(foundOpera)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'Database asleep?' })
        })
})

// POST add an opera
router.post('/', (req,res) => {
    db.Opera.create(req.body)
        .then(createdOpera => {
            res.status(200).json(createdOpera)
        })
        .catch(err => {
            console.log('Error while creating', err)
            if (err.name === 'ValidationError') {
                res.status(406).json({ message: 'Validation error' })
            } else {
                res.status(503).json({ messsage: 'Database or server error' })
            }
        })
})

// PUT update an existing opera
router.put('/:id', (req,res) => {
    db.Opera.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedOpera => {
            res.json(updatedOpera)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'Server Error' })
        })
})

// DELETE remove an opera fromt he db
router.delete('/:id', (req,res) => {
    db.Opera.deleteOne({_id: req.params.id})
        .then(deleted => {
            res.json(deleted)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router