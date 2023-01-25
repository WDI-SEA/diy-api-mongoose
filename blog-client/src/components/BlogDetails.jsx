export default function BlogDetails(props){
    return(
        <>
            <p>Author: {props.blog.author}</p>
            <p>Title: {props.blog.title}</p>
            <p>Content: {props.blog.body}</p>
            <button onClick={props.handleClick}>Edit</button>
        </>
    )
}