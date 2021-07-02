const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('test get /blog')
})

router.post('/', (req,res) => {
    res.send('test post /blog')
})

router.get('/:id', (req,res) => {
    res.send(`test get /blog/:id id=${req.params.id}`)
})

router.put('/:id', (req,res) => {
    res.send(`test put /blog/:id id=${req.params.id}`)
})

router.delete('/:id', (req,res) => {
    res.send(`test delete /blog/:id id=${req.params.id}`)
})

module.exports = router