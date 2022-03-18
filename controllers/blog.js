const db = require("../models");
const router = require("express").Router();

router.get('/',async(req,res)=>{
    try {
        
        const blogs = await db.Blogger.find({});

        res.json(blogs)
        
    } catch (error) {
        
    }
})

//GET /blog/:id(show)
router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      //this is the same as const id = req.params.id
      //get id from the request paramaters
      //look up id in the db
      await db.Blogger.findById(id).then((blog) => {
        if (!blog)
          return res.status(404).json({ message: "Blog not found pal." });
        res.json(blog); //success!
      });
      //if found bounty is null, send not found message
      //handle any errors that may have happened
    } catch (error) {
      console.log(error);
      res.status(503).json({ message: "Database or Server Error" });
    }
  });

//POST /blogger(insert new blog)
router.post("/", async (req, res) => {
    await db.Blogger.create(req.body)
      .then((createdBlog) => {
        res.status(201).json(createdBlog);
      })
      .catch((err) => {
        if (err.name === "ValidationError") {
          res.status(406).statusMessage({ message: "validation error" });
        } else {
          res.status(503).json({ message: "Database or Server Error" });
        }
      });
  });

  //PUT /blog/:id (update a bounty)
router.put("/:id", async (req, res) => {
    try {
        //get id from request params 
        //find the blog in the db and update it
        const {id} = req.params
        const options = {
            new:true
        }
        const updatedBlog = await db.Blogger.findOneAndUpdate({_id: id},
        req.body,options);
      if(!updatedBlog) return res.status(404).json({message:'incorrect id'})
        res.json(updatedBlog)
    } catch (error) {
      console.log(error);
      res.status(503).json({ message: "Database or Server Error" });
    }
  });

  //DELETE /bounties/:id (destroy)
router.delete('/:id',(req,res)=>{
    try {
        const {id} = req.params
        db.Blogger.findByIdAndDelete(id)
        .then(()=>{res.status(204).json({message:"Deleted. Blog has been sent to the darkness."})})
        
    } catch (error) {
        console.log(err)
        res.status(503).json({message:'Something went wrong. Terribly wrong. '})
    }
})

router.post('/:id/comment', async (req,res)=>{
   try {
       //find blog by :id
       const blog = await db.Blogger.findById(req.params.id)
       //push it to the blogs comment array
       blog.comments.push(req.body)
       //save the blog
       await blog.save()
       //send blog back in the response
       res.status(204).json(blog)
   } catch (error) {
    console.log(err)
    res.status(503).json({message:'Something went wrong. Terribly wrong. '})
   }
})



module.exports = router;
