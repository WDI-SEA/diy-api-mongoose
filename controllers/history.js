const router = require('express').Router()
const { json } = require('express')
const db = require('../models')

// PUT /history/:id

router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const options = {new: true}
        const updatedHistory = await db.History.findByIdAndUpdate(id, req.body, options)
        res.json(updatedHistory)
    }catch(err){
        res.status(500).json({ msg: 'server error'})
    }
})

// delete /history/:id

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.History.findByIdAndDelete(id)
        res.sendStatus(204)
    }catch(err){
        res.status(500).json({ msg: 'server error'})
    }
})

module.exports = router
