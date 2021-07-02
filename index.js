const express = require('express')
const db = require('./models')
db.connect()

// configure express app
const app = express()
const PORT = 3000

// middleware - tell express how to handle json
app.use(express.json())

// test index route '/' -- return a server message
app.get('/', (req, res) => {
    res.json({ msg: '👋 Hello, welcome to my Blog API 👋'})
})

app.get('/blog', async (req, res) => {
    // list all BLOG POSTS
    // res.send({ msg: '👋 Hello, welcome to my Blog API - this is BLOG GET 👋'})
    const allPosts = await db.Blog.find()
    res.send(allPosts)

})

app.post('/blog', async (req, res) => {
    // create post here
    // res.send({ msg: '👋 Hello, welcome to my Blog API - this is BLOG POST 👋'})
    const createPost = await db.Blog.create(req.body)
    res.send(createPost)
console.log(req.body)
})

app.get('/blog/:id', async (req, res) => {
    // show one post
    // res.send({ msg: '👋 Hello, welcome to my Blog API - this is SHOW ONE POST 👋'})
    const showOnePost = await db.Blog.findById(req.params.id)
    res.send(showOnePost)
})

app.put('/blog/:id', async (req, res) => {
    // update one post
    // res.send({ msg: '👋 Hello, welcome to my Blog API - this is UPDATE ONE POST 👋'})
    const updateOnePost = await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(updateOnePost)
})


app.delete('/blog/:id', async (req, res) => {
    // delete one post
    // res.send({ msg: '👋 Hello, welcome to my Blog API - this is DELETE ONE POST 👋'})
    const deleteOnePost = await db.Blog.findByIdAndDelete(req.params.id)
    res.send(deleteOnePost)
})

//////////////////////

app.listen(PORT, () => console.log(`🎧 Welcome to port ${PORT}! 🎧`))