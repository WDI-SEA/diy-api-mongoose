const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.use('/', (req, res) => {
    res.json({message: 'Blog Home Route'})
})

app.listen(process.env.PORT || 8000, () => {
    console.log('Listening to port 8000 ✍🏻')
})