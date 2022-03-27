import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.css'
import { addNewBlog } from './firebase';



function Create() {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDesc] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className = 'create'>
            <h2>Write a Post</h2>      
            <div className = 'create_container'>
                
                <input type='text' className='textbox' value={title} onChange={e => setTitle(e.target.value)} placeholder='Title'/>

                <input type='text' className='textbox' value={description} onChange={e => setDesc(e.target.value)} placeholder='Description'/>

                <input type='url' className='textbox' value={image} onChange={e => setImage(e.target.value)} placeholder='Image URL'/>

                <textarea id='content' className='textbox' onChange={e => setContent(document.getElementById('content').value)}></textarea>
                
                <div className='button'>
                    <button disabled={!title || !image || !description || !content } onClick={() => addNewBlog(title, description, image, content).then(navigate('/blogs'))} className='submit_button'>Submit</button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Create 
