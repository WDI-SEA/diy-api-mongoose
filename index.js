const express = require('express')
const app = express()
const db = require('./models')

app.get('/', (req,res) => {
    res.json({message: 'DIY API Home Route'})
})

app.listen(process.env.PORT || 5000, () => {
    console.log('🌟 connected 🌟')
})