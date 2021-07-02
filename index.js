const express = require('express')

const db = require('./models')

db.connect()

const app = express()
const PORT = 5000

app.use(express.urlencoded({extended:false}))

app.get('/beer', async (req, res) => {
    try{
        const beer = await db.Beer.find({})
        res.json({beer})
    } catch(err){
        console.log(err)
    }
})

// POST
app.post('/beer', async (req, res) => {
    try{
        const createBeer = await db.Beer.create({
            name: req.body.name,
            description:req.body.description,
            rating:req.body.rating
        })
        res.redirect('/beer')
    } catch(err){
        console.log(err)
    }
})

// GET -- show one blog post
app.get('/beer/:id', async (req, res) => {
    try{
        const beerId = await db.Beer.findById(req.params.id)
        res.json({beerId})
    } catch(err) {
        console.log(err)
    }
})
// PUT -- update
app.put('/beer/:id', async (req, res) => {
    try{
        const beerUpdate = await db.Beer.findById(req.params.id)
            beerUpdate.name = req.body.name,
            beerUpdate.description = req.body.description,
            beerUpdate.rating = req.body.rating

            await beerUpdate.save()
            res.redirect('/beer')
    } catch(err){
        console.log(err)
    }
})

// DELETE -- DELETE

app.delete('/beer/:id', async (req, res) => {
    try{
        const deleteBeer = await db.Beer.findByIdAndDelete(req.params.id)
        console.log(deleteBeer, "DELETED")
        res.redirect('/beer')
    } catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`welcome to port ${PORT}`))