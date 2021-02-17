const express = require('express')
const cors = require('cors')


const app = express()


// set up middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// include controllers
app.use('/v1/wodgets', require('./controllers/v1/wodgets'))

app.get('*', (req, res) => {
    res.status(404).send({message: 'Not Found!'})
})

app.listen(3000, () => { console.log(' Hollar 300!! + 2700!!!')})