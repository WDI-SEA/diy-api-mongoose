import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BountyForm from '../BlogForm'

export default function Home() {

	const [blogs, setBlogs] = useState([])
	// error message state
	const [err, setErr] = useState('')
	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
				setBlogs(response.data)
				console.log(response.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchBlogs()
	}, [])

	//
	const handleSubmit = async (e, form, setForm) => {
		e.preventDefault()

		console.log('the form data is:', form)
		try {

			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blogs`, form)

			setBlogs([...blogs, response.data])



			
			setForm({
				title: '',
				content: '',
				comments: [],

			})
			// clear error
			setErr('')
		} catch (err) {
			console.warn('submit error: ', err)
			if (err.response) {
				if (err.response.status === 400) {
					// this error is a validation error from our backed
					setErr(err.response.data.msg)
				}
			}
		}
	}

	console.log('my server url is:', process.env.REACT_APP_SERVER_URL)
	const blogLinks = blogs.map((blog, idx) => {
		return (
			<div key={`bountylink${idx}`}>
				<Link to={`/bounties/${blog._id}`}>{blog.name}</Link>
			</div>
		)
	})
	return (
		<div>
			<h1>Create New Blog:</h1>
			<p>{err}</p>
			<BlogForm
				submitHandler={handleSubmit}
				initialForm={{

                        title: '',
                        content: '',
                        comments: [],


				}}
			/>


			{blogLinks}
		</div>
	)
}
