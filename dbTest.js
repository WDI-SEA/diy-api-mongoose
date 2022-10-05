const db = require('./models')

async function dbTest() {
    try {
        const newBlog = await db.Blog.create({
            title: "Need more sleep",
            content: "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
            author: "me"
        })
        console.log(newBlog)
    } catch (error) {
        console.warn(error)
    }
}
dbTest()