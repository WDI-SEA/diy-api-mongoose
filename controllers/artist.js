const router = require('express').Router()
const db = require('../models')

// get route to show all the artist in the db
router.get('/', (req, res)=> {
    db.Artist.find()
    .then(foundArtists => {
        res.status(200).json(foundArtists)
    })
    .catch(err => {
        res.status(503).json({message: "Database knocked out"})
    })
})

//post route to create an artist
router.post('/', (req, res) => {
    db.Artist.create(req.body
        //first artist added for checking
    //     {
    //     name: 'Kehlani',
    //     topSong: 'Nights Like This',
    //     albumNums: 6,
    //     artistLike: 'Jhene Aiko'
    // }
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

 //put route for when editing and artist
 router.put('/:id', (req, res) => {
    db.Artist.findOneAndUpdate({_id: req.params.id}, 
    req.body,
    {new: true})
    .then(updatedArtist => {
        res.json(updatedArtist)
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({message: 'Server Error'})
    })
})

//delete route to delete and artist
router.delete('/:id', (req, res) => {
    db.Artist.deleteOne(
        {_id: req.params.id}
        )
    .then(deletedArtist => {
        res.json(deletedArtist)
    })
    .catch(err => {
        res.status('The artist could not deleted', err)
    })
})

 module.exports = router