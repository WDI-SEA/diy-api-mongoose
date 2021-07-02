const express = require('express')

// require the databse
const db = require('./models')
//connect to it
db.connect()

//config our express app
const app = express()
const PORT = process.env.PORT

//request body middleware
app.use(express.urlencoded({ extended: false }))

// test index route / -- return a server message
app.get('/', (req, res) => {
    res.json({ msg: "Ken's blogpost API"})
})

// GET /blog -- READ all blog from db
app.get('/blog', async (req, res) => {
    try{
        const blog = await db.Post.find({})
        res.json({ blog })

    } catch(err) {
        console.log(err)
    }
})

//POST /blog -- CREATE one post then redirect to /blog
// app.post('/blog', (req, res) => {
//     db.Post.create({
//         name: req.body.name,
//         title: req.body.title ,
//         content: req.body.content
//     })
//     .then(() => {
//         res.redirect('/blog')
//     })
//     .catch(err => console.log(err))
// })

//changed /POST to async
app.post('/blog', async (req, res) => {
    try{
        const newPost = await db.Post.create({
            name: req.body.name,
            title: req.body.title ,
            content: req.body.content
        })
        await newPost.save()
        res.redirect('/blog')
    }catch(err){
        console.log(err)
    }
})

//GET show one blog post
app.get('/blog/:id', async (req, res) => {
    try{
        const singlePost = await db.Post.findById(req.params.id)
        if(singlePost) {
            res.send(singlePost)
        } else {
            res.send({
                message: "Post not Found"
            })
        }
    }catch(err) {
        console.log(error)
    }
})



//PUT /blog:id -- UPDATE one bountie and redirect to /blog
// app.put('/blog/:id', (req, res) => {
//     db.Post.findById(req.params.id)
//     .then(foundPost => {
//         foundPost.name = req.body.name
//         foundPost.title = req.body.title,
//         foundPost.content = req.body.content,
        

//         foundPost.save()
//         .then(() => {
//             res.redirect('/blog')
//         })
//         .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

// })

//changed /PUT to async
app.put('/blog/:id', async (req, res) => {
    try{
        const updatePost = await db.Post.findById(req.params.id)
            updatePost.name = req.body.name
            updatePost.title = req.body.title,
            updatePost.content = req.body.content

            updatePost.save()   
            res.redirect('/blog')         
    }catch(err){
        console.log(err)
    }
})


//DELETE /blog/:id -- DESTROY one post and redirect to /blog
// app.delete('/blog/:id', (req, res) => {
//     db.Post.findByIdAndDelete(req.params.id)
//         .then(deletedItem => {
//             console.log(deletedItem)
//             res.redirect('/blog')
//         })
// })

//changed /DELETE to async
app.delete('/blog/:id', async (req, res) => {
    try{
        deletePost = await db.Post.findByIdAndDelete(req.params.id)
        console.log(deletePost)
        res.redirect('/blog')
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => console.log('port working!!'))