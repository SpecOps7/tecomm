import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import cyberTruck from "./cybertruck__font.png";


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
                    src={cyberTruck}
                />
            </Link>

            <div className="login__container">
                <h1 className="login__containerText">Sign In</h1>
                <form>
                    <h5 className="login__containerText">Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5 className="login__containerText">Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p className="login__containerText">
                    By signing in you agree to TSLA's Conditions of use and sale. Please see our Privacy Notice, our Cookies notice andour Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your CyberTruck Account</button>
            </div>
            
        </div>
    )
}

export default Login
