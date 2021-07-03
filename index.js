// Require Express, ASync plugin
const express = require('express')
const Async =  require("express-async-router").AsyncRouter

// Require the DB
const db = require('./models')

// Connect to the DB, Instance Router
db.connect()
const router = Async()

// Config our Express App
const app = express()
const PORT = 3002

// Request Body Middleware
app.use(express.urlencoded({ extended: false }))

// Test index route / -- return a server message
app.get('/', (req, res) => {
    res.json({ msg: 'Hello! Welcome to the Blogs API!'})
})

//  GET /blog -- READ all blogs from the db
app.get('/blog', (req, res) => {
    db.Blog.find({})
    .then(Blog => {
        res.send(Blog)
    })
    .catch(err => {
        console.log(err)
    })

})

// POST /blog -- CREATE one blog
app.post('/blog', (req, res) => {
    db.Blog.create(req.body)
    .then(createdBlog => {
        res.send(createdBlog)
    })                                                                     
    .catch(err => {
        console.log(err)
    })
})

// GET /blog/:id -- GET all Blog ids
app.get('/:id', (req, res) => {
    db.Blog.findById(req.params.id)
    .then(foundBlog => {
        res.send(foundBlog)
    })
    .catch(err => {
        console.log(err)
    }) 
})

// PUT /blog/:id -- UPDATE one blog
app.put('/blog/:id', (req, res) => {
    db.Blog.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, useFindAndModify: false }
    ) 
    .then(editedBlog => {
        res.send(editedBlog)
    })   
    .catch(err => {
        console.log(err)
    })   
})

// DELETE /blog/:id -- DESTROY one blog
app.delete('/blog/:id', (req, res) => {
    console.log(req.params.id) 
    db.Blog.findOneAndDelete({
        _id: req.params.id
    }, { useFindAndModify: false })  
        .then(() => {
            res.status(204).send()
        })
        .catch(err => {
            console.log(err)
        })
})

app.listen(process.env.PORT || 3002, () => {
})