const db = require('./models')

const testCRUD = async () => {
    try{
    // //create
    //     const newBlog = new db.Blog({
    //         name: 'new test',
    //         title: 'testing title',
    //         content: 'ajd lajd jfa lfjdl fldjf lasjf lasjdfl'
    //     })
    //     await newBlog.save()

    // // //read
    //     const foundBlog = await db.Blog.findOne({
    //         name: 'new test'
    //     })
    //     console.log(foundBlog)

    // //update
    // const updatedBlog = await db.Blog.findOneAndUpdate(
    //     {name: 'Another test blog'}, 
    //     {title: 'Test blogs v2', content: 'jlajfd ajda l jlajd a'}, 
    //     {new: true, upsert: true} 
    //     )
    // console.log(updatedBlog)

    // //delete
    // const deletedBlog = await db.Blog.findOneAndDelete({name: 'Another test blog'})
    // console.log(deletedBlog) 

    process.exit()

    } catch(err) {
        console.log(err)
    }
}

testCRUD()
