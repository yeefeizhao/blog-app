import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { logout } from './firebase';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
    const [user] = useAuthState(auth);


    return (

        <div className = 'header'>
            
            <div className = 'header_nav'>

                <img className = 'header_logo' alt='logo'/>

                <div className = 'header_text'>
                    <Link to='/'>
                        <p>Home</p>
                    </Link>


                    <Link to='/blogs'>
                        <p>All Blogs</p>
                    </Link>
                    <Link to={user ? '/create' : '/login'}>
                        <p>Write a Post</p>
                    </Link>
                
                    <Link to={!user && '/login'}>
                        <p onClick = {logout}><strong>{user ? "Log Out" : "Log In"}</strong></p>
                    </Link>
                    
                </div>

               

            </div>
            

        </div>
    )
}

export default Header
