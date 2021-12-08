const express = require('express')
const app = express()
// const db = require('./models')

app.use(express.urlencoded({extended:false}))
app.use('/artist', require('./controllers/artist'))

app.get('/', (req, res) => {
    res.json({message: 'Some Musical Arist Home Route'})
})

app.listen(process.env.PORT || 8000, () => {
    console.log('You Are now listening to PORT 8000')
})