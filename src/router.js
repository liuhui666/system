import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './view/Home'


export default class Routes extends Component{
 render(){
   return <Home/>
 }
}