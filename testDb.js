const db = require('./models')
db.connect()

  const blogCRUD = async () => {
    try {
        const newBlog = await new db.Blog({
            title: 'This is a blog post',
            author: 'Ben'
        })

        await newBlog.save()
        console.log("New blog:", newBlog)
    } catch(err) {
        console.log(err)
    }
}

blogCRUD()