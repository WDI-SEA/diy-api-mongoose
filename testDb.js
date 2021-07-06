const db = require('./models')
db.connect()

// const testBlog = async () => {
//     try{
//     // Create a post
//     const newPost = await new db.Blog({
//         name: "MATEJ MOHORIC", 
//         title: 01010101,
//         content: 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIpsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIpsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIpsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
//     })

//     await newPost.save()

//     console.log('👍 New Blog post: ', newPost)
//     }
//     catch(err){
//         console.log('Error: ',err)
//     }
// }


testBlog()