import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if(loading) {
            return; 
        }
        if (user) navigate("/");
    });

    return (
        <div className = 'login'>
            <div className = 'img_container'>
                <img className = 'login_image' alt = ''/>
            </div>

            <div className = 'login_container'>
                <input type='text' className='textbox' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address'/>
                
                <input type='password' className='textbox' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />

                <button onClick={() => signInWithEmailAndPassword(email, password)} className='login_button'>Log In</button>

                <button className='login_button login_google' onClick={signInWithGoogle}>Login With Google</button>

                <div>
                    Don't have an account? <Link className = 'link' to="/register">Register</Link> now.
                </div>

                <div>
                    <Link className = 'link' to="/reset">Forgot Password?</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Login
