import React, { Component } from 'react';
import App from 'BizComponent/App';

export default class JSForm extends Component {
  render() {
    return (<App>
      {/* 原生js */}
      <form name="form" method="get">
        <input />
        <br />
        <input type="submit" value="提交啦啦啦" />
      </form>
    </App>);
  }
}
