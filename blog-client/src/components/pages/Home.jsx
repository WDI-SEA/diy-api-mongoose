
import axios from "axios"
import { useState,useEffect } from "react"
import BlogDetails from "../BlogDetails"
import EditBlog from "../EditBlog"
export default function Home (){
    const [blogs,setBlogs]= useState([])
    const [details,setDetails]= useState('')
    const[showForm,setShowForm] = useState(false)

    useEffect(()=>{
        const pingAPI = async ()=>{
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
                console.log(response.data)
                setBlogs(response.data)
            }catch(err){
                console.warn(err)
            }
        }
        pingAPI()
      },[]) 
      const handleClick = ()=>setShowForm(!showForm)


      const blogComp = blogs.map((blog)=>{
        return(
            <div key={`blogs-%${blog._id}`}>
                <h2>{blog.title} <br></br> By: {blog.author}</h2>
                <button onClick={()=>setDetails(blog._id)}>See the deets</button>
            </div>
        )
      })
      const blogDetails = blogs.find(blog=> blog._id === details)
      const detailPane = blogDetails ? <BlogDetails blog={blogDetails} handleClick={handleClick}/>: 'Click on a blog'
      const sidePane = showForm ? <EditBlog handleClick={handleClick} blog={blogDetails} setBlogs={setBlogs}/>:detailPane

    return(
        <div style={{ display: "flex" }}>
        <div style={{ width: "50vw" }}>
        <h1>Blogs: </h1>
            {blogComp}
        </div>
        <div style={{ width: "50vw" }}>
        <h1>Deets: </h1>
        {sidePane}
        </div>
        </div>
    )
}