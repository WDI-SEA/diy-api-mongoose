const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

require('./models')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json({ message: 'welcome to the blog APIT'})
})

// VERY IMPORTANT TO USE THIS NAME IN THUNDERCLIENT (/BLOGS)
app.use('/blogs', require('./controllers/blogs.js'))


app.listen(PORT, console.log(`server connected ${PORT}`))