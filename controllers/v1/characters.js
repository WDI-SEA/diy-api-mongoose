const router = require('express').Router()
const db = require('../../models')

router.get('/', (req, res) => {
    db.FaveChar.find()
    .then(characters => {
        res.status(200).send(characters)
    })
    .catch(err => {
        console.log(`Error in GET /characters: ${err}`)
        res.status(503).send({message: 'Database Sleepy Tired?'})
    })
})

router.post('/', (req, res)=> {
    db.FaveChar.create(req.body)
    .then(newFaveChar => {
        res.status(201).send(newFaveChar)
    })
    .catch(err => {
        console.log(`Error in Post /characters: ${err}`)
        if(err.name === 'ValidationError'){
            res.status(406).send({message: 'Validation error, your fault'})
        }else{
            res.status(503).send({message: 'Resource not found!'})
        }
    })
    .catch(err => {
        console.log(`Error fetching One Character: ${err}`)
        res.status(503).send({message: 'Service Unavailable'})
    })
})

router.delete('/:id', (req, res) => {
    db.FaveChar.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).send({message: 'Delete Successful!'})
    })
    .catch(err => {
        console.log('Error when deleting one character')
        res.status(503).send({message: 'Server side error'})
    })
})

router.put('/:id', (req, res) =>{
    db.FaveChar.findByIdAndUpdate({
        id: req.params.id   
    }, req.body, {
        new: true
    })
    .then(updatedFaveChar => {
        res.status(200).send(updatedFaveChar)
    })
    .catch(err => {
        console.log(`Error when updating a single character: ${err}`)
        res.status(503).send({message: 'Server Error'})
    })
})

router.get('/errorFirst', (req, res) => {
    if(err) res.status(503).send({message: 'DB Sleep now!'})
    res.status(200).send(characters)
})

module.exports = router