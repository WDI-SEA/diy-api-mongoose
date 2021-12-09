const db = require('./models')
const express = require('express')
const app = express()

// added these to correct postman error
app.use(
    express.urlencoded({ extended: true })
);   
app.use(express.json());
// --
app.use('/blogs', require('./controllers/blogRoutes'))

app.get('/', (req,res) => {
    res.json({message: 'Blogs Server Home Route'})
})

//initial posts
// const blog3 = new db.Blog({
//     name: 'Mackenzie',
//     title: 'I cant believe it is December',
//     content: 'It does not even feel like November happened. How is it already December?',
//     mood: 'disoriented'
// })
// blog3.save()

app.listen(process.env.PORT || 3000, () => {
    console.log('sweet sounds of port 3000')
})