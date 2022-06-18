const router = require("express").Router()
const db = require("../models")

router.get("/", async (req,res)=>{
    try {
        //find all bounties
        const allPokemon = await db.Pokemon.find({})

        // send them to the client
        res.json(allPokemon)
    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

router.post("/", async (req,res)=>{
    try {
        //find all bounties
        const createPokemon = await db.Pokemon.create(req.body)

        // send them to the client
        res.status(201).json(createPokemon)
    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

router.get("/:id", async (req,res)=>{
    try {
        const Pokemon = await db.Pokemon.findById(req.params.id).populate("type")
        res.json(Pokemon)
    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

router.put("/:id", async (req,res)=>{
    try {
        const Pokemon = await db.Pokemon.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
        })

        res.json(Pokemon)

    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

router.delete("/:id", async (req,res)=>{
    try {
        const Pokemon = await db.Pokemon.findByIdAndDelete(req.params.id)
        res.json(Pokemon)
    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

router.post("/:id/poketype", async (req,res)=>{
    try {
        const Pokemon = await db.Pokemon.findById(req.params.id)
        const newType = await db.PokeType.create(req.body)
        // console.log(newType)
        Pokemon.type.push(newType)
        await Pokemon.save()

        newType.pokemon = Pokemon
        await newType.save()

        res.json(Pokemon)
        // res.send("pokemon/id/poketype")
    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

module.exports = router