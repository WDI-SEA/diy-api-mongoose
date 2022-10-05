const express = require ('express')
const cors = require('cors')

const app = express()
const PORT = 8000

require('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message: 'Welcome to the blog-o-sphere 🌎'})
})

app.use('/blogs', require('./controllers/blogs'))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
