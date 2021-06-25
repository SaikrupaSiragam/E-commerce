import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductFeed from './ProductFeed';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';

const AuthRoute=(props)=>{
  const {path, component, exact=false, ...p}=props;
  return <Route
            {...p}
            exact={exact}
            path={path}
            render={()=>{
              return sessionStorage.getItem('user-session-token')?component : window.location.href='/Login'
            }}/>
}

const PublicRoute=(props)=>{
  const{path,...p}=props;
  return sessionStorage.getItem('user-session-token') ? window.location.href='/Login' : 
    <Route path={path} {...props}>{props.children}</Route>
}

function App() {
  return (
    <div className="App">
      <h1>Shopping App</h1>
      {
        sessionStorage.getItem('user-session-token')? 
        (<button className='btn btn-danger'
        onClick={()=>{ sessionStorage.clear(); window.location.href='/Login'}}>LogoUt</button>):null
      }

      <Router>
        <Switch>

          <Route exact path="/">
            <ProductFeed  />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/Login">
            <Login/>
          </Route>

          <Route path="/Signup">
            <Signup/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
