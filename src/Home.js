import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className = 'home'>
            <div className = 'img_container'>
                <img className = 'landing_image' alt = 'landing'/>
            </div>

            <div className='text_box'>
                <Link to='/blogs' className = 'btn btn-color'>Explore Blogs</Link>
            </div>

            
        </div>
    )
}

export default Home
