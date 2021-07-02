const express = require('express')
const db = require('./models')
db.connect()

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({extended: false}))

//GET all blog posts
app.get('/blog', async (req, res) => {
    try{
        const allPosts = await db.Blog.find({})
        res.json({ allPosts })
    }catch(err){
        console.log(error)
    }
})

//POST add a new blog post
app.post('/blog', async (req, res) => {
    try {
        const newPost = await db.Blog.create({
            name: req.body.name,
            title: req.body.title,
            subject: req.body.subject,
            content: req.body.content
        })
        await newPost.save()
        res.redirect('/blog')
    }catch(err) {
        console.log(err)
    }
})

//GET show one blog post
app.get('/blog/:id', async (req, res) => {
    try{
        const findPost = await db.Blog.findById(req.params.id)
        if(findPost) {
            res.send(findPost)
        } else {
            res.send({
                message: "Post not Found"
            })
        }
    }catch(err) {
        console.log(error)
    }
})

//PUT update one blog post
app.put('/blog/:id', async (req, res) => {
    try{
        const updatePost = await db.Blog.findById(req.params.id)
        updatePost.name = req.body.name
        updatePost.title = req.body.title
        updatePost.subject = req.body.subject
        updatePost.content = req.body.content

        await updatePost.save()
        res.redirect('/blog')
    }catch(err) {
        console.log(error)
    }
})

//DELETE if you can't figure this out you need your head checked
app.delete('/blog/:id', async (req, res) => {
    try{
        deletePost = await db.Blog.findByIdAndDelete(req.params.id)
        res.redirect('/blog')
    } catch(err) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})