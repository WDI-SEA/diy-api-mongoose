let express = require('express')
let cors = require('cors')

let app = express()
let port = 8000

require('./models')

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.json({msg: 'welcome to the blog api'})
})
app.use('/blogs', require('./controllers/blogs'))

app.listen(port, () => {
    console.log(`PORT 3431 PORT 3432 PORT ${port} PORT 9019`)
})