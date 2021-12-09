const express = require('express')
const app = express()
const db = require('./models')

db.Blog.create({
    title: 'Test Blogpost',
    topic: 'Testing',
    content: 'Sometimes the girls need a sanity check.'
}).then(createdBLog=> {
    console.log(createdBLog)
})

app.get('/', (req, res) => {
    res.json({message: 'server home route'})
})

//body parser middleware 
app.use(express.urlencoded({extended: false}))

app.use('/blog', require('./controllers/blog.js'))