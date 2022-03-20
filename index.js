const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8001
require('./models')

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({msg: 'welcome to the diy api!'})
})

//controller middleware
app.use('/kitty', require('./controllers/kitty'))
app.use('/kitpic', require('./controllers/kitpic') )


app.listen(PORT, () => {
  console.log('kittycollection 8001😸')
})