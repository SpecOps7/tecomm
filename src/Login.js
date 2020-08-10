import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = event => {
        event.preventDefault(); // this stops the refresh
        //login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to homepag..
            history.push('/');
        })
        .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault(); // this stops the refresh
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');

            //created user and logged in, redirect to hpg
        })
        .catch(e => alert(e.message));

    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" 
                    src="data:image/png;base64,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"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing in you agree to Amazon's Conditions of use and sale. Please see our Privacy Notice, our Cookies notice andour Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
