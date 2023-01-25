import { Link } from "react-router-dom"
export default function Navbar (){
    return(
        <>
        <nav>
            <Link to='/'>Home</Link><br></br>
            <Link to='/new-blog'>Post Blog</Link>
        </nav>
        </>
    )
}