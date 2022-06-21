const express = require('express')

const cors = require('cors')
require('./models')
const app = express()
const PORT = 8000

app.use(express.json())

app.use(cors())


app.get('/', (req, res) => {
    res.json({msg: 'welcome'})
})



app.use('./posts', require('./controllers/blog'))

app.listen(PORT, () => console.log(' '))
