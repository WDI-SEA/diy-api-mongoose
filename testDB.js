const db = require('./models')

const blogCRUD = async () => {
    try {
        const newBlog = await db.Blog.create({
            name: 'Eric Nguyen',
            title: 2,
            content: 'currently getting hunted down by bounty hunter Josh and Tyler'
        })
    } catch (err) {
        console.log('🔥🔥🔥🔥🔥Burning!!!🔥🔥🔥🔥🔥', err)
    }
}

blogCRUD()