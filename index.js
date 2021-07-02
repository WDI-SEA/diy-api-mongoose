require('dotenv').config()
// require express
const express = require('express')

// require rowdy
const rowdy = require('rowdy-logger')

// require database
const db = require('./models/')

// connect to database
db.connect()

// configure express
const app = express()
const PORT = process.env.PORT
const rowdyResults = rowdy.begin(app)

// configure middlewares
app.use(express.urlencoded({ extended: false }))

// create routes
// GET /blog -- READ list all blog posts
app.get('/blog', async (req, res) => {
    try {
        const allPosts = await db.Post.find()
        res.json({ allPosts })
    } catch (err) {
        console.log(err)
    }
})

// POST /blog -- CREATE add a new blog post, redirect to /blog
app.post('/blog', async (req, res) => {
    try {
        await db.Post.create({
            author: req.body.author,
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags
        })
        res.redirect('/blog')
    } catch (err) {
        console.log(err)
    }
})

// GET /blog/:id -- READ show one blog post
app.get('/blog/:id', async (req, res) => {
    try {
        const foundPost = await db.Post.find({
            _id: req.params.id
        })
        res.json({ foundPost })
    } catch (err) {
        console.log(err)
    }
})

// PUT /blog/:id -- UPDATE one blog post, and redirect to /blog
app.put('/blog/:id', async (req, res) => {
    try {
        const postToUpdate = await db.Post.findById(req.params.id)
        postToUpdate.content = req.body.content
        await postToUpdate.save()

        res.redirect('/blog')
    } catch (err) {
        console.log(err)
    }
})

// DELETE /blog/:id -- DESTROY one blog post, and redirect to /blog
app.delete('/blog/:id', async (req, res) => {
    try {
        await db.Post.findByIdAndDelete(req.params.id)

        res.redirect('/blog')
    } catch (err) {
        console.log(err)
    }
})

// app listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    rowdyResults.print()
})