const express = require('express')

//REQUIRE THE DATABASE
const db = require('./models')
const { rawListeners } = require('./models/Blog')

//CONNECT TO DATABASE
db.connect()

//CONFIG EXPRESS APP
const app = express()
const PORT = 3000

// request body middleware
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({msg:`hello from the 🗣 Blog api 💬`})
})

//GET ~ INDEX '/blog' --- list all blog posts
app.getMaxListeners('/blog', async (req, res) => {
    try {
        const posts = await db.Blog.find({})
        res.json({ posts })
    } catch(err) {
        console.log(err)
    }
})

//POST ~ CREATE '/blog' --- add a new blog post

//GET ~ DETAIL/SHOW '/blog/:id' -- show ONE blog post

//PUT ~ UPDATE  '/blog/:id' -- update one blog post

//DELETE ~ DELETE '/blog/:id' -- delete one blog post

app.listen(PORT, () => console.log(`welcome to the smooth sounds of port ${PORT} 🏄🏼`))