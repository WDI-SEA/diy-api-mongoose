const express = require('express')
// require & connect to db
const db = require('./models')
db.connect()

// config express app
const app = express()
const PORT = 3000

// middleware
app.use(express.urlencoded({extended: false}))

// test index route / -- return a server message
app.get('/', (req,res) => {
    res.json({msg: 'Welcome to my blog 💀'})
})

// GET /blog -- list all blog posts
app.get('/blog', async (req,res) => {
    try {
        const posts = await db.Post.find({})
        res.json({ posts })
    } catch(err) {
        console.log(err)
    }
})

// POST /blog -- add a new blog post
app.post('/blog', (req,res) => {
    db.Post.create({
        name: req.body.name,
        tags: req.body.tags,
        content: req.body.content
    })
    .then(() => {
        res.redirect('/blog')
    })
    .catch(err => console.log(err))
})

// GET blog/:id -- show one blog post
app.get('/blog/:id', (req,res) => {
    db.Post.findById(req.params.id)
    .then( foundPost => {
        console.log(foundPost)
        res.json(foundPost)
    })
    .catch(err => console.log(err))
})


// PUT /blog/:id -- update one blog post
app.put('/blog/:id', (req,res) => {
    db.Post.findById(req.params.id)
    
    .then(foundPost => {
        foundPost.name = req.body.name
        foundPost.tags = req.body.tags
        foundPost.content = req.body.content

        foundPost.save()
        .then(() => {
            res.redirect('/blog')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

// DELETE /blog/:id -- delete one blog post
app.delete('/blog/:id', (req,res) => {
    db.Post.findByIdAndDelete(req.params.id)
    .then(deletedPost => {
        console.log(deletedPost)
        res.redirect('/blog')
    })
})


app.listen(PORT, () => console.log(`Screams on port ${PORT}! 🩸🦇`))