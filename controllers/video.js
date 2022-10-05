const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', async (req, res) => {
  try {
    const videos = await db.Video.find({})
    res.json(videos)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error'})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const video = await db.Video.findById(req.params.id)
    res.json(video)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error'})
  }
})

router.post('/', async (req, res) => {
  try {
    const newVideo = await db.Video.create({  
      title: 'How To Make A Keychron Q1 Worth $500!', 
      description: `Like the video if you liked it (duh) and subscribe if you wanna i guess.
      https://www.youtube.com/channel/UCFcF...
      
      Socials:
      For Updates: https://twitter.com/NIDEKOKeyboards
      
      Chapters:
      TBD
      
      Rudy told me to share these links to buy any of the stuff we used in the video:
      - Curved Tweezers: https://amzn.to/3yTWaOo
      - Switch Opener: https://amzn.to/3jPCmFo
      - Keychron Q1: https://www.keychron.com/products/key...
      - TECSEE Golden Switches: https://keebsforall.com/products/tecs...
      - KL Salmon Switches: https://kineticlabs.store/switches/ki...
      - GMK Laser Keycaps: https://drop.com/buy/drop-mito-gmk-la...
      - Krytox 205g0: https://www.ashkeebs.com/product/kryt...
      - Deskeys Switch Films: https://www.ashkeebs.com/product/desk...
      
      Music:
      Ichika Nito - Feeling
      
      #KeychronQ1 #GMKLaser #CustomKeyboard`,
      length: 11.5333,
      url: 'https://www.youtube.com/watch?v=SgQnVk6jEKw&t'
    })
    res.status(201).json(newVideo)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error'})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedVideo = await db.Video.findOneAndUpdate({ id: req.params.id }, 
    {
      description: `Like the video if you liked it (duh) and subscribe if you wanna i guess.
      https://www.youtube.com/channel/UCFcF...
      
      Socials:
      For Updates: https://twitter.com/NIDEKOKeyboards
      
      Rudy told me to share these links to buy any of the stuff we used in the video:
      - Curved Tweezers: https://amzn.to/3yTWaOo
      - Switch Opener: https://amzn.to/3jPCmFo
      - Keychron Q1: https://www.keychron.com/products/key...
      - TECSEE Golden Switches: https://keebsforall.com/products/tecs...
      - KL Salmon Switches: https://kineticlabs.store/switches/ki...
      - GMK Laser Keycaps: https://drop.com/buy/drop-mito-gmk-la...
      - Krytox 205g0: https://www.ashkeebs.com/product/kryt...
      - Deskeys Switch Films: https://www.ashkeebs.com/product/desk...
      
      Music:
      Ichika Nito - Feeling
      
      #KeychronQ1 #GMKLaser #CustomKeyboard`
    },
    {
      new: true
    }
    )
    res.status(201).json(updatedVideo)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error'})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const removedVideo = await db.Video.findOneAndDelete({ id: req.params.id })
    res.json(removedVideo)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'internal server error'})
  }
})

module.exports = router