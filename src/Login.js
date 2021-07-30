// import React from 'react'
import  React, { useState } from 'react';
import './Login.css'
import {Link, useHistory } from "react-router-dom"
import { auth } from './firebase';


function Login() {
    const history =  useHistory(); // checks previous history of mails
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // initial values of email and password are empty

    const signIn = e => {
        e.preventDefault()  // This is to prevent refresh when signIn event e is triggered

        auth
            .signInWithEmailAndPassword( email, password )
            .then( auth => {
                history.push('/') // if successful redirect to home
            })
            .catch(error => alert(error.message))
        // going to use some firebase thing...
    }

    const createAccount = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword( email, password )
            .then (( auth ) => {
                // it successfully created a new user with email and password
                //console.log( auth );
                // if authentication is done then redirect the page to home page
                if ( auth ) {
                    history.push( '/' )
                }
            })
            .catch( error => alert( error.message ))


        // going to use some firebase thing...

    }




    return (
        <div className="login">

            <Link to='/'>
                <img className='login__logo'
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

               <form>
                   <h5>E-mail</h5>
                   <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                   {/* mapped the value of email to useState above.
                    onChange is when a user types in the input.
                   event arrow function i.e, e sets the Email to value inside the input */}

                   <h5>Password</h5>
                   <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                   {/* signIn it is a function*/}
                   <button type='submit' onClick={signIn} 
                        className='login__signInButton'>Sign In
                   </button>
               </form>

               <p>
                   By signing-in you agree to AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
               </p>

                {/* createAccount is a function */}
               <button type='submit' onClick={createAccount}
                    className='login__createAccountButton'>Create Account
                </button>

            </div>
            
        </div>
    )
}

export default Login
