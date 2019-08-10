import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Login from './view/Login';
import Home from './view/Home';
import NotFound from './view/Common/NotFound';


export default class Routes extends Component {
  render() {
    return (<Router>
      <Switch>
        {/* {
         !window.localStorage.getItem('user_name') &&
         <Redirect from="*" to="/moliere/Login" exact />
       }
        */}
        <Redirect from="/" to="/Home" exact />
        {/* <Route path="/moliere/Login" exact component={Login} /> */}
        <Route path="/Home" exact component={Home} />
        <Route path="*" component={NotFound} />

      </Switch>
    </Router>);
  }
}
