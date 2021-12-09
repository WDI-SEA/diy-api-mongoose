const express = require('express')
const app = express()
const db = require('./models')

// middleware: body parser
app.use(express.urlencoded({extended:false}))

// middleware
app.use('/blog', require('./controllers/blog'))

app.get('/', (req,res) => {
    res.json({message: 'Blog Home Route'})
})

app.listen(process.env.PORT || 8000, () => {
    console.log('Blogging on port 8000')
})