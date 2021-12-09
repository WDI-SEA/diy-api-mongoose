const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const db = require('../models')

//body parser
router.use(express.urlencoded({extended: false}))

//Index GET route
router.get('/', (req, res) => {
    db.Suggestion.find()
    .then(foundSuggestions => {
        res.status(200).json(foundSuggestions)
    })
    .catch(err => {
        console.log('Something went wrong in retrieving suggestions.')
    })
})

//POST route
router.post('/', (req, res) => {
    db.Suggestion.create(req.body)
    .then(createdSuggestion => {
        res.status(200).json(createdSuggestion)
    })
    .catch(err => {
        console.log('Db create error', err)
        if(err.name === 'Validation Error') {
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Db or server error'})
        }
    })
})

//PUT route
router.put('/:id', (req, res) => {
    db.Suggestion.updateOne(req.body)
    .then(updatedSuggestion => {
        res.json(updatedSuggestion)
    })
    .catch(err => {
        console.log(err)
    })
})


//DELETE route (OPTIONAL)
router.delete('/:id', (req, res) => {
    db.Suggestion.deleteOne(req.body)
    .then(deletedSuggestion => {
        res.json(deletedSuggestion)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router