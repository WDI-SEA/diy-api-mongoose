const router = require('express').Router()
const db = require('../../models')

// http://localhost:3000/v1/characters/
router.get('/', (req, res) => {
    db.Character.find() 
    .then(chars => {
        res.status(200).send(chars)
    })
    .catch(err => {
        console.log(`Error in GET /v1/characters: ${err}`)
        res.status(503).send({ message: 'Database asleep?' })
    })
})

// Error first handling method of writing code: 
// router.get('/', (req, res) => {
//     db.find.Character({}, (err, chars) => {
//         if (err) res.send(503).send({ message: 'DB asleep?'})
//         res.status(200).send(chars)
//     })
// })

// Create a new character!
router.post('/', (req, res) => {
    db.Character.create(req.body)
    .then(newChar => {
        res.status(201).send(newChar)
    }).catch( err => {
        console.log(`Error in POST /v1/characters: ${err}`)
        if (err.name === 'ValidationError') {
            res.status(406).send({ message: 'Validation Error: New character must have a name.' })
        } else {
            res.status(503).send({ message: 'Something wrong with the DB' })
        }
    })
})

// Show each character.
router.get('/:id', (req, res) => {
    db.Character.findById(req.params.id)
    .then( foundChar => {
        if (foundChar) {
            res.status(200).send(foundChar)
        } else {
            res.status(404).send({ message: 'Character not found.'})
        }
    }).catch( err => {
        console.loglog(`Error fetching one character: ${err}`)
        res.status(503).send({ message: 'Find Character service unavailable.' })
    })
})

module.exports = router