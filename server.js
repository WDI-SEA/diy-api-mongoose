const express = require('express')
const db = require('./models')
const app = express()

db.connect()

PORT = 3001
app.use(express.urlencoded({extended: false}))

Blog.create({
  title: 'This is a blog post',
  author: 'Ben'
}, (error, Blog) => {
  if(error){
    console.log(error)
  } else {
    console.log(blog.title)
  }
}) 

// GET (index) route for /Blog.  READ all blog posts.
app.get('./Blog', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json({ blogs })
    } catch(err) {
        console.log(err)
    }
})

// POST (create) route for blog.  CREATE one new blog post.
app.post('/Blog', (req, res) => {
    db.Blog.create({
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
    })
    .then(() => {
      res.redirect('/Blog')
    })
    .catch(err => console.log(err))
})

// GET (detail/show) /blog/:id route.  Show one blog post
app.get('/Blog/:id', (req, res) => {
    db.Blog.findById(req.params.id)
      .then(foundBlog => {
          foundBlog.title = req.body.title
          
          foundBlog.save()
          .then(() => {
            res.redirect('/blog')
          })
      })
})  
    
  // PUT route for /blog/:id. UPDATE one blog post.
app.put('/Blog/:id', (req, res) => {
    db.Blog.findById(req.params.id)
      .then(foundBlog => {
        foundBlog.title = req.body.title
  
        foundBlog.save()
          .then(() => {
            res.redirect('/Blog')
          })
      })
})

// DELETE route for /blog/:id.  Deletes one blog post.
app.delete('/Blog/:id', (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id)
      .then(deletedItem => {
        console.log(deletedItem)
        res.redirect('/Blog')
      })
  })


app.listen (3001, () => {
    console.log('listening')
  })
