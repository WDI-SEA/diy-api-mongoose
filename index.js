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

// POST /blog -- add new blog post

// GET /blog/:id -- show one blog post

// PUT /blog/:id -- update one blog post

// DELETE /blog/:id -- delete one blog post

// LISTEN - - - - - - - - - - - - - - - - -
app.listen(PORT, () => {
    log(`Welcome to Port ${PORT}`)
})