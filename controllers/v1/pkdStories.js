const router = require('express').Router()
const db = require('../../models')

router.get('/', (req, res) => {
    db.pkdStory.find()
    .then(response => {
        console.log(response)
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(`Error in GET /pkdStories: ${err}`)
        res.status(503).send({ message: 'Database Asleep?'})
    })
})

// create a new entry
router.post('/', (req, res) => {
    db.pkdStory.create(req.body)
    .then(newStory => {
        res.status(201).send(newStory)
    })
    .catch(err => {
        console.log(`Error in POST /pkdStories: ${err}`)
        if(err.name === 'ValidationError'){
            res.status(406).send({message: 'Validation Error. Your Fault.'})
        }
        else {
            res.status(503).send({message: 'I dunno, something wrong with the DB?'})
        }
    })
})

//show one story's data
router.get('/:id', (req, res) => {
    db.pkdStory.findById(req.params.id)
    .then(story => {
        if(story){
            res.status(200).send(story)
        } else {
            res.status(404).send({message: 'Resource not found'})
        }
    })
    .catch(err => {
        console.log(`error fetching ONE story: ${err}`)
        res.status(503).send({message: 'Service unavailable'})
    })
})

//delete a story
router.delete('/:id', (req, res) => {
    db.pkdStory.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).send({message: 'Entry successfully removed!'})
    })
    .catch(err => {
        console.log(`Error when deleting ONE story: ${err}`)
        res.status(503).send({message: 'Server-side error'})
    })
})

//update a story
router.put('/:id', (req, res) => {
    db.pkdStory.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    })
    .then(updatedStory => {
        res.status(200).send(updatedStory)
    })
    .catch(err => {
        console.log(`error when updating a single story: ${err}`)
        res.status(503).send({message: 'Server Error'})
    })
})

module.exports = router