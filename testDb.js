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