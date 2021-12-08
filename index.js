const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.json({message: 'DIY API Home Route'})
})

app.listen(process.env.PORT || 5000, () => {
    console.log('🌟 connected 🌟')
})