const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')

// GET all blogs
// router.get('/', (req, res)=> {
//     res.json({msg: 'blogs here'})
// })

// CRUD FOR BLOG

// RES.JSON({MESSAGE: "TEST"}) -- TO TEST HITTING ROUTES

// | GET | index | /blog | list all blogs|
router.get('/', async (req, res)=> {
    try{
        // find method to find all blogs
        const blogs = await db.Blog.find({})
        // respond with all blogs
        // console.log(blogs)
        res.json(blogs)
    } catch(err) {
        // if there is error, message me
        console.log(err)
        // service is unavailable
        res.status(503).json ({message: 'the db pr server is down!'})
    }
})
// | POST | create | /blog | add a new blog post | -- (insert a new post)
router.post('/', async (req, res)=> { //--async/await method
    try {
        const createdBlog = await db.Blog.create(req.body);
        res.status(201).json(createdBlog);
    }catch (err) {
        if (err.name === 'ValidationError'){
        res.status(406).json({message: 'Validation Error!'});
        } else {
        res.status(503).json({message: 'DB/Server Error!'})
        }
    }
});
// | GET | detail/show | /blog/:id | show one blog post | 
router.get('/:id', (req, res)=> { //--.then method
    // get id from the req param -- obj destructuring
    const {id} = req.params 
    // look up in db -- model/blog
    db.Blog.findById(id)
    .then(blog => {
        // if found blog is null 
        if (!blog) 
        // -- send not found message
        return res.status(404).json({message: 'blog not found'})
        // if success
        res.json(blog)
    })
    // if any error happens
    .catch(err => {
        console.log(err)
        // send message
        res.status(503).json({message: 'server not runnning'})
    })
})
// | PUT | update | /blog/:id | update one blog post |
router.put('/:id', async (req, res) => { //async/await
    // find one blog to update
    try {
        // get the id from req params
        const {id} = req.params.id
        // find
        const options = {
            new:true
        }
        // update
        const updatedBlog = await db.Blog.findOneAndUpdate({
            _id: id
        }, req.body, options)
        // if blog not updated
        if(!updatedBlog) 
        // send message
        return res.status(404).json({message: 'not atm'})
        // if updated, then display
        res.json(updatedBlog)
    }catch (err) {
        // if server have an issue
        console.log(err)
        // error handle message
        res.status(503).json({message: 'server wont do that'})
    }
})


// | DELETE | delete | /blog/:id | delete one blog post |
router.delete('/:id', (req, res)=> {
    // find blog with req.params and delete
    db.Blog.findByIdAndDelete(req.params.id)
    // give a message it is deleted
    .then(()=> ({message:'blog deleted'}))
    // if something goes wrong send a status message
    .catch(error => {
        console.log(error)
        res.status(503).json({message: 'went wrong'})
    })
})

// module.export
module.exports = router