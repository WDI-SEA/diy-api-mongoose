const db = require('./models')
db.connect()

const blogCRUD = async () => {
    try {
        const newBlog = await new db.Blog({
            title: "Midmorning",
            subTitle: "Still excited but it's getting tough",
            content: "Are those clouds rolling in?"
        })

        await newBlog.save()
        console.log("New blog:", newBlog)
    } catch(err) {
        console.log(err)
    }
}

blogCRUD()