const router = require('express').Router()
const db = require('../../models')

router.get('/', (req, res) => {
    db.Wodgets.find()
        .then(wodgets => {
            res.status(200).send(people)
        })
        .catch(err => {
            console.log(`Error in GET /wodgets: ${err}`)
            res.send(503).send({ message: 'Database Asleep?' })
        })
})


router.post('/', (req, res) => {
    db.Wodgets.create(req.body)
        .then(newwodgets => {
            res.status(201).send(newwodgets)
        })
        .catch(err => {
            console.log(`Error in Post /wodgets: ${err}`)
            if (err.name === 'ValidationError') {
                res.status(406).send({ message: 'Validation Error. Your Fault.' })
            }
            else {
                res.status(503).send({ message: "your bad" })
            }
        })
})



router.delete('/:id', (req, res) => {
    db.Wodgets.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).send({ message: "Delete good" })
        })
        .catch(err => {
            console.log(`Error when deleting ONE people ${err}`)
            res.status(503).send({ message: 'serverside bro!' })
        })
})

router.put('/:id', (req, res) => {
    db.Wodgets.findOneAndUpdate({
        _id: req.params.id
    },
        req.body, {
        new: true // < return the bounty after the update
    }
    ).then(updatedwodgets => {
        res.status(200).send(updatedwodgets)
    })
        .catch(err => {
            console.log('error when updating a wodgets the one you know yall?')
            res.status(503).send({ message: 'server error' })
        })
})

module.exports = router