const { Router } = require('express')
const express = require('express')
const db = require('./models')

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
app.post('/blog', (req, res) => {
    db.Blog.create({
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
    })
    .then(() => {
      res.redirect('/blog')
    })
    .catch(err => console.log(err))
})

// GET (detail/show) /blog/:id route.  Show one blog post
app.get('/blog/:id', (req, res) => {
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
            res.redirect('/blog')
          })
      })
})

// DELETE route for /blog/:id.  Deletes one blog post.
app.delete('/Blog/:id', (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id)
      .then(deletedItem => {
        console.log(deletedItem)
        res.redirect('/blog')
      })
  })

  model.exports = router