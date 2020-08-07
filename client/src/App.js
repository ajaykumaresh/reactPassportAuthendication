import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import './App.css';
import Dashboard from './component/dashboard';
import Profile from './component/profile';
import Signin from './component/signin';
import Signup from './component/signup';
import Home from './component/home';
import Notfound from './component/notfound';
import ProtectedRoutes from './component/protected';
import Nav from './component/nav';
export default class App extends Component {
  render() {
    return (

 
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <ProtectedRoutes path='/a/dashboard' component={Dashboard} />
          <Route path='/profile' component={Profile} />
          <Route path='/signin' component={Signin} />
          <Route path='/Signup' component={Signup} />
          <Route path='/*' component={Notfound} />
        </Switch>
      </Router>

    );
  }
}
