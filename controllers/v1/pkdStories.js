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







module.exports = router