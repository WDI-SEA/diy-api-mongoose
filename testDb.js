const db = require('./models')


const blogCRUD = async () => {
    try {
        // CREATTE
        // const newBlog = await db.Blog.create({
        //     name: 'Cailin Shaffer',
        //     title: 'The dopest blog',
        //     content: 'Dope things'
        // })
        // console.log(newBlog);
        
        // READ
        const foundBlog = await db.Blog.findOne({
            name: 'Cailin Shaffer'
        })
        console.log(foundBlog);

        // UPDATE
        // const updatedBlog = await db.Blog.findOneAndUpdate(
        //     { title: 'The dopest blog' },
        //     { content: 'Super Dope things' },
        //     { new: true , upsert: true }
        // )
        // console.log(updatedBlog);

        // DELETE
        // const deletedBlog = await db.Blog.findOneAndDelete({name: "Cailin Shaffer"})
        // console.log(deletedBlog);
            

    } catch(err) {
        console.log(err);
    }
}
blogCRUD();