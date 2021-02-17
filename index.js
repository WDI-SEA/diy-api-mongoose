const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.get('*', (req, res) => {
    res.status(404).send({message: "Not Found"})
})

app.listen(3000, () => {console.log('App is listening on port 3000')})