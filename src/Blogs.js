import React, { useEffect, useState } from 'react'
import './Blogs.css'
import CardComponent from './CardComponent';
import { db } from './firebase'
import moment from 'moment'

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        db
        .collection('blogs')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setBlogs(snapshot.docs.map(doc => ({
                data: doc.data() 
            })))
        ))  
    }, [])

    console.log(blogs)
    return (
        <div className = 'blogs'>
            <h1>All Blogs</h1>

            <div className='blog'>
                {blogs?.map(blog => (
                    <CardComponent className='card_component'
                        image={blog.data.image} 
                        date={moment.unix(blog.data.created).format('MMMM Do YYYY')}
                        author={blog.data.author}
                        title={blog.data.title} 
                        description={blog.data.description} 
                        content={blog.data.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default Blogs
