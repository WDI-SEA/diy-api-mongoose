const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res)=> {
    db.Artist.find()
    .then(foundArtists => {
        res.status(200).json(foundArtists)
    })
    .catch(err => {
        res.status(503).json({message: "Database knocked out"})
    })
})


router.post('/', (req, res) => {
    db.Artist.create(
        {
        name: 'Kehlani',
        topSong: 'Nights Like This',
        albumNums: 6,
        artistLike: 'Jhene Aiko'
    }
    )
    .then(createdArtist => {
        res.status(200).json(createdArtist)
    })
    .catch(err => {
        console.log('Error while creating', err)
        if(err.name === 'ValidationError') {
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or server error'})
        }
    })
 })

 module.exports = router