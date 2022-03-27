import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, userRegistration } from "./firebase";
import './Register.css'

function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if(loading) {
            return; 
        }
        if (user) navigate("/");
    });

    return (
        <div className = 'register'>
            <div className = 'img_container'>
                <img className = 'signup_image' alt = ''/>
            </div>

            <div className = 'register_container'>
                <input type='text' className='textbox' value={name} onChange={e => setName(e.target.value)} placeholder='Name'/>
                
                <input type='text' className='textbox' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address'/>
                
                <input type='password' className='textbox' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />

                <button onClick={() => userRegistration(name, email, password)} className='signup_button'>Sign Up</button>

                <div>
                    Already have an account? <Link className = 'link' to="/login">Log In</Link> now.
                </div>
            </div>
        </div>
    )
}

export default Register
