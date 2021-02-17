const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.character.find()
    .then(characters => {
        res.status(200).send(characters)
    })
    .catch(err => {
        console.log('Error: ' + err)
        res.send('Oops')
    })
})

router.get('/:id', (req, res) => {
    db.character.findById(req.params.id)
    .then(character => {
        res.status(200).send(character)
    })
    .catch(err => {
        console.log('Error: ' + err)
        res.send('Oops')
    })
})

router.post('/', (req, res) => {
    db.character.create(req.body)
    .then(newChar => {
        res.status(201).send(newChar)
    })
    .catch(err => {
        console.log('Error: ' + err)
        res.send('Oops')
    })
})

router.put('/:id',(req, res) => {
    db.character.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true }
        )
    .then(updatedChar => {
        res.status(201).send(updatedChar)
    })
    .catch(err => {
        console.log('Error: ' + err)
        res.send('Oops')
    })
})

router.delete('/:id', (req, res) => {
    db.character.findByIdAndDelete( req.params.id )
    .then(() => {
        res.status(200).send({ message: 'Successfully deleted' })
    })
    .catch(err => {
        console.log('Error: ' + err)
        res.send('Oops')
    })
})

module.exports = router