const express = require('express')
const app = express()
const db = require('./models')

// body parser
app.use(express.urlencoded({extended:false}))


app.use('/blog', require('./controllers/blog'))

app.get('/', (req, res) => {
    res.json({message: 'Blog Server Home Route'})
})

app.listen(process.env.PORT || 8000, () => {
    console.log('Thats so blog')
})