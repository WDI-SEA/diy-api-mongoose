const db = require('./models')
require('dotenv').config()


const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const seedPosts = async () => {
    try {
        await db.connect()
        const postArr = []
        for(let i = 0; i < 20; i++){
            let testPost = {
                author: `test author ${i}`,
                title: `test title ${i}`,
                content: `test content ${i}: ${loremIpsum}`
            }
            postArr.push(testPost)
        }
        await db.Post.create(postArr)
    } catch(err) {
        console.log(err)
    }
}

seedPosts()