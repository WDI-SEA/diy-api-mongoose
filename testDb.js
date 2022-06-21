const db = require('./models')

const blogCrud = async () => {
  try {
    const newBlog = new db.Blog({
      name: 'Jimmy',
      title: 'Wet Mayo For All',
      content: 'I do declare that all the good people of Los Angeles will have all the wet mayo their hearts desire',
    })

    await newBlog.save()
  } catch (err) {
    console.warn(err)
  }
}

blogCrud()

// const commentCrud = async () => {
//     try {
//       const newComment = await db.Comment.create({
//         content: 'No more wet mayo!',
//       })
  
//       const blog = await db.Blog.findById('62ad2e69da91d2ea394c6c4d')
  
//       blog.comments.push(newComment)
//       newComment.blogs = blog
  
//       await newComment.save()
//       await blog.save()
//     } catch (err) {
//       console.warn(err)
//     }
//   }
  
//   commentCrud()