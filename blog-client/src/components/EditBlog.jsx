import {useState} from 'react'
import axios from 'axios'
export default function EditBlog (props){
    const [form,setForm] = useState({
        title:props.blog.title,
        author:props.blog.author,
        body:props.blog.body,
    })

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/blogs/${props.blog._id}`, form)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
            props.setBlogs(response.data)
            props.handleClick()
        }catch(err){
            console.log(err)
        }
    }
  const handleDelete = async ()=>{
    try{
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blogs/${props.blog._id}`)
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
        props.setBlogs(response.data)
        props.handleClick()
    }catch(err){
        console.log(err)
    }
  }

    return(
        <>
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
    <button onClick={handleDelete}>Delete</button>
    <button onClick={props.handleClick}>Cancel</button>
        </>
    )
}