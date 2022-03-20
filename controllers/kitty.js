const express = require("express");
const db = require("../models");
const router = express.Router();

// GET /kitty(index) read all cats
router.get("/", (req, res) => {
  //find all kitties
  db.Kitty.find({})
    //respond with all kitties
    .then((kitties) => res.json(kitties))
    .catch(console.log);
});

// POST /kitty add a new cat
router.post("/", (req, res) => {
  db.Kitty.create(req.body)
    .then((createdKitty) => {
      // res.status(201).json(createdKitty)
      res.json(createdKitty);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(406).json({ message: "validation error" });
      } else {
        res.status(503).json({ message: "database or server error!" });
      }
    });
});

//GET /kitty:id read SINGLE cat @id
router.get("/:id", async (req, res) => {
  // get the id from the request parameters
  const id = req.params.id;
  try {
    const foundKitty = await db.Kitty.findById(id);
    if (!foundKitty) return res.status(404).json({ msg: "cat not found" });
    res.json(foundKitty);
  } catch (err) {
    if (err.name === "CastError")
      return res
        .status(404)
        .json({ msg: "I cant find that cat, because the id was malformed" });
  }
});

//PUT /kitty/:id UPDATE cat

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
    const foundKitty = await db.Kitty.findByIdAndDelete(req.params.id);
    res.json({ message: "kitty deleted :(." });
    if (!foundKitty) {
      res.json({ message: "Cannot find cat." });
    }
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: `An error occured. Details : ${err}` });
  }
});

router.post("/:id/kitpic", async (req, res) => {
  try {
    const foundKitty = await db.Kitty.findById(req.params.id);
    console.log("foundkitty", foundKitty);
    foundKitty.imgs.push(req.body);
    await foundKitty.save();
    res.json(foundKitty);
  } catch (err) {
    console.log("@POSTKITPIC", err);
    res.status(503).json({ msg: "error" });
  }
});

module.exports = router;
