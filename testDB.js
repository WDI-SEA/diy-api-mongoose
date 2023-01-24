const db = require('./models')

const blogCRUD = async () => {
    try {
        const newBlog = await db.Blog.create({
            name: 'Daniel Park',
            title: 'Sleep',
            content: 'Unintentionally staying up and ends up needing energy drink to stay up through the class'
        })
    } catch (err) {
        console.log('🔥🔥🔥🔥🔥Burning!!!🔥🔥🔥🔥🔥', err)
    }
}

blogCRUD()