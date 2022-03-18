const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({message: 'hello this is the blog post'})
})

router.post('/', (req,res) => {
    res.json({message: 'post page'})
})

module.exports = router