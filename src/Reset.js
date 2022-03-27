import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { resetPassword } from './firebase';
import './Reset.css'

function Reset() {
    const [email, setEmail] = useState('');

    return (
        <div className = 'reset'>
            <div className = 'img_container'>
                <img className = 'reset_image' alt = ''/>
            </div>

            <div className = 'reset_container'>
                <input type='email' className='textbox' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />

                <button onClick={() => resetPassword(email)} className='reset_button'>Set Password Reset Email</button>

                <div>
                    Don't have an account? <Link className = 'link' to="/register">Register</Link> now.
                </div>
            </div>
            
        </div>
    )
}

export default Reset
