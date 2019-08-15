
import React from 'react';
import App from 'BizComponent/App';
import SimpleDrag from './SimpleDrag';
import AdvancedDrag from './AdvancedDrag';

export default class Drag extends React.Component {
  render() {
    return (<App>
      <AdvancedDrag />
      <SimpleDrag />
    </App>);
  }
}
