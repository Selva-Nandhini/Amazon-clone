
import React, { useState } from 'react';
import "./Login.css"

import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase"; 

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                        <Link to="/Checkout">
                        <button type='submit' className='login__signInButton'>Sign In</button>
                        </Link>
                    
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <h5 className="login__newToAmazon">New to Amazon ?</h5>
                <Link to="/SignIn">
                <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>
               
            </div>
        </div>
    )
}

export default Login
