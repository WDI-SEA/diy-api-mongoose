const express = require("express");
// const kitty = require('../models/kitty')
const db = require("../models");
const kitty = require("../models/kitty");
const router = express.Router();

//PUT/kitpic -- updates a picture at id
router.put("/:id", async (req, res) => {
  try {
    const foundCat = await db.Kitty.findOne({
      "imgs._id": req.params.id
    });
    // console.log("FOUNDKITTY@@kitpic", foundCat)
    const pic = await foundCat.imgs.id(req.params.id);
    // console.log("KITPIC", pic)
    pic.imgUrl = req.body.imgUrl;
    await foundCat.save()
    // console.log("FOUNDCAT", foundCat)
    res.json(foundCat)
    // pic.caption = req.body.caption
  } catch (err) {
    console.log(err);
    res.status(503).json({ msg: "err" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const foundCat = await db.Kitty.findOne({
      "imgs._id": req.params.id,
    });
    console.log("FOUNDKITTY@@kitpic", foundCat)
    foundCat.imgs.id(req.params.id).remove();
    await foundCat.save();
    // res.json(foundCat);
    res.json({ message: "kittypic deleted :(." });
  } catch(err) {
    console.log(err)
    res.status(503).json({ msg: 'error' })
  }
});


module.exports = router;
