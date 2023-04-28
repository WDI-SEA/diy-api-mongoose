const express = require("express")
const router = express.Router()
const db = require("../models")
// GET /character -- READ all characters
router.get('/', async (req, res) => {
    try {
        const characters = await db.Chowder.find({})
        res.json({ results: characters })
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error'})
    }
})
// GET /characters/:id -- READ a specific character
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const foundCharacter = await db.Chowder.findById(id)
        res.json({ result: foundCharacter })
    } catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error'})
    }
})
// POST /characters -- CREATE a character
router.post('/', async (req, res) => {
    try {
        const newCharacter = await db.Chowder.create(req.body)
        res.json({ result: newCharacters})
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error'})
    }
})
// PUT /characters/:id -- Update a specific character 
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updatedCast = await db.Chowder.findByIdAndUpdate( id, req.body, { new: true}
        )
        res.json({ result: updatedCast })
    } catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error'})
    }
})
// DELETE /characters/:id -- DESTROY  a specific character 
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await db.Chowder.findByIdAndDelete(id)
        res.sendStatus(204) // send no content status
    } catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error'})
    }
})

module.exports = router