const Blog = require('./models/blog')

Blog.create({
    name: 'Hello World!',
    title: 1,
    content: 'This is a blog post about saying Hello World!'
}, (err, createdBlog) => {
    if(err) console.log(err)
    else console.log(createdBlog)
})