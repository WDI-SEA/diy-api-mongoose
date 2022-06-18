const router = require("express").Router()
const db = require("../models")

// router.get("/", async (req,res)=>{
//     try {
//         // const Pokemon = await db.Pokemon.findByIdAndDelete(req.params.id)
//         // const PokemonType = 
//         res.json(PokemonType)
    
//     } catch (error) {
//         console.log(error)
//         res.status(500).json( {msg: "server error"})
//     }
// })

router.put("/:id", async (req,res) => {
    try {
        const updateType = await db.PokeType.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.json(updateType)

    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const deleteType = await db.PokeType.findByIdAndDelete(req.params.id)
        
        res.json(deleteType)

    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})

module.exports = router