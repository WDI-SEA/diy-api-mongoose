const express = require('express')
const db = require('./models')

db.connect()

//config express app
const app = express()
const PORT = 5900

//request body middleware
app.use(express.urlencoded({ extended: false }))
app.use('/keebs', require ('./controller/keebs'))

//home route
app.get('/', (req, res)=> {
    res.json({msg: 'Welcome to your daily clack of mechanical keyboards'})
})


// app.get('/keebs', async (req, res) => {
//     try {
//         const keebs = await db.Blog.find({})
//         res.json({ keebs })
//     } catch (err) {
//         console.log(err)
//     }
// })

//post route
// app.post('/keebs/new', async (req, res)=> {
//     try {
//         const keebs = 
//             await db.Blog.create({
//             name: req.body.name,
//             title: req.body.title,
//             content: req.body.content
//             }) 
//         } catch(err) {
//             console.log(`failed to add`, err)
//         }
//         res.redirect('/keebs')
//     })

// app.put ('/keebs/:id', async (req, res) => {
//     try {
//         const keebs = await db.Blog.findById(req.params.id)
//         keebs.name = req.body.name,
//         keebs.title = req.body.title,
//         keebs.content = req.body.content

//         keebs.save()
//     } catch (err) {
//         console.log(`failed to change`, err)
//     }
//     res.redirect('/keebs')
// })


// app.delete('/keebs/:id', async (req, res) => {
//     try {
//         const keebs = await db.Blog.findByIdAndDelete(req.params.id)
//     } catch (err) {
//         console.log(`failed to delete`, err)
//     }
//     res.redirect('/keebs')
// })




app.listen(PORT, () => console.log(`You have reached ${PORT} wpm ⌨`))