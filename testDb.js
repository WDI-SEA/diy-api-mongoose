const db = require('./Models');
const blogCrud = async () => {
    // try { 
        
    //     const newBlog = await db.Blog.create({
    //         name: 'John yoe',
    //         title: 'My 2nd Blog',
    //         content: 'This is my 2nd blog.  I am so excited to be writing this blog.  I hope you enjoy it.'
    //     })
    //     console.log(newBlog)
    // }  catch (err) {
    //     console.log(err)
    // }  
    try {
        const allBlog = await db.Blog.find()
        console.log(allBlog)
    } catch (err) {
        console.log(err)
    }
}   


 blogCrud(); 