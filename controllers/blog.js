const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
    try {
        const blogs = await db.Blog.find({});
        res.json({results: blogs})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const foundBlog = await db.Blog.findById(id);
        res.json({result: foundBlog})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
})

router.post("/", async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body);
        res.json({result: newBlog})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateBlog = await db.Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.json({result: updateBlog})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBlog = await db.Blog.findByIdAndDelete(id);
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
})


module.exports = router;

