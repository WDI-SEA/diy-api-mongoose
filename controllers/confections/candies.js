const router = require('express').Router()
const db = require('../../models/')

router.get('/', (req, res) => {
  db.Candy.find()
  .then(candies => {
    res.status(200).send(candies)
  })
  .catch(err => {
    console.log(`Error in Get /candies: ${err}`)
    res.status(503).send({ message: 'Database not Active'})
  })
})


router.post('/', (req, res) => {
  db.Candy.create(req.body)
  .then(newCandy => {
    res.status(201).send(newCandy)
  })
  .catch(err => {
    console.log(`Error in Post /candies: ${err}`)
    if (err.name === 'ValidationError'){
      res.status(406).send({message: 'Validation Error. This is a User Error'})
    } else {
      res.status(503).send({message: 'Something bad has occurred with the database'})
    }
  })
})

router.put('/:id', (req, res) => {
  db.Candy.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  })
  .then(updateCandy => {
    res.status(200).send(updateCandy)
  })
  .catch(err => {
    console.log(`Error when updating a single candy: ${err}`)
    res.status(503).send({message: 'Server Error'})
  })
})

router.get('/:id', (req, res) => {
  db.Candy.findById(req.params.id)
  .then(candy => {
    if (candy){
      res.status(503).send(candy)
    } else {
      res.status(503).send({message: 'Resource not found.'})
    }
  })
  .catch(err => {
    console.log(`Error fetching one candy: ${err}`)
    res.status(503).send({message: 'Service Unavailable'})
    })
})

router.delete('/:id', (req, res) => {
  db.Candy.findByIdAndDelete(req.params.id)
  .then(() =>{
    res.status(204).send({message: 'Deletion successful!'})
  })
  .catch(err => {
    console.log(`Error when deleting one candy: ${err}`)
    res.status(503).send({message: 'Server-side Error'})
  })
})

router.get('/errorFirst', (req, res) => {
  db.Candy.find({}, (err, candies) => {
    if(err) res.status(503).send({message: 'Database is not active right now.'})
  })
})

module.exports = router