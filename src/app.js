import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button } from 'antd';
import './index.css'

class A extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      Component A
      <Switch>
        <Route exact path={`${this.props.match.path}`}
          render={(route) => {
            return <div>不带参数: {route.match.params.id}</div>
          }} />
        <Route path={`${this.props.match.path}/:id`}
          render={(route) => {
            return <div>参数: {route.match.params.id}</div>
          }} />

      </Switch>
    </div >
  }
}
class B extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>Component B</div>
  }
}

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <Link to='/a'>组件A</Link>
      <Link to='/a/123'>带参组件A</Link>
      <Link to='/b'>组件B</Link>
      {this.props.children}
    </div>
  }
}

ReactDOM.render(<Router>
  <Wrapper>
    <Button>我是个Button</Button>
    <Route path='/a' component={A} />
    <Route path='/a/:id' component={A} />
    <Route path='/b' component={B} />
  </Wrapper>
</Router>, document.getElementById('app'))