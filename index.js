const express = require('express')
// require the database
const db = require('./models')
// connect to it
db.connect()

const app = express()
const PORT = 3000

//middleware
app.use(express.urlencoded({ extended: false }))

//index route
app.get('/', (req, res) => {
res.json({msg: 'Read all the blogs' })
})

// GET /blogs -- READ all blogs from the db
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await db.Post.find({})
    res.json({ blogs })
  } catch(err) {
    console.log(err)
  }
})

// POST /blogs -- CREATE one blog redirect to /blogs
app.post('/blogs',  async (req, res) => {
  try {
    const newPost = await db.Post.create({
      name: req.body.name,
      title: req.body.title,
      content: req.body.content,
    })

    await newPost.save()
    res.redirect('/blogs')

  }catch(err) {
    console.log(err)
  }
})

// PUT /blogs/:id -- UPDATE one blog and redirect to /blogs
app.put('/blogs/:id', async (req, res) => {
  try {
    const updateBlog = await  db.Post.findById(req.params.id)
      foundPost.name = req.body.name
      foundPost.title = req.body.title
      foundPost.content = req.body.content
    
    await updateBlog.save()
    res.redirect('/blogs')

  }catch(err) {
    console.log(err)
  }
})

// DELETE /blogs/:id -- DESTROY one blog and redirect to /blogs
app.delete('/blogs/:id', async (req, res) => {
  try {
    const deletePost = await db.Post.findByIdAndDelete(req.params.id)
    res.redirect('/blogs')
  } catch(err) {
    console.log(err)
  }
})

app.listen(PORT, () => console.log(`welocome to port ${PORT}! 👋`))