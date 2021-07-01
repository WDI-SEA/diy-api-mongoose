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
    res.json({ msg: "List all blog posts" })
})

// POST /blog -- add new blog post
app.post('/blog', (req, res) => {
    res.json({ msg: "Add new blog post" })
})

// GET /blog/:id -- show one blog post
app.get('/blog/:id', (req, res) => {
    res.send("Show one blog post")
})

// PUT /blog/:id -- update one blog post
app.put('/blog/:id', (req, res) => {
    res.send("Update one blog post")
})

// DELETE /blog/:id -- delete one blog post
app.delete('/blog/:id', (req, res) => {
    res.send("Delete one blog post")
})

// LISTEN - - - - - - - - - - - - - - - - -
app.listen(PORT, () => {
    log(`Welcome to Port ${PORT}`)
})