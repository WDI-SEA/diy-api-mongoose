const router = require('express').Router()
const db = require('../models')

//GET /blogs 
router.get('/', async (req, res) => {
    try {

        //find all blogs
        const blogs = await db.Blog.find({})
        //send blogs to the client
        res.json(blogs)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'server erorrr' })
    }
})

//GET /blog/:id -- details about specific blog
router.get('/:id', async (req, res) => {
    try {
        //get the id of a specific blog from the url params 
        const blog = db.Blog.findById(req.params.id)
        //send blog back to the client 
        res.json(blog)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'server eror in the get' })
    }
})


// POST /blogs -- create new blog

router.post('/', async (req, res) => {
    try {

        //post the id of a specific blog from the url params 
        console.log(req.body);
        const newBlog = await db.Blog.create(req.body)
        // send blog back to the client 

        res.status(201).json(newBlog)
        // res.send("isthio >>>>")
    } catch (err) {
        console.log(err);
        if (err.name === "ValidationError") {
            res.status(400).json({ msg: err.message })
        } else {

            res.status(500).json({ msg: 'server eror in the post' })
        }
    }
})




//PUT /blog/:id -- update a blog

router.put('/:id', async (req, res) => {
    try {
       //get id from the url params 
       const id = req.params.id
       //search for the id in the db, and update usinf the rew.body
       const options = { new: true} 
       const updatedBlog = await db.Blog.findByIdAndUpdate(id, req.body, options)
       res.json(updatedBlog)  
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg : 'server errrorrr in the put'})
    }
})

// DELETE /blogs/:id -- Destroy a blogs
router.delete('/:id', async (req, res) => {
	try {
		//get the id from the req.params 
		const id = req.params.id
		// delete that bounty in the db
		await db.Blog.findByIdAndDelete(id)
		// send 'no content' status
		res.sendStatus(204) // was successful -- nothing exists
	} catch (err) {
		console.log(err)
		res.status(500).json({ msg: 'server error' })
	}
})

module.exports = router