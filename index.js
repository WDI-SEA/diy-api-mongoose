// MODULE SETUP - - - - - - - - - - - - - - - - -
const express = require('express')
const app = express()

const db = require('./models')
db.connect()

app.use(express.urlencoded({ extended: false }))

const PORT = 4000
const log = console.log

// ROUTES - - - - - - - - - - - - - - - - -
// INDEX /blog -- list all blog posts
app.get('/blog', (req, res) => {
    db.Blog.find({})
    .then((result) => {
        res.json(result)
    })
    .catch(err => {
        log(err)
    })
})

// POST /blog -- add new blog post
app.post('/blog', (req, res) => {
    db.Blog.create({
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    })
    .then(() => {
        res.redirect('/blog')
    })
    .catch(err => {
        log(err)
    })
})

// GET /blog/:id -- show one blog post
app.get('/blog/:id', (req, res) => {
    db.Blog.findById(req.params.id)
    .then(() => {
        res.redirect(`/blog/${req.params.id}`)
    })
    .catch(err => {
        log(err)
    })
})

// PUT /blog/:id -- update one blog post
app.put('/blog/:id', (req, res) => {
    db.Blog.findById(req.params.id)
    .then((foundPost) => {
        foundPost.name = req.body.name
        foundPost.title = req.body.title
        foundPost.content = req.body.content
        foundPost.save()
        .then(() => {
            res.redirect(`/blog/${req.params.id}`)
        })
    })
    .catch(err => {
        log(err)
    })
})

// DELETE /blog/:id -- delete one blog post
app.delete('/blog/:id', (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/blog')
    })
    .catch(err => {
        log(err)
    })
})

// LISTEN - - - - - - - - - - - - - - - - -
app.listen(PORT, () => {
    log(`Welcome to Port ${PORT}`)
})