// required packages
const express = require('express')
const cors = require('cors')

// require('./models')

// app config/middlewares
const app = express()
const PORT = 8000
// pasing html form request bodies
// app.use(express.urlencoded({ extended: false }))
// pase json request bodies
app.use(express.json())
app.use(cors())


// routes/controllers
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the crush api' })
})

// controllers
app.use('/celebCrushes', require('./controllers/crush'))
app.use('/comments', require('./controllers/comment'))

// listening on a port
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))