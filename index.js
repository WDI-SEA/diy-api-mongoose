const express = require('express')
const cors = require ('cors')

const app = express()
const PORT = 8000
    

require ('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Welcome young halfblood'})
})

app.use('/god', require('./controllers/god'))

app.listen(PORT, () => {
    console.log(`Zues commanding on PORT ${PORT}`)
})