import { useState } from 'react'

export default function BlogCreateForm({ submitHandler,
handleFormChange}) {
    const [form, setform] = useState({})
    return (
        <form onSubmit={e => submitHandler(e, form, setform)}>


            <label htmlFor='title'> title:</label>
            <input
                type='text'
                id='title'
                value={form.title}
                onChange={e => setform({ ...form, title: e.target.value})
            }
            />

            <button  type='submit' >create</button>

            <label htmlFor='blog'> blog</label>
            <input
                type='text'
                id='blog'
                value={form.content}
                onChange={e => setform({ ...form, blog: e.target.value})
            }
            />

            <button  type='submit' >create</button>
        </form>

    )
}
