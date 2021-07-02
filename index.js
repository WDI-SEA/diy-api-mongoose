const express = require('express')

const db = require('./models')

db.connect()

const app = express()
const PORT = 3000

// request body middleware
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res) => {
    res.json({msg: 'Hello welcome to the API'})

})

//GET
app.get('/blog', async (req,res) => {
    try{
        const blog = await db.Blog.find({})
        res.json({ blog })
        
    } catch(err) {
        console.log(err)
    }
})

// POST /blog
app.post('/blog', async (req,res) => {
    try{

        
        await db.Blog.create({
            
            // DOES IT NEED TO BE REQ.BODY._ID????
            _id: req.body._id,
            name: req.body.name,
            title: req.body.title,
            content: req.body.content
        })
        res.redirect('/blog')

    } catch(err) {
        console.log(err)
    }
})

app.put('/blog/:id', async (req, res) => {
    try{
        await db.Blog.findById(req.params.id)
        foundBlog => {
            foundBlog._id = req.body._id
            foundBlog.name = req.body.name
            foundBlog.title = req.body.title
            foundBlog.content = req.body.content

            foundBlog.save()
            res.redirect('/blog')
        }
    }
    catch(err) {
        console.log(err)
    }
    
})

// DELETE
app.delete('/blog/:id', async (req,res) => {
    try{

       await db.Blog.findByIdAndDelete(req.params.id)
       deletedItem => {
        console.log(deletedItem)
        res.redirect('/blog')
        }
    } catch(err) {
        console.log(err)
    }

})












app.listen(PORT, () => console.log(`welcome to port ${PORT} 🌊`))