/**
 * 提供model 的Form容器  context的model
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import refers from '../refers';


export default class Form extends Component {
  static propTypes={
    name: PropTypes.string,
    model: PropTypes.object,
    onSubmit: PropTypes.func,
  }

  static defaultProps={
    onSubmit: () => {},
  }
  static childContextTypes={
    model: PropTypes.object,
  }

  getChildContext() {
    return { model: this.props.model };
  }

  constructor(props) {
    super(props);
    const { name } = props;
    if (name) {
      if (refers.name) {
        throw new Error(`已存在名为${name}的refer`);
      } else {
        refers[name] = this;
      }
    }
  }

  componentWillUnmount() {
    delete refers[this.props.name];
  }

  model=() => toJS(this.props.model)

  submit=(...args) => {
    this.props.onSubmit(...args);
  }

  keyPress=(e) => {
    if (e.nativeEvent.keyCode === 13) {
      this.props.onSubmit(e);
    }
  }
  render() {
    return (<div
      {...this.props}
      onSubmit={this.submit}
      onKeyPress={this.keyPress}

    />);
  }
}
