const express = require('express')
const app = express()
const db = require('./models')

app.use(express.urlencoded({extended:false}))

app.use('/operas', require('./controllers/opera'))

app.get('/', (req,res) => {
    res.json({message: 'opera server home route'})
})

app.listen(process.env.PORT || 8000, () => {
    console.log('LISTENING ON 8000')
})