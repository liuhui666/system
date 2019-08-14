import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './view/Login';
import Home from './view/Home';
import BindForm from './view/MobxDemo/BindForm';
import TodoList from './view/ReduxDemo/TodoList';
import Drag from './view/Mine/Drag';
import NotFound from './view/Common/NotFound';


class Routes extends Component {
  render() {
    return (<Router>
      <Switch>
        {/* {
         !window.localStorage.getItem('user_name') &&
         <Redirect from="*" to="/moliere/Login" exact />
       }
        */}
        <Redirect from="/" to="/Home" exact />
        <Route path="/moliere/Login" exact component={Login} />
        <Route path="/Home" exact component={Home} />
        <Route path="/ReduxDemo/TodoList" exact component={TodoList} />
        <Route path="/MobxDemo/BindForm" exact component={BindForm} />
        <Route path="/Mine/Drag" exact component={Drag} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>);
  }
}

export default Routes;
