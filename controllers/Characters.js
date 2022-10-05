const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.json({message: 'characters reached.'})
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.post('/', async (req, res) => {
    try {
        res.json({message: 'character created.'})
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.get('/:id', async (req,res) => {
    try {
        res.json({message: `the character ${req.params.id} was reached!`})
        
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.put('/:id', async (req,res) => {
    try {
        res.json({message: `the character ${req.params.id} was reached! to edit.`})
        
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        res.sendStatus(402)

    } catch(err) {
        console.warn(err)
        res.status(500).json({message: `${req.params.id} still lives.`})
    }
})


module.exports = router