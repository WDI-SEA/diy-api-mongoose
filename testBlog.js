const db = require('./models')

db.connect()
 const blogCRUD = async() => {
     try {
         //CREATE
        const newBlog = await new db.Blog({
            _id: 1,
            name: "blogger30000",
            title: 'blogpost1',
            content:  'first blog post'
        })
        await newBlog.save()
        console.log('new Blog post:', newBlog)


     } 
     catch(err) {
         console.log(err)
     }
 }
 blogCRUD()