const express = require('express')
const db = require('./models')

db.connect()

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: false }))

// ROUTES:

            //GET -- Home Page
app.get('/', (req, res) => {
    res.json({msg: "Welcome to the Boo Blog 💋"})
})

            //Get -- List of Blogs
            // --would like to just display blog names --
app.get('/blogs', async (req, res) => {
    try{
        const blogs = await db.Blog.find({})
        res.json({ blogs })
    } catch(err){
        console.log(err)
    }
})

            // POST /blogs -- CREATE one blog redirect to /blogs
app.post('/blogs', (req, res) => {
    db.Blog.create({
        title: req.body.title,
        subTitle: req.body.subTitle,
        content: req.body.content
    })
    .then (() => {
        res.redirect('/blogs')
    })
    .catch(err => console.log(err))
})

        // GET-- shows one blog 

app.get('/blogs/:id', async (req, res) => {
    try {
        const pickedBlog = await db.Blog.findById(req.params.id)
        res.json({ pickedBlog })
    } catch(err){
        console.log(err)
    }
})

        // PUT-- update a blog
app.put('/blogs/:id', (req, res) => {
    db.Blog.findById(req.params.id)
        .then(foundBlog =>{
            foundBlog.title = req.body.title
            foundBlog.subTitle = req.body.subTitle
            foundBlog.content = req.body.content

            foundBlog.save()
                .then(() => {
                    res.redirect('/blogs')
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})


        // DELETE-- delete a post
app.delete('/blogs/:id', (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id)
        .then(deletedItem => {
            console.log(deletedItem)
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`🦄 Welcome to the mindless rantings at ${PORT}...🦄`))