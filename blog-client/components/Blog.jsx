import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import BountyDetails from "../BlogDetails"
import BountyForm from "../BlogForm"

export default function Blog() {

	
	const [blog, setBlog] = useState({})

	const [showForm, setShowForm] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()


	useEffect(() => {
		axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`)
			.then(response => {
				console.log(response.data)
				setBlog(response.data)
			})
			.catch(console.warn)
	}, [id])

	const handleSubmit = (e, form, setForm) => {
		e.preventDefault()
		axios.put(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`, form)
			.then(response => {
				console.log(response.data)
				setBlog(response.data) // add updated bounty to state
				setShowForm(false) // hide form
			})
			.catch(console.warn)
	}
	const handleDelete = () => {
		axios.delete(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`)
			.then(response => {
				// navigate away from this page
				navigate('/')
			})
			.catch(console.warn)
	}

	return (
		<div>
			{
				showForm ?
				<BlogForm
					initialForm={blog}
					submitHandler={handleSubmit}
				/> :
				<BlogDetails
					blog={blog}
				/>
			}

			<button
				onClick={() => setShowForm(!showForm)}
			>
				{ showForm ? 'Cancel' : 'Edit' }
			</button>

			{
				showForm ?
				<button
					onClick={handleDelete}
				>
					Delete
				</button> :
				''
			}
		</div>
	)
}
