const express = require("express")
const router = express.Router()
const Project = require("../models/Project")

// INDEX ALL PROJECTS
// GET  /projects
router.get("/", async (req,res) => {
    try {
        const allProjects = await Project.find({})
        return res.status(200).json({allProjects})
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: "Server Error"})
    }
})

// SHOW ONE PROJECT
// GET  /projects/:id
router.get("/:id", async(req,res) => {
    try {
        const oneProject = await Project.findOne({
            _id: req.params.id
        })
        return res.status(200).json({oneProject})
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: "Server Error"})        
    }
})

// UPDATE ONE PROJECT
// PUT  /projects/:id
router.put("/:id", async(req,res) => {
    try {
        console.log("REQUEST BODY", req.body)
        const updatedProject = await Project.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                title: req.body.title,
                deployed: req.body.deployed
            },
            {
                new: true
            }
        )
        return res.status(200).json({updatedProject})
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: "Server Error"})        
    }
})

// DELETE ONE PROJECT
// DELETE  /projects/:id
router.delete("/:id", async(req,res) => {
    try {
        const deletedProject = await Project.findOneAndDelete({
            _id: req.params.id
        })
        console.log("DELETED PROJECT")
        const allProjects = await Project.find({})
        return res.status(200).json({allProjects})
    } catch(err) {
        console.log(err)
        return res.status(500).json({error: "Server Error"})        
    }
})

// CREATE NEW PROJECT
// POST  /projects
router.post("/", async(req,res) => {
    try {
        const newProject = await Project.create({
            title: req.body.title,
            deployed: req.body.deployed
        })
        return res.status(200).json({newProject})
    }  catch(err) {
        console.log(err)
        return res.status(500).json({error: "Server Error"})        
    }
})

// ADD SKILL TO PROJECT
// POST  /projects/:id/skill
router.post("/:id/skill", async(req,res) => {
    try {
        const oneProject = await Project.findOne({
            _id: req.params.id
        })
        console.log("PROJECT\n", oneProject)
        const newSkill = {
            name: req.body.name,
            description: req.body.description
        }
        console.log("SKILL\n", newSkill)
        oneProject.technologies.push(newSkill)
        await oneProject.save
        return res.status(200).json({oneProject})
    }  catch(err) {
        console.log(err)
        return res.status(500).json({error: "Server Error"})        
    }
})

module.exports = router