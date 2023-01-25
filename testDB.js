const db = require('./models')

const blogCRUD = async () => {
    try {
        // C.reate
        // const newBlog = await db.Blog.create({
        //     name: 'someone random',
        //     title: 'the one and only best blog',
        //     content: 'to be good you gotta be good'
        // })
        // console.log(newBlog)
        // -------------- works ---------------------

        // // R.ead
        const allBlogs = await db.Blog.find({})
        allBlogs.forEach(blog => {
            console.log(`${blog.name} wrote a his first blog called ${blog.title}`)
        })
        // -------------- works ---------------------

        // U.pdate
        const updatedBlog = await db.Blog.findOneAndUpdate(
            {name:'someone random'},
            { title: 'Inspirational Blog', content: 'to get good you must first try'},
            { new: true, upsert: true}
        )
        console.log(updatedBlog)
        // -------------- works ---------------------

        // D.elete
        const deleted = await db.Blog.findOneAndDelete({ name: 'Best Guy'})
        console.log(deleted)
        // -------------- works ---------------------

    } catch (err) {
        console.log(err)
    }
}

blogCRUD()