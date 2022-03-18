const { json } = require("express/lib/response")
const db = require("../models")
const router = require('express').Router()

// GET /kitties(index)
router.get('/', async(req,res) => {
  try {
    //find all kitties
    const kitties = await db.Kitty.find({})
    //respond with all kitties
    res.json(kitties)
  } catch(err) {
    console.log(err)
    res
      .status(503)
      .json({message: 'could not find any'})
  }
})
// POST /kitties add a new cat  
router.post('/', (req, res) => {
  db.Kitty.create(req.body)
    .then((createdKitty) => {
      res.status(201).json(createdKitty)
    })
    .catch((err) => {
      if(err.name === "ValidationError") {
        res.status(406).json({message: "validation error"})
      } else {
        res.status(503).json({message: 'database or server error!'})
      }
    })
})

//GET /kitties:id detail of 1 cat
router.get("/:id", async (req, res) => {
  // get the id from the request parameters
  const { id } = req.params;
  try {
    const foundKitty = await db.Kitty.findById(id)
    res;json(foundKitty)
  } catch(err) {
    console.log(err);
      res.status(503).json({ message: "server room isbroken" })
  }
});


//PUT /kitties/:id update cat

router.put("/:id", async (req, res) => {
  try {
    const updatedCat = await db.Kitty.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      { new: true }
    );
    res.json(updatedCat);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: `An error occured. Details : ${err}` });
  }
});

//add more pics to cat
router.put("/:id", async (req, res) => {
  try {
    const updateCat = await db.Kitty.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      { new: true }
    );
    res.json(updateCat);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: `An error occured. Details : ${err}` });
  }
});


//DELETE /kitties/:id delete cat

router.delete("/:id", async (req, res) => {
  try {
    const foundKitty = await db.Kitty.findById(req.params.id);
    if (!foundKitty) {
      res.json({ message: "Cannot find cat." });
    } else {
      foundKitty.remove();
      res.json({ message: "kitty deleted :(." });
    }
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: `An error occured. Details : ${err}` });
  }
});

module.exports = router