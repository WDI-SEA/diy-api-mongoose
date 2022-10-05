const db = require('./models')

const createBlog = async () => {
    try {
        const newBlog = await db.Blog.create({
            name: "Mateo",
            title: "reviews",
            body: "always hate review when I get the deliverable"
        })

        console.log(newBlog)

    } catch (error) {
        console.log(error)
    }
}
// createBlog()

const updateBlog = async () => {
    try {
        const blogToComment = await db.Blog.findOne({name: "Mateo"})
        const newComment = {
            name: 'kristina',
            content: 'saaaame'
        }
        console.log("********DATA************", newComment)
        blogToComment.comments.push(newComment)
        await blogToComment.save()    
        console.log(blogToComment)
    } catch (error) {
        console.log(error)
    }
}
updateBlog()