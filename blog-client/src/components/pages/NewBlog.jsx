import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function NewBlog() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    body: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_SERVER_URL}/blogs`,form)
        .then(response=>{
            navigate('/')
        })
        .catch(console.error)
  };
  return (
  <div style={{textAlign:'center'}}>
  <h1>Create new post</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title: </label>
            <input 
                id='title'
                required
                autoComplete="off"
                value={form.title}
                onChange={(e)=>setForm({ ...form, title:e.target.value})}
             />
            <label htmlFor="author">Author: </label>
            <input 
                id='author'
                required
                autoComplete="off"
                value={form.author}
                onChange={(e)=>setForm({ ...form, author:e.target.value})}  
            />
        </div>
        <div>
        <label htmlFor="content">content: </label>
        <textarea 
                id='content' 
                required
                autoComplete="off"
                value={form.body}
                onChange={(e)=>setForm({ ...form, body:e.target.value})}
        />
        </div>
        <button type="submit">Submit</button>
    </form>
  </div>
    )
}
