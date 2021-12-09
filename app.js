const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

//express application
const app = express();
app.use(express.urlencoded({ extended: false }));

//connect to database
const db = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myblog');
    app.listen(5000);
  } catch (e) {
    console.error(e);
  }
};

app.get('/', async (req, res) => {
  const allBlogs = await Blog.find(req.body);
  try {
    res.json(allBlogs);
  } catch (e) {
    console.error(e.message);
  }
});

app.get('/:id', async (req, res) => {
  const oneBlog = await Blog.findOne(req.body);
  try {
    res.json(oneBlog);
  } catch (e) {
    console.error(e.message);
  }
});

app.post('/', async (req, res) => {
  const newBlog = await Blog.create(req.body);

  try {
    res.json(newBlog);
  } catch (e) {
    console.error(e.message);
  }
});

app.put('/:id', async (req, res) => {
  const updatedBlog = await Blog.updateOne(req.body);
  try {
    res.json(updatedBlog);
  } catch (e) {
    console.error(e.message);
  }
});

app.delete('/:id', async (req, res) => {
  const deleteBlog = await Blog.deleteOne(req.body);
  try {
    res.json(deleteBlog);
  } catch (e) {
    console.error(e.message);
  }
});

db();
