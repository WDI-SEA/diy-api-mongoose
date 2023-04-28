const db = require("./models")



const blogCrud = async () => {
  try {
    // CREATE
    const newBlogEntry = db.Blog({
      name: 'John Doe',
      title: 'Hello!',
      content: 'This is my first blog posts 📝'
    });
    await newBlogEntry.save();

} catch (err) {
    console.log(err);
  }
};

blogCrud();