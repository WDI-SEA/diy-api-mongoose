const express = require('express')
// const kitty = require('../models/kitty')
const { db } = require('../models/kitty')
const router = express.Router()

//PUT/kitpic -- updates a picture at id
router.put('/:id', async (req, res) => {
  try {
    const foundCat = await   db.Kitty.findOne({
    "kitpic._id" : req.params.body
  })
  const pic = await foundCat.kitpic.id(req.params.id)
  pic.imgUrl = req.body.imgUrl
  pic.caption = req.body.caption
  } catch(err) {
   console.log(err) 
    res.status(503).json({msg:'err'})
  }
})

router.delete('/:id', (req, res) => {
  res.send('delete a comment')
})

router.post('/:id/kitpic', async (req,res) => {
  try{
    //find blog at :id
    const kitty = await db.Kitty.findById(req.params.id)
    //push to the blogs comment array
    kitty.push
    //save to blog
    //send the blog back in the response
  } catch (err) {
    console.log(err)
    res.status(503).json({msg:'error'})
  }
})

module.exports = router