import blog from "../../../models/blog";

export default function Blogetails({bounty}) {
    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
        

        </div>
    )
}
