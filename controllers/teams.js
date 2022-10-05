const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
    try {
        const allTeams = await db.Team.find({});
        res.json(allTeams);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error"});
    }
});
router.get("/:teamId", async (req, res) => {
    try {
        const team = await db.Team.findById(req.params.teamId);
        res.json(team);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error"});
    }
})
router.post("/", async (req, res) => {
    try {
        // upsert - prevent duplicates
        const newTeam = await db.Team.findOneAndUpdate(
            {name: req.body.name},
            req.body,
            {upsert: true, new: true}
        );
        res.status(201).json(newTeam);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error"});
    }
});
router.put("/:teamId", async (req, res) => {
    try {
        const team = await db.Team.findByIdAndUpdate(
            req.params.teamId,
            req.body,
            {new: true}
        );
        // no upsert, therefore status code 200
        res.json(team);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error"});
    }
});
router.delete("/:teamId", async (req, res) => {
    try {
        await db.Team.findByIdAndDelete(req.params.teamId);
        res.sendStatus(204);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error"});
    }
})

module.exports = router;
