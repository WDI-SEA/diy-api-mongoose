const express = require("express")
const { Song } = require("../models")
const router = express.Router()
const db = require("../models")

router.get("/", async (req, res) => {
    try {
        const songs = await db.Song.find({})
        res.json(songs)
    } catch(err) {
        console.log(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const oneSong = await db.Song.findById(req.params.id)
        const commentID = oneSong.comments.map(comment => {
            return comment._id
        })
        const comments = await db.Comment.find({_id: {$in: commentID}})
        res.json({
            oneSong: oneSong,
            comments: comments
        })
    } catch(err) {
        console.log(err)
    }
})



router.post("/", async (req, res) => {
    try {
        const newSong = await db.Song.create(req.body)
        res.json(newSong)
    } catch(err) {
        console.log(err)
    }
})

router.post("/:id/comment", async (req, res) => {
    try{
        const newComment = await db.Comment.create({
            header: req.body.header,
            content: req.body.content
        })
        const findSong = await db.Song.findById(req.params.id)
      
        findSong.comments.push(newComment)
        await findSong.save()
        res.json(findSong)
    } catch(err) {
        console.log(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const options = { new: true }
        const updateSong = await db.Song.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updateSong)
    } catch(err) {
        console.log(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await db.Song.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router