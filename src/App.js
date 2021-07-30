import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
//BEM convention
const promise = loadStripe('pk_test_51JBCrKSIyIYs1SbmStvxinibsMeBHe2K2s75SXtHNVj1AgtCmOOMFueZLc9EO9JPrCusHee0sWTjiHkmbBo5bNHh00uL1iEGE4')

function App() {
  const [{}, dispatch] =useStateValue();
  useEffect(()=> {
    // will only run once when the app component loads because [] is empty
    // useEffect is like a listener like when we login it fires this code, when we singin it fires this code 
    auth.onAuthStateChanged(authUser => { // whenever authentication state is changed it give us the user
      console.log('The User is >>>', authUser)

      if ( authUser ) { // if there is a auth user
        // the user logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    }) // we want to store the user so go to reducer and add user
  }, [])
  return (
    
    <Router>
       <div className="app">

         <Switch>

            <Route path='/orders'>
              <Header/>
              <Orders/> 
            </Route>

            <Route path='/login'>
              <Login/> 
            </Route>

            <Route path='/checkout'>
              <Header/>
              <Checkout/>
           </Route>

           <Route path='/payment'>
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
              
           </Route>

           <Route path='/'>
              <Header/>
              <Home/>
           </Route>  

         </Switch>

      </div>
    </Router>
   
   
  );
}

export default App;
 
// React router is used to link and switch diff pages on a website.
//To install tht cd to ur file and "npm install react-router-dom"
// Then import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
//Everything you return should be inside Router
//Use Switch to change pages
//Route='/' is default and should always be at bottom