const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Weapon.find()
    .then(weapons => {
        res.status(200).send(weapons)
    })
    .catch(err => {
        console.log(`Error in Get /weapons: ${err}`)
        res.status(503).send({ message: 'Database malfunction'})
    })
})

//create new weapon
router.post('/', (req, res) => {
    db.Weapon.create(req.body)
    .then(newWeapon => {
        res.status(201).send(newWeapon)
    })
    .catch(err => {
        console.log(`Error in POST /weapons:: ${err}`)
        if(err.name === 'ValidationError'){
            res.status(406).send({message: 'Validation Error, Your fault'})
        }
        else {
            res.status(503).send({message: 'database error'})
        }
    })
})

router.delete('/:id', (req, res) => {
    db.Weapon.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).send({message: 'Entry Deleted'})
    })
    .catch(err => {
        console.log(`Error when deleting one weapon ${err}`)
        res.status(503).send({message: 'Server-side error'})
    })
})

router.put('/:id', (req, res) => {
    db.Weapon.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true // returns weapon *after* the update
    })
    .then(updatedWeapon => {
        res.status(200).send(updatedWeapon)
    })
    .catch(err => {
        console.log(`Error when updating a single weapon ${err}`)
        res.status(503).send({message: 'Server Error'})
    })
})

module.exports = router